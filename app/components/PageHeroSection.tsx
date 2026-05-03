import type { ReactNode } from 'react';

interface PageHeroSectionProps {
  badge: string;
  title: string;
  description: string;
  sideContent?: ReactNode;
  backgroundContent?: ReactNode;
}

/**
 * Reusable hero section component for page headers
 * Eliminates code duplication across About, Services, Contact, and Team pages
 */
export default function PageHeroSection({
  badge,
  title,
  description,
  sideContent,
  backgroundContent,
}: PageHeroSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-linear-to-br from-primary-700 to-primary-600">
      {backgroundContent ? (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {backgroundContent}
        </div>
      ) : null}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -right-20 sm:-right-40 w-64 sm:w-80 md:w-96 lg:w-150 h-64 sm:h-80 md:h-96 lg:h-150 bg-surface-overlay/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-64 sm:w-80 md:w-96 lg:w-150 h-64 sm:h-80 md:h-96 lg:h-150 bg-primary-700/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={sideContent ? 'grid items-center gap-8 md:grid-cols-[1fr_auto]' : ''}>
            <div className="text-white">
              <div className="mb-4 sm:mb-5 md:mb-6">
                <span className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-[10px] xs:text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/20">
                  {badge}
                </span>
              </div>
              <h1 className="font-bold mb-4 sm:mb-6 md:mb-8 leading-tight" style={{fontSize: 'clamp(2rem, 1.5rem + 3vw, 5rem)'}}>
                {title}
              </h1>
              <p className="text-inverse/90 leading-relaxed max-w-3xl font-light" style={{fontSize: 'clamp(1rem, 0.95rem + 0.5vw, 1.5rem)'}}>
                {description}
              </p>
            </div>

            {sideContent ? (
              <div className="mt-8 md:mt-0 md:justify-self-end" aria-hidden="true">
                {sideContent}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
