'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  className?: string;
  'aria-label'?: string;
}

export default function LazyVideo({ src, poster, autoPlay = true, loop = true, muted = true, playsInline = true, className, 'aria-label': ariaLabel }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay={inView && autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      aria-label={ariaLabel}
      preload={inView ? "auto" : "none"}
    >
      {inView && <source src={src} type="video/mp4" />}
    </video>
  );
}
