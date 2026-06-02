'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Cpu, Database, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LazyVideo = dynamic(() => import('./LazyVideo'), { ssr: false });

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[100vh] bg-slate-950 overflow-hidden flex items-center justify-center pt-24 pb-12">
      
      {/* Background Video */}
      <LazyVideo
        src="/hero-video.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay Mask - strong enough to make text crisp against video */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.25) 50%, rgba(15, 23, 42, 0.55) 100%)'
        }}
      />

      {/* MAIN CONTENT */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl pt-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* LEFT: Text & CTA */}
          <div className="w-full lg:w-[55%] flex flex-col relative z-20">
            
            {/* Main Headline */}
            <ScrollReveal animation="up" delay={200}>
              <h1
                className="text-4xl sm:text-5xl lg:text-[4rem] font-black leading-[0.92] uppercase tracking-tighter mb-5 relative drop-shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif", color: '#ffffff' }}
              >
                Architecting <br />
                <span className="relative inline-block mt-1">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Digital</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[25%] opacity-20 blur-sm bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300"></span>
                </span>
                <br /> Dominance
              </h1>
            </ScrollReveal>

            {/* Paragraph */}
            <ScrollReveal animation="up" delay={300}>
              <p
                className="text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-light border-l-2 pl-5 drop-shadow"
                style={{ borderColor: '#3b82f6', color: 'rgba(226, 232, 240, 0.95)' }}
              >
                We engineer elite enterprise software, high-conversion web platforms, and scalable mobile architectures for market leaders worldwide.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal animation="up" delay={400}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-3.5 bg-white text-slate-950 font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 hover:bg-slate-100 shadow-md rounded-lg w-full sm:w-auto justify-center"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  BOOK A CONSULTATION
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 transition-transform group-hover:translate-x-1 text-slate-950" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT: Tech Visualization */}
          <div className="w-full lg:w-[45%] relative h-[360px] sm:h-[420px] lg:h-[500px] flex items-center justify-center z-10 overflow-visible">
            
            <ScrollReveal animation="fade" delay={300} className="w-full h-full flex items-center justify-center relative">
              
              {/* Rotating SVG Tech Rings */}
              <div className={`absolute w-[115%] h-[115%] aspect-square ${mounted ? 'animate-spin-slow' : ''}`} style={{ transition: 'transform 20000ms linear infinite' }}>
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-30" fill="none">
                  <circle cx="200" cy="200" r="190" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="4 12" />
                  <circle cx="200" cy="200" r="160" stroke="#60a5fa" strokeWidth="1" strokeDasharray="10 20" opacity="0.25" />
                  <circle cx="200" cy="200" r="130" stroke="#06b6d4" strokeWidth="2" strokeDasharray="100 40" opacity="0.4" />
                </svg>
              </div>

              {/* Floating Center Core Card — smaller on mobile */}
              <div className="relative z-20 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-white/10 backdrop-blur-lg border border-white/10 p-1 flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.3)] animate-float">
                <div className="absolute inset-0 border border-white/5 m-2 pointer-events-none" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 lg:mb-4 relative">
                  <div className="absolute inset-0 animate-ping opacity-15 rounded-full bg-cyan-400" />
                  <div className="w-full h-full flex items-center justify-center bg-white/5 border border-white/20">
                    <Cpu className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-cyan-400" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-white text-sm sm:text-base lg:text-lg  uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>Lingo Core</h3>
                  <p className="text-cyan-300 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-1">Systems Active</p>
                </div>
              </div>

              {/* Floating Cards — always visible, safe positioning on mobile */}
              <div className="absolute top-[8%] left-[2%] sm:left-[-2%] lg:left-[-10%] z-30 animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-2 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-lg">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-white/5 border border-white/15">
                    <Database className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">PostgreSQL</div>
                    <div className="text-[9px] sm:text-[10px] mt-0.5 font-bold text-cyan-300">99.99% Uptime</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[18%] right-[2%] sm:right-[-2%] lg:right-[-15%] z-30 animate-float" style={{ animationDelay: '2s' }}>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-2 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-lg">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-white/5 border border-white/15">
                    <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Next.js Fleet</div>
                    <div className="text-[9px] sm:text-[10px] mt-0.5 font-bold text-cyan-300">Deployed & Active</div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 opacity-30 pointer-events-none" viewBox="0 0 500 500">
                <path d="M 250 250 L 50 100" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 250 250 L 450 400" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 250 250 L 400 150" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 6" opacity="0.4" />
              </svg>

            </ScrollReveal>
          </div>
        </div>

        {/* BOTTOM METRICS BANNER */}
        <ScrollReveal animation="up" delay={600}>
          <div className="mt-16 border-t border-b border-white/10 bg-white/5 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 relative z-20 shadow-lg">
            {[
              { id: "01", title: "Global Reach", value: "6+", suffix: "Countries" },
              { id: "02", title: "Projects Delivered", value: "15+", suffix: "Completed" },
              { id: "03", title: "Industry Experience", value: "1+", suffix: "Years" },
              { id: "04", title: "Client Satisfaction", value: "99%", suffix: "Rate" }
            ].map((metric) => (
              <div key={metric.id} className="p-6 group hover:bg-white/5 transition-colors duration-500 cursor-default">
                <div className="flex items-baseline justify-between mb-1 text-slate-400 font-bold text-[10px] tracking-widest uppercase">
                  <span>{metric.title}</span>
                  <span className="text-cyan-400">{metric.id}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl lg:text-3xl font-black text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {metric.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    {metric.suffix}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}