import Navbar from '../components/Navbar';
import { SERVICES } from '../constants/services';
import Footer from '../components/Footer';
import Link from 'next/link';
import ServiceCard from '../components/ServiceCard';
import PageHeroSection from '../components/PageHeroSection';
import { ArrowRight, Zap, Shield, Target, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Lingotech Solutions',
  description: 'Comprehensive software engineering services — websites, apps, AI solutions, SEO, and digital marketing.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <PageHeroSection
        badge="Our Capabilities"
        title="What We Build"
        description="Comprehensive software engineering services tailored to modern business needs. From strategy to deployment, we build high-performance solutions that drive growth."
      />

      {/* Benefits Strip */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "Agile methodologies for rapid, high-quality releases." },
              { icon: Shield, title: "Secure & Scalable", desc: "Built with security-first architecture from day one." },
              { icon: Target, title: "Result Oriented", desc: "Focused on solving business problems & ROI." },
              { icon: Sparkles, title: "Modern Stack", desc: "Using cutting-edge tech for long-term reliability." }
            ].map((benefit, i) => (
              <ScrollReveal key={i} animation="up" delay={i * 80}>
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 flex items-center justify-center border border-slate-200 bg-white shrink-0 shadow-sm" style={{ backgroundColor: 'var(--green-bg-subtle)' }}>
                    <benefit.icon className="w-4 h-4" style={{ color: 'var(--green-accent)' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{benefit.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="up">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                COMPREHENSIVE COVERAGE
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase mt-3 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Full-Spectrum <span style={{ color: 'var(--green-accent)' }}>Solutions</span>
              </h2>
              <p className="text-slate-600 text-sm max-w-xl leading-relaxed">
                We offer a wide range of services to cover every aspect of your digital journey, ensuring consistency and quality across all platforms.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative bg-[#F8FAFC] border border-slate-200/80 p-12 lg:p-16 text-center overflow-hidden shadow-sm">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, var(--green-accent), transparent 70%)' }} />
            
            <div className="relative z-10">
              <ScrollReveal animation="up">
                <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                  GET STARTED
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Start Your Digital <br/>Transformation Today
                </h2>
                <p className="text-slate-600 text-sm mb-8 max-w-md mx-auto">
                  Ready to take your business to the next level? Our team of experts is standing by to help you build something extraordinary.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:opacity-90 shadow-md"
                  style={{ backgroundColor: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}
                >
                  Let&apos;s Build Something Great
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}