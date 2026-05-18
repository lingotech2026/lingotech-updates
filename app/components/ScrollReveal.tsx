'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

type RevealAnimation = 'fade' | 'up' | 'left' | 'right' | 'zoom';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: RevealAnimation;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Lightweight viewport reveal using Intersection Observer.
 * Adds and removes a visible class based on scroll position.
 */
export default function ScrollReveal({
  children,
  className = '',
  animation = 'up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  // Always initialize to false to match server-rendered HTML (no `is-visible` class on SSR).
  // All browser API access is deferred to useEffect to avoid hydration mismatches.
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Sync reduced-motion preference after mount (client-only)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Set the initial client value now that we're mounted
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Set up IntersectionObserver after mount (client-only)
  useEffect(() => {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      // If reduced motion or no observer support, mark visible immediately
      setIsVisible(true);
      return;
    }

    const node = elementRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once, prefersReducedMotion, rootMargin, threshold]);

  const style = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
  } as CSSProperties;

  // On SSR: isVisible=false → no `is-visible` class → matches server HTML exactly.
  // On client after mount: IntersectionObserver sets isVisible=true when in viewport.
  const revealClassName = `reveal reveal-${animation}${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`;

  return (
    <div ref={elementRef} className={revealClassName} style={style}>
      {children}
    </div>
  );
}
