'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  /** Whether the loading screen is visible */
  isLoading: boolean;
  /** Brand text shown with typing animation */
  brandText?: string;
  /** Optional text to display below the typing loading text */
  message?: string;
  /** Background color of the overlay */
  backgroundColor?: string;
}

/**
 * Full-screen loading overlay component
 * Includes fade in/out transitions and minimum display time to prevent flashing
 */
export default function LoadingScreen({
  isLoading,
  brandText = 'LingoTech',
  message,
  backgroundColor,
}: LoadingScreenProps) {
  const fadeDurationMs = 300;
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let showTimer: NodeJS.Timeout | undefined;
    let fadeOutTimer: NodeJS.Timeout | undefined;
    let unmountTimer: NodeJS.Timeout | undefined;

    if (isLoading) {
      showTimer = setTimeout(() => {
        setShouldRender(true);
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, 0);
    } else {
      fadeOutTimer = setTimeout(() => {
        setIsVisible(false);
      }, 0);

      unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, fadeDurationMs);
    }

    return () => {
      if (showTimer) clearTimeout(showTimer);
      if (fadeOutTimer) clearTimeout(fadeOutTimer);
      if (unmountTimer) clearTimeout(unmountTimer);
    };
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      style={{
        background: backgroundColor || 'linear-gradient(135deg, #0f1f39 0%, #1b3764 50%, #234476 100%)'
      }}
      aria-hidden={!isLoading}
    >
      <p className="loading-brand-text" aria-label={brandText}>
        <span className="loading-brand-typing">{brandText}</span>
      </p>
      {message && (
        <p className="mt-6 text-center text-base font-medium animate-pulse" style={{ color: 'var(--lt-text-on-primary)' }}>
          {message}
        </p>
      )}
    </div>
  );
}
