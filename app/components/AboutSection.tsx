'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import dynamic from 'next/dynamic';
import { WORK_VIDEO_POSTER, WORK_VIDEO_SOURCES, WORK_CAPTIONS } from '../constants/videos';

const LazyVideo = dynamic(() => import('./LazyVideo'), { ssr: false });

export default function AboutSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28 relative overflow-hidden border-t border-slate-200/80">
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at right, var(--green-accent), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal animation="up">
            <div>
              <div className="inline-block mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--green-accent)]">
                  COMPANY OVERVIEW
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-tight mb-6">
                WHY WORK WITH <br />
                <span className="text-[var(--green-accent)]">LINGOTECH SOLUTIONS?</span>
              </h2>

              <p className="text-slate-800 font-semibold mb-4 text-sm">
                We are a technology-driven company dedicated to delivering innovative solutions.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-lg">
                With years of industry experience, our expertise spans cutting-edge technologies and proven
                methodologies, ensuring your projects are built on solid foundations. We focus on scalability,
                maintainability, and providing excellent user experiences.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest border-2 text-slate-800 transition-all duration-300 hover:border-[var(--green-accent)] hover:text-[var(--green-accent)] border-slate-200"
              >
                LEARN MORE ABOUT US
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade" delay={200}>
            <div className="relative">
              <div className="relative border-2 p-1.5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,60,145,0.08)] border-[var(--green-accent)]">
                <div className="relative aspect-video bg-slate-100 overflow-hidden">
                  <LazyVideo
                    sources={WORK_VIDEO_SOURCES}
                    poster={WORK_VIDEO_POSTER}
                    className="absolute inset-0 w-full h-full"
                    aria-label="Company overview video showing our team at work"
                    captionSrc={WORK_CAPTIONS}
                    loadOnIdle={false}
                  />
                </div>
              </div>

              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-slate-300" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-slate-300" aria-hidden="true" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
