'use client';

import { useState, useEffect, createContext, useContext, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from './LoadingScreen';

interface LoadingContextType {
  startLoading: () => void;
  stopLoading: () => void;
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType>({
  startLoading: () => {},
  stopLoading: () => {},
  isLoading: false,
});

export const useLoading = () => useContext(LoadingContext);

interface AppLoadingProviderProps {
  children: React.ReactNode;
  /** Minimum loading time in seconds */
  minLoadingSeconds?: number;
  /** Loading message to display */
  message?: string;
  /** Show loading on page refresh */
  showOnRefresh?: boolean;
  /** Show loading on route changes */
  showOnNavigation?: boolean;
}

/**
 * Enhanced loading provider that handles:
 * - Initial page load & refresh
 * - Route navigation changes
 * - Manual loading triggers
 */
export default function AppLoadingProvider({
  children,
  minLoadingSeconds = 3,
  message,
  showOnRefresh = true,
  showOnNavigation = true,
}: AppLoadingProviderProps) {
  const maxNavigationFallbackMs = 16000;
  const minLoadingMs = Math.max(0, minLoadingSeconds * 1000);
  const [isLoading, setIsLoading] = useState(showOnRefresh);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const hasMountedRef = useRef(false);
  const routeStartTimeRef = useRef<number | null>(null);
  const refreshTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigationFallbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimeoutRef = (timeoutRef: { current: ReturnType<typeof setTimeout> | null }) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const hideAfterMinimumDuration = useCallback((startedAt: number, onDone: () => void) => {
    const elapsed = Date.now() - startedAt;
    const remaining = Math.max(0, minLoadingMs - elapsed);

    return setTimeout(onDone, remaining);
  }, [minLoadingMs]);

  useEffect(() => {
    clearTimeoutRef(refreshTimeoutRef);

    if (!showOnRefresh) {
      refreshTimeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    const startTime = Date.now();

    const handleLoad = () => {
      refreshTimeoutRef.current = hideAfterMinimumDuration(startTime, () => {
        setIsLoading(false);
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeoutRef(refreshTimeoutRef);
      };
    }
  }, [hideAfterMinimumDuration, showOnRefresh]);

  useEffect(() => {
    if (!showOnNavigation) return;

    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    clearTimeoutRef(navigationTimeoutRef);
    clearTimeoutRef(navigationFallbackTimeoutRef);

    const startedAt = routeStartTimeRef.current ?? Date.now();
    routeStartTimeRef.current = null;

    navigationTimeoutRef.current = hideAfterMinimumDuration(startedAt, () => {
      setIsNavigating(false);
    });

    return () => {
      clearTimeoutRef(navigationTimeoutRef);
      clearTimeoutRef(navigationFallbackTimeoutRef);
    };
  }, [hideAfterMinimumDuration, pathname, showOnNavigation]);

  useEffect(() => {
    return () => {
      clearTimeoutRef(refreshTimeoutRef);
      clearTimeoutRef(navigationTimeoutRef);
      clearTimeoutRef(navigationFallbackTimeoutRef);
    };
  }, []);

  const startLoading = useCallback(() => {
    if (!showOnNavigation) return;

    clearTimeoutRef(navigationFallbackTimeoutRef);
    routeStartTimeRef.current = Date.now();
    setIsNavigating(true);

    navigationFallbackTimeoutRef.current = setTimeout(() => {
      routeStartTimeRef.current = null;
      setIsNavigating(false);
    }, maxNavigationFallbackMs);
  }, [showOnNavigation]);

  const stopLoading = useCallback(() => {
    clearTimeoutRef(navigationTimeoutRef);
    clearTimeoutRef(navigationFallbackTimeoutRef);
    routeStartTimeRef.current = null;
    setIsNavigating(false);
  }, []);

  const showLoader = isLoading || isNavigating;

  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading, isLoading: showLoader }}>
      <LoadingScreen 
        isLoading={showLoader} 
        message={message}
      />
      <div style={{ 
        opacity: showLoader ? 0 : 1, 
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: showLoader ? 'none' : 'auto'
      }}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
}
