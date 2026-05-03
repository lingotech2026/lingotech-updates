'use client';

import { Icons } from './Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Fixed sidebar with vertical branding and social links
 * Hidden on mobile and tablet, visible on desktop (lg+)
 * Mobile-first responsive design
 */
export default function SocialSidebar() {
    const pathname = usePathname();

    const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="hidden lg:flex fixed top-0 left-0 h-full w-15 bg-linear-to-b from-surface to-background z-40 flex-col justify-between items-center py-6 md:py-8 shadow-lg border-r border-border">
            {/* Logo Text (Top) */}
            <div className="writing-mode-vertical-rl rotate-180 flex items-center gap-3 pt-4 md:pt-6 pb-3 md:pb-4">
                <Link
                    href="/"
                    aria-label="Go to home"
                    className="text-primary-600 font-bold tracking-widest text-xs uppercase underline decoration-primary-600 decoration-2 underline-offset-4 hover:text-secondary-600 transition-colors duration-300"
                    onClick={handleLogoClick}
                >
                    Lingo Tech
                </Link>
            </div>

            {/* Social Icons (Middle) */}
            <div className="flex flex-col gap-6 md:gap-8">
                <a
                    href="https://www.instagram.com/lingo_tech2026/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary-100 transition-colors duration-200 focus-visible:outline-offset-2"
                >
                    <Icons.Instagram className="w-5 h-5 text-primary-600 hover:text-secondary-600 transition-colors" />
                </a>
                <a
                    href="https://www.linkedin.com/company/lingotech-solution-pvt-ltd/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary-100 transition-colors duration-200 focus-visible:outline-offset-2"
                >
                    <Icons.Linkedin className="w-5 h-5 text-primary-600 hover:text-secondary-600 transition-colors" />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=61579576885218"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary-100 transition-colors duration-200 focus-visible:outline-offset-2"
                >
                    <Icons.Facebook className="w-5 h-5 text-primary-600 hover:text-secondary-600 transition-colors" />
                </a>
            </div>

            {/* Vertical Text (Bottom) */}
            <div className="writing-mode-vertical-rl rotate-180 flex items-center gap-3 pb-4 md:pb-6">
                <span className="w-px h-10 md:h-12 bg-linear-to-b from-primary-600 to-secondary-600" />
                <span className="text-body font-medium tracking-[0.15em] text-xs uppercase">
                    Scroll
                </span>
            </div>

        </div>
    );
}
