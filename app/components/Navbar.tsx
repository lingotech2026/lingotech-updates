'use client';

import type { ReactNode } from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../constants/navigation';
import { Icons } from './Icons';
import LoadingLink from './LoadingLink';
import Image from 'next/image';

type NavbarProps = {
  topRightContent?: ReactNode;
};

export default function Navbar({ topRightContent }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const previousOverflowRef = useRef<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let frameId: number | null = null;
    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 50;
        setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
        frameId = null;
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      if (previousOverflowRef.current === null) {
        previousOverflowRef.current = document.body.style.overflow;
      }
      document.body.style.overflow = 'hidden';
      return;
    }
    if (previousOverflowRef.current !== null) {
      document.body.style.overflow = previousOverflowRef.current;
      previousOverflowRef.current = null;
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const isActive = useCallback((href: string) => {
    if (href.startsWith('#')) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }, [pathname]);

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95'
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <LoadingLink
              href="/"
              className="flex-shrink-0"
              aria-label="Lingotech Solutions Home"
            >
              <div className="relative h-[50px] w-32 md:w-36">
                <Image
                  src="/lingo_tech.jpeg"
                  alt="Lingotech Solutions Logo"
                  fill
                  sizes="144px"
                  className="object-contain"
                  priority
                />
              </div>
            </LoadingLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href, id }) => (
                <LoadingLink
                  key={id}
                  href={href}
                  className={`text-[15px] font-medium transition-colors py-2 ${
                    isActive(href)
                      ? 'text-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  {label}
                </LoadingLink>
              ))}

              {topRightContent && (
                <div className="ml-3 pl-3 border-l border-gray-200">
                  {topRightContent}
                </div>
              )}
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              aria-label="Toggle menu"
            >
              <Icons.Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
          />
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-semibold text-lg text-gray-900">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <Icons.Close className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-4">
              {NAV_LINKS.map(({ label, href, id }) => (
                <LoadingLink
                  key={id}
                  href={href}
                  onClick={closeMobileMenu}
                  className={`block py-3 font-medium ${
                    isActive(href)
                      ? 'text-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  {label}
                </LoadingLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}