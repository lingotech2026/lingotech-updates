'use client';

import { useEffect, useRef, useState } from 'react';

const DEVICON_HREF = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';

/**
 * Loads devicon CSS only when a below-fold section enters the viewport.
 */
export default function DeviconStyles() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loaded) return;

    if (document.querySelector(`link[href="${DEVICON_HREF}"]`)) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = DEVICON_HREF;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  }, [loaded]);

  return <div ref={sentinelRef} className="h-px w-px opacity-0 pointer-events-none" aria-hidden="true" />;
}
