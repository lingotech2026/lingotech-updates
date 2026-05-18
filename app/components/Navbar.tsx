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

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-0 z-[150] md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[290px] max-w-[80vw] bg-white border-l border-slate-100 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header Area */}
          <div className="p-5 flex items-center justify-between border-b border-slate-100">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
              <Image
                src="/lingo-tech.png"
                alt="LingoTech Solutions"
                width={130}
                height={38}
                className="h-[32px] w-auto object-contain"
                priority
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Links Area */}
          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1.5">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 text-[15px] font-semibold rounded-lg transition-all duration-200"
                style={{
                  color: isActive(href) ? 'var(--blue-brand)' : 'var(--text-muted)',
                  backgroundColor: isActive(href) ? 'var(--blue-bg-subtle)' : 'transparent',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Footer / CTA Area */}
          <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col gap-4">
            {/* Contact Quick Details */}
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:solutionslingotech@gmail.com" 
                className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                solutionslingotech@gmail.com
              </a>
              <a 
                href="tel:+9779748263080" 
                className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +977 9748263080
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 text-sm font-bold text-white transition-all duration-300 shadow-md rounded-lg"
              style={{ backgroundColor: "var(--blue-brand)", fontFamily: "'Poppins', sans-serif" }}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}