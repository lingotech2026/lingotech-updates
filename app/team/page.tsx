import Image from 'next/image';
import { TEAM_MEMBERS } from '../constants/team';
import Footer from '../components/Footer';
import PageHeroSection from '../components/PageHeroSection';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team - Lingotech Solutions',
  description: 'Meet the talented individuals behind Lingotech Solutions who are passionate about turning ideas into digital reality.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <PageHeroSection
        badge="Meet Our Team"
        title="The People Behind The Product"
        description="We're a diverse group of designers, developers, and strategists united by a passion for creating exceptional digital experiences."
      />

      {/* Team Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM_MEMBERS.map((member, index) => (
              <ScrollReveal key={member.name} animation="up" delay={index * 100}>
                <div
                  className="group relative overflow-hidden bg-[#F8FAFC] border border-slate-200/80 transition-all duration-300 hover:border-[var(--green-accent)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,60,145,0.06)]"
                >
                  {/* Top accent bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity z-20" style={{ backgroundColor: 'var(--green-accent)' }} />

                  {/* Photo */}
                  <div className="relative h-100 sm:h-80 overflow-hidden bg-slate-100">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={600}
                      height={280}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-5 text-center border-t border-slate-200/50">
                    <h3 className="font-black text-slate-900 uppercase mb-1.5 text-base tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                      {member.role}
                    </p>
                    <div className="mx-auto mt-3 w-10 h-[1px]" style={{ backgroundColor: 'rgba(11,60,145,0.25)' }} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="up">
            <div className="relative bg-white border border-slate-200 p-10 lg:p-14 text-center overflow-hidden max-w-2xl mx-auto shadow-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] opacity-[0.06] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, var(--green-accent), transparent 70%)' }} />
              
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                  JOIN US
                </span>
                <h2 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Want to Join Our Team?
                </h2>
                <p className="text-slate-600 text-sm mb-8 max-w-md mx-auto">
                  We&apos;re always looking for talented individuals who share our passion for innovation and building great products.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:opacity-90 shadow-md"
                  style={{ backgroundColor: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}
                >
                  View Open Positions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
