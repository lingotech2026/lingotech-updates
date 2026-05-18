import type { ReactNode } from 'react';

interface PageHeroSectionProps {
  badge: string;
  title: string;
  description: string;
  sideContent?: ReactNode;
  backgroundContent?: ReactNode;
}

export default function PageHeroSection({
  badge,
  title,
  description,
  sideContent,
  backgroundContent,
}: PageHeroSectionProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#F8FAFC]">
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11,60,145,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,60,145,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '4vw 4vw',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* Glowing orb */}
      <div className="absolute top-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full blur-[120px] opacity-[0.06] pointer-events-none" style={{ background: 'var(--green-accent)' }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[25vw] h-[25vw] rounded-full blur-[100px] opacity-[0.05] pointer-events-none" style={{ background: 'var(--green-accent)' }} />

      {backgroundContent ? (
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          {backgroundContent}
        </div>
      ) : null}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className={sideContent ? 'grid items-center gap-8 md:grid-cols-[1fr_auto]' : ''}>
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white mb-5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--green-accent)' }}>
                  {badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {title}
              </h1>

              <p className="text-slate-600 leading-relaxed max-w-2xl text-sm sm:text-base font-light">
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

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(15,23,42,0.06), transparent)' }} />
    </section>
  );
}
