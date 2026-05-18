'use client';
import { useMemo } from 'react';
import { TECHNOLOGIES, Technology } from '../constants/technologies';
import ScrollReveal from './ScrollReveal';

export default function ToolsMarquee() {
    const { row1, row2 } = useMemo(() => ({
        row1: TECHNOLOGIES.slice(0, Math.ceil(TECHNOLOGIES.length / 2)),
        row2: TECHNOLOGIES.slice(Math.ceil(TECHNOLOGIES.length / 2)),
    }), []);

    const renderTechCard = (tech: Technology, index: number) => {
        const isNextJs = tech.id === 'nextjs';

        return (
            <div
                key={`${tech.id}-${index}`}
                className="inline-flex items-center gap-2 px-5 py-3 mx-2 bg-[#F8FAFC] border border-slate-200/60 transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-[0_8px_16px_rgba(11,60,145,0.04)]"
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--green-accent)";
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.06)";
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                {isNextJs ? (
                    <svg style={{ width: 16, height: 16, color: 'var(--green-accent)' }} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.75 18.75l-4.237-5.592-3.813 5.592h-1.2l4.413-6.471-4.413-5.811h1.2l3.813 5.011 4.237-5.011h1.2l-4.413 5.211 4.413 6.071h-1.2z" />
                    </svg>
                ) : (
                    <i className={`${tech.iconClass}`} style={{ fontSize: '1rem', color: 'var(--green-accent)' }} />
                )}
                <span className="text-xs font-bold text-slate-800 tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {tech.name}
                </span>
            </div>
        );
    };

    return (
        <section className="relative w-full bg-white py-16 overflow-hidden border-t border-b border-slate-200/80">
            <div className="container text-center mb-12">
                <ScrollReveal animation="up">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--green-accent)", fontFamily: "'Poppins', sans-serif" }}>
                        TECHNOLOGY STACK
                    </span>
                </ScrollReveal>
                <ScrollReveal animation="up" delay={150}>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase mt-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        MODERN TOOLS FOR <span style={{ color: "var(--green-accent)" }}>MODERN BUSINESSES</span>
                    </h2>
                </ScrollReveal>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
                <div className="marquee-wrapper">
                    <div className="marquee-track marquee-scroll-right">
                        {[...row1, ...row1, ...row1, ...row1].map((tech, index) => renderTechCard(tech, index))}
                    </div>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-track marquee-scroll-left">
                        {[...row2, ...row2, ...row2, ...row2].map((tech, index) => renderTechCard(tech, index))}
                    </div>
                </div>
            </div>
            
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
        </section>
    );
}
