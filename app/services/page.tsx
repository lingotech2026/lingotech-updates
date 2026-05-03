import Script from 'next/script';
import { createElement } from 'react';
import Navbar from '../components/Navbar';
import PageHeroSection from '../components/PageHeroSection';
import { SERVICES } from '../constants/services';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const SERVICES_ANIMATION_SCRIPT_SRC =
  'https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js';
const SERVICES_HERO_LOTTIE_SRC =
  'https://lottie.host/e2537096-5201-4169-9479-3308698e5dd0/a7yTFFADEO.lottie';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        src={SERVICES_ANIMATION_SCRIPT_SRC}
        type="module"
        strategy="afterInteractive"
      />
      <Navbar />
      <PageHeroSection
        badge="Our Expertise"
        title="Our Services"
        description="Explore our comprehensive range of services designed to help your business thrive in the digital age."
        backgroundContent={
          <div className="absolute inset-0">
            <div className="absolute right-[2%] top-1/2 -translate-y-1/2 h-[90%] aspect-square opacity-60">
              {createElement('dotlottie-wc', {
                src: SERVICES_HERO_LOTTIE_SRC,
                autoplay: true,
                loop: true,
                style: { width: '100%', height: '100%' },
              })}
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-primary-900/85 via-primary-800/60 to-transparent" />
          </div>
        }
      />

      {/* Services Grid */}
      <section className="bg-white py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12 md:mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">
              What we offer
            </p>
            <h2
              className="font-semibold text-gray-900 leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 1.2rem + 1.8vw, 2.8rem)' }}
            >
              All services
            </h2>
            <div className="mt-4 h-px bg-gray-100" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}