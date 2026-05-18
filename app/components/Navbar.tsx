'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS } from '../constants/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const isActive = useCallback((href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }, [pathname]);

  const isDarkHeroZone = pathname === '/' && !scrolled;

  const linkColor = isDarkHeroZone ? 'rgba(255, 255, 255, 0.85)' : 'var(--text-muted)';
  const linkActiveColor = isDarkHeroZone ? '#ffffff' : 'var(--green-accent)';
  const navBg = isDarkHeroZone ? 'transparent' : 'rgba(255, 255, 255, 0.95)';
  const navBlur = isDarkHeroZone ? 'none' : 'blur(12px)';
  const navBorder = isDarkHeroZone ? '1px solid transparent' : '1px solid rgba(15, 23, 42, 0.06)';
  const mobileToggleColor = isDarkHeroZone ? '#ffffff' : '#0f172a';

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: navBg,
          backdropFilter: navBlur,
          borderBottom: navBorder,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/lingo-tech.png"
                alt="LingoTech Solutions"
                width={190}
                height={55}
                className="h-[38px] sm:h-[52px] w-auto object-contain transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative text-sm font-semibold transition-all duration-300"
                  style={{
                    color: isActive(href) ? linkActiveColor : linkColor,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDarkHeroZone ? '#ffffff' : 'var(--green-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive(href) ? linkActiveColor : linkColor;
                  }}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold transition-all duration-300 shadow-sm rounded-lg"
                style={{ 
                  backgroundColor: isDarkHeroZone ? 'transparent' : 'var(--green-accent)', 
                  border: isDarkHeroZone ? '2.5px solid rgba(255, 255, 255, 0.45)' : '2.5px solid var(--green-accent)',
                  color: '#ffffff',
                  fontFamily: "'Poppins', sans-serif" 
                }}
                onMouseEnter={(e) => {
                  if (isDarkHeroZone) {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#0b3c91';
                    e.currentTarget.style.borderColor = '#ffffff';
                  } else {
                    e.currentTarget.style.opacity = '0.9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isDarkHeroZone) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                  } else {
                    e.currentTarget.style.opacity = '1.0';
                  }
                }}
              >
                Let&apos;s Talk
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 transition-colors duration-300"
              style={{ color: mobileToggleColor }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-white">
          <div className="pt-24 px-6 flex flex-col gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold transition-colors duration-300"
                style={{
                  color: isActive(href) ? 'var(--green-accent)' : 'var(--text-main)',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center mt-8 px-6 py-4 text-base font-bold text-white shadow-md rounded-xl"
              style={{ backgroundColor: "var(--green-accent)", fontFamily: "'Poppins', sans-serif" }}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </>
  );
}