import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-white">
      {/* Decorative Hexagon Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Large hexagon - top right */}
        <svg
          className="absolute -top-16 right-[10%] w-[320px] h-[320px] md:w-[440px] md:h-[440px] opacity-[0.07]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <polygon
            points="100,5 185,50 185,150 100,195 15,150 15,50"
            fill="currentColor"
            className="text-emerald-500"
          />
        </svg>

        {/* Medium hexagon - center left */}
        <svg
          className="absolute top-[30%] -left-[5%] w-[260px] h-[260px] md:w-[360px] md:h-[360px] opacity-[0.06]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <polygon
            points="100,5 185,50 185,150 100,195 15,150 15,50"
            fill="currentColor"
            className="text-emerald-500"
          />
        </svg>

        {/* Small hexagon - bottom right */}
        <svg
          className="absolute bottom-[10%] right-[25%] w-[180px] h-[180px] md:w-[240px] md:h-[240px] opacity-[0.05]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <polygon
            points="100,5 185,50 185,150 100,195 15,150 15,50"
            fill="currentColor"
            className="text-emerald-500"
          />
        </svg>

        {/* Tiny hexagon - top left */}
        <svg
          className="absolute top-[15%] left-[20%] w-[120px] h-[120px] md:w-[160px] md:h-[160px] opacity-[0.04]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <polygon
            points="100,5 185,50 185,150 100,195 15,150 15,50"
            fill="currentColor"
            className="text-emerald-500"
          />
        </svg>

        {/* Medium hexagon - bottom center */}
        <svg
          className="absolute bottom-[5%] left-[40%] w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-[0.04]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <polygon
            points="100,5 185,50 185,150 100,195 15,150 15,50"
            fill="currentColor"
            className="text-emerald-500"
          />
        </svg>

        {/* Small hexagon - mid right */}
        <svg
          className="absolute top-[55%] right-[5%] w-[140px] h-[140px] md:w-[200px] md:h-[200px] opacity-[0.05]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <polygon
            points="100,5 185,50 185,150 100,195 15,150 15,50"
            fill="currentColor"
            className="text-emerald-500"
          />
        </svg>

        {/* Extra hexagon outline - top center */}
        <svg
          className="absolute top-[8%] left-[45%] w-[100px] h-[100px] md:w-[140px] md:h-[140px] opacity-[0.08]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <polygon
            points="100,5 185,50 185,150 100,195 15,150 15,50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-emerald-400"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 pt-24 pb-12 sm:px-10 md:px-14 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

            {/* Left — Text Content */}
            <div className="flex-1 max-w-xl lg:max-w-lg xl:max-w-xl">
              <ScrollReveal animation="up" delay={100}>
                <h1
                  className="font-extrabold uppercase leading-[1.15] tracking-tight text-gray-900"
                  style={{ fontSize: 'clamp(1.2rem, 0.8rem + 1.5vw, 2rem)' }}
                >
                  Scalable Solutions for Modern Businesses
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="up" delay={160}>
                <h2
                  className="mt-3 font-bold uppercase leading-snug text-emerald-600"
                  style={{ fontSize: 'clamp(0.72rem, 0.6rem + 0.45vw, 0.95rem)' }}
                >
                  Lingotech Solutions | Software Development in Nepal
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={220}>
                <p className="mt-4 text-xs leading-6 text-gray-600 max-w-md" style={{ fontStyle: 'normal' }}>
                  Specialized software solutions for businesses of varying industries backed by
                  modern engineering practices. We don&apos;t just implement software; we
                  re-engineer your productivity. Lingotech Solutions turns domain
                  expertise into massive productivity gains.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={260}>
                <p className="mt-3 text-xs text-gray-500 italic">
                  Are you ready to level up your business?
                </p>
              </ScrollReveal>

              <ScrollReveal animation="up" delay={300}>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="hero-cta-btn inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-md text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/30 group"
                  >
                    Book a Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Laptop & Phone Mockup */}
            <div className="flex-1 flex items-center justify-center lg:justify-end">
              <ScrollReveal animation="fade" delay={200}>
                <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  {/* Laptop Image */}
                  <Image
                    src="/laptop.webp"
                    alt="Laptop showcasing LingoTech software solutions"
                    width={700}
                    height={480}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}