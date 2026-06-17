'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface VideoSource {
  src: string;
  type: string;
  media?: string;
}

interface LazyVideoProps {
  sources: VideoSource[];
  poster: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  className?: string;
  'aria-label'?: string;
  captionSrc?: string;
  /** Decorative background video — no captions, hidden from assistive tech */
  decorative?: boolean;
  /** When false, video only loads on viewport intersection or user interaction */
  loadOnIdle?: boolean;
  /** When false, skip viewport-based loading (poster-only until interaction) */
  loadOnViewport?: boolean;
}

function scheduleIdle(callback: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const win = window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    cancelIdleCallback?: (id: number) => void;
  };

  if (win.requestIdleCallback && win.cancelIdleCallback) {
    const id = win.requestIdleCallback(callback, { timeout: 2500 });
    return () => win.cancelIdleCallback!(id);
  }

  const id = win.setTimeout(callback, 1200);
  return () => win.clearTimeout(id);
}

export default function LazyVideo({
  sources,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  className,
  'aria-label': ariaLabel,
  decorative = false,
  loadOnIdle = true,
  loadOnViewport = true,
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const loadVideo = useCallback(() => {
    setShouldLoad((current) => (current ? current : true));
  }, []);

  useEffect(() => {
    let isMounted = true;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (isMounted) loadVideo();
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.01 }
    );

    if (loadOnViewport) {
      observer.observe(node);
    }
    const cancelIdle = loadOnIdle ? scheduleIdle(() => {
      if (isMounted) loadVideo();
    }) : () => {};

    const onInteraction = () => {
      if (isMounted) loadVideo();
      window.removeEventListener('pointerdown', onInteraction);
      window.removeEventListener('keydown', onInteraction);
    };

    window.addEventListener('pointerdown', onInteraction, { passive: true });
    window.addEventListener('keydown', onInteraction, { passive: true });

    return () => {
      isMounted = false;
      observer.disconnect();
      cancelIdle();
      window.removeEventListener('pointerdown', onInteraction);
      window.removeEventListener('keydown', onInteraction);
    };
  }, [loadOnIdle, loadOnViewport, loadVideo]);

  useEffect(() => {
    let isMounted = true;
    if (!shouldLoad || !videoRef.current) return;

    const video = videoRef.current;

    const disableTracks = () => {
      if (decorative) {
        Array.from(video.textTracks).forEach((track) => {
          track.mode = 'hidden';
        });
      }
    };

    // Try to disable immediately if already loaded
    disableTracks();
    // And listen for metadata to load
    video.addEventListener('loadedmetadata', disableTracks);

    const play = async () => {
      if (!autoPlay) return;
      try {
        await video.play();
        if (isMounted) setIsPlaying(true);
      } catch {
        if (isMounted) setIsPlaying(false);
      }
    };

    if (video.readyState >= 2) {
      void play();
    } else {
      video.addEventListener('loadeddata', play, { once: true });
    }

    return () => {
      isMounted = false;
      video.removeEventListener('loadedmetadata', disableTracks);
      video.removeEventListener('loadeddata', play);
    };
  }, [autoPlay, decorative, shouldLoad]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className ?? ''}`}>
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden="true"
      />

      {shouldLoad ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload="metadata"
          aria-hidden={decorative ? true : undefined}
          aria-label={decorative ? undefined : ariaLabel}
        >
          {sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} media={source.media} />
          ))}

        </video>
      ) : null}
    </div>
  );
}
