import { FOOTER_SECTIONS, SOCIAL_LINKS } from '../constants/footer';
import SocialIcon from './SocialIcon';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Main footer component with site navigation, company info, and social links
 * Displays comprehensive footer information for all pages
 */
export default function Footer() {
  const isInternalLink = (href: string) => href.startsWith('/');
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-linear-to-b from-surface via-background to-surface-muted px-4 py-14 text-primary-700 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-6 h-44 w-44 rounded-full bg-accent-100 blur-3xl" />
        <div className="absolute -right-20 bottom-4 h-52 w-52 rounded-full bg-secondary-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border/80 bg-background/90 p-6 shadow-soft backdrop-blur sm:p-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-10 lg:p-10">
          <div className="space-y-4 md:col-span-2 lg:col-span-2">
            <div className="relative h-16 w-full max-w-70 sm:h-20 sm:max-w-75">
              <Image
                src="/lingo_tech.jpeg"
                alt="Lingo logo"
                fill
                sizes="(max-width: 480px) 250px, (max-width: 768px) 280px, 320px"
                className="object-contain"
                priority
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body md:text-base">
              We build high-performance digital products for innovative companies. Based in Kathmandu, serving clients globally with dependable engineering and thoughtful design.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2 md:gap-8 lg:col-span-4 lg:grid-cols-3 lg:gap-10">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-primary-600 md:text-base">{section.title}</h3>
                <ul className="space-y-2.5 text-sm text-body">
                  {section.links
                    .filter((link) => !link.isPlaceholder)
                    .map((link) => (
                      <li key={link.label}>
                        {isInternalLink(link.href) ? (
                          <Link
                            href={link.href}
                            className="inline-flex items-center rounded-md px-1 py-0.5 transition-colors duration-200 hover:text-secondary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="inline-flex items-center rounded-md px-1 py-0.5 transition-colors duration-200 hover:text-secondary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            ))}

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wide text-primary-600 md:text-base">Follow Us</h3>
              <p className="text-sm text-body">Stay connected for insights, updates, and product stories.</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {SOCIAL_LINKS.map((social) => (
                  <SocialIcon key={social.label} social={social} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-border/70 pt-6 md:flex-row">
          <p className="text-center text-xs text-muted sm:text-sm md:text-left">
            © {year} LingoTech Pvt.Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
