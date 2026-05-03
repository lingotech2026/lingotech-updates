import Image from 'next/image';
import Script from 'next/script';
import { createElement } from 'react';
import { TEAM_MEMBERS } from '../constants/team';
import Footer from '../components/Footer';
import PageHeroSection from '../components/PageHeroSection';
import Navbar from '../components/Navbar';
import type { Metadata } from 'next';

const TEAM_ANIMATION_SCRIPT_SRC =
  'https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js';
const TEAM_HERO_LOTTIE_SRC =
  'https://lottie.host/ba14f795-0e18-41a0-8c0d-2725efe430fe/LHcs3pQOdN.lottie';

export const metadata: Metadata = {
  title: 'Our Team - Lingotech Solutions',
  description: 'Meet the talented individuals behind Lingotech Solutions who are passionate about turning ideas into digital reality.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-surface via-background to-surface">
      <Script
        src={TEAM_ANIMATION_SCRIPT_SRC}
        type="module"
        strategy="afterInteractive"
      />
      <Navbar />
      <PageHeroSection
        badge="Meet Our Team"
        title="Meet Our Team"
        description="We're a diverse group of designers, developers, and strategists united by a passion for creating exceptional digital experiences."
        backgroundContent={
          <div className="absolute inset-0">
            {/* Ambient blobs */}
            <div className="absolute -top-16 left-[-6%] h-72 w-72 rounded-full bg-primary-100/25 blur-3xl sm:h-96 sm:w-96" />
            <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl sm:h-112 sm:w-md" />
            {/* Lottie animation — right side background */}
            <div className="absolute right-[2%] top-1/2 -translate-y-1/2 h-[90%] aspect-square opacity-75">
              <div className="absolute inset-0 rounded-full bg-secondary-400/15 blur-3xl" />
              {createElement('dotlottie-wc', {
                src: TEAM_HERO_LOTTIE_SRC,
                autoplay: true,
                loop: true,
                style: { width: '100%', height: '100%' },
              })}
            </div>
            {/* Gradient overlay — fades text area, lets animation breathe on the right */}
            <div className="absolute inset-0 bg-linear-to-r from-primary-900/85 via-primary-800/60 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-b from-primary-900/20 via-transparent to-primary-900/30" />
          </div>
        }
      />

      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8">
              {TEAM_MEMBERS.map((member) => (
                <article
                  key={member.name}
                  className="group relative overflow-hidden rounded-xl border-2 border-border bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-secondary-600 hover:shadow-xl hover:shadow-primary-600/20 sm:rounded-2xl md:rounded-3xl"
                >
                  <div className="relative h-56 overflow-hidden sm:h-64 md:h-72 lg:h-80">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={350}
                      height={280}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-transparent" />
                  </div>

                  <div className="relative p-4 sm:p-5 md:p-6 text-center">
                    <h3
                      className="mb-1.5 font-bold text-primary-700 sm:mb-2"
                      style={{ fontSize: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.5rem)' }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-secondary-600 font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
                      {member.role}
                    </p>
                    <div className="mx-auto h-0.5 w-12 bg-linear-to-r from-transparent via-secondary-600 to-transparent sm:h-1 sm:w-16" />
                  </div>

                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl ring-1 ring-inset ring-primary-600/10 pointer-events-none" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center bg-linear-to-r from-primary-50 via-surface to-secondary-50 border-2 border-primary-200/90 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-soft">
            <h2
              className="mb-2 font-bold text-primary-800 sm:mb-3 md:mb-4"
              style={{ fontSize: 'clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem)' }}
            >
              Want to Join Our Team?
            </h2>
            <p
              className="mb-5 text-text-secondary sm:mb-6 md:mb-8"
              style={{ fontSize: 'clamp(0.875rem, 0.825rem + 0.25vw, 1.125rem)' }}
            >
              We&apos;re always looking for talented individuals who share our passion for innovation.
            </p>
            <a
              href="#career"
              className="btn-primary inline-flex items-center justify-center px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
