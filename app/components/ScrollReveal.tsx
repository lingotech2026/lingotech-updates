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
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const canObserve = typeof window !== 'undefined' && 'IntersectionObserver' in window;

    if (prefersReducedMotion || !canObserve) {
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

  const shouldRevealImmediately =
    prefersReducedMotion || (typeof window !== 'undefined' && !('IntersectionObserver' in window));

  const revealClassName = `reveal reveal-${animation} ${isVisible || shouldRevealImmediately ? 'is-visible' : ''} ${className}`.trim();

  return (
    <div ref={elementRef} className={revealClassName} style={style}>
      {children}
    </div>
  );
}
