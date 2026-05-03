'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ComponentProps, type MouseEvent } from 'react';
import { useLoading } from './AppLoadingProvider';

type LoadingLinkProps = ComponentProps<typeof Link>;

/**
 * Enhanced Link component that triggers loading state on navigation
 * Use this instead of Next.js Link for seamless loading transitions
 */
export default function LoadingLink({ 
  href, 
  children, 
  onClick,
  ...props 
}: LoadingLinkProps) {
  const { startLoading } = useLoading();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    // Preserve native browser behavior for modified and non-primary clicks.
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }

    const isHashLink = typeof href === 'string' && href.startsWith('#');
    const isExternal =
      typeof href === 'string' && (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:'));

    const targetPathname = typeof href === 'string'
      ? (() => {
          try {
            return new URL(href, window.location.href).pathname;
          } catch {
            return null;
          }
        })()
      : null;

    const isSamePathNavigation = targetPathname !== null && targetPathname === pathname;

    if (!isHashLink && !isExternal && !isSamePathNavigation) {
      startLoading();
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
