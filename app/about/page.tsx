import Image from 'next/image';
import Script from 'next/script';
import Footer from "../components/Footer";
import PageHeroSection from "../components/PageHeroSection";
import Navbar from "../components/Navbar";
import { CheckCircle2, Target, Lightbulb, Users, Award, Rocket, Heart } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Lingotech Solutions',
  description: 'Learn about Lingotech Solutions — a technology-driven company delivering innovative digital solutions from Nepal to the world.',
};

const ABOUT_ANIMATION_SCRIPT_SRC = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js";

const MISSION_CONTENT = [
  "Lingotech Solutions is a technology-driven company based in Kathmandu, Nepal, dedicated to delivering innovative digital solutions that empower businesses worldwide.",
  "We specialize in custom web development, mobile apps, enterprise software, and AI-powered digital marketing — delivering end-to-end solutions that are scalable, secure, and future-proof.",
  "Our mission is simple: turn your vision into a high-performing digital product that drives real business results.",
];

const WHY_FEATURES = [
  "Industry-experienced, cross-functional team",
  "Agile development with transparent communication",
  "Security-first architecture in every build",
  "On-time delivery with post-launch support",
  "Modern tech stack for long-term maintainability",
  "Data-driven approach to growth & optimization",
  "Tailored solutions — not one-size-fits-all",
  "Client satisfaction as our #1 metric",
];

const CORE_VALUES = [
  { icon: Target, title: "Results Driven", description: "Every line of code, every design decision is driven by measurable business outcomes and client success." },
  { icon: Lightbulb, title: "Innovation First", description: "We embrace emerging technologies and creative problem-solving to keep our clients ahead of the curve." },
  { icon: Users, title: "Client Centric", description: "Your goals are our goals. We collaborate closely to ensure every solution aligns with your vision." },
  { icon: Award, title: "Quality Assured", description: "Rigorous testing and high standards ensure every product we ship is reliable and high-performing." },
  { icon: Rocket, title: "Fast Delivery", description: "Agile sprints and efficient workflows mean you get your product faster without compromising quality." },
  { icon: Heart, title: "Long-term Partnership", description: "We don't just build and leave — we grow with you through support, maintenance, and iterations." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Script src={ABOUT_ANIMATION_SCRIPT_SRC} type="module" strategy="afterInteractive" />
      <Navbar />

      <PageHeroSection
        badge="Who We Are"
        title="About Lingotech Solutions"
        description="A technology-driven company dedicated to delivering innovative solutions that empower businesses through cutting-edge software, design, and digital strategy."
      />

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal animation="up">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                  OUR PURPOSE
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-tight mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Our Our <span style={{ color: 'var(--green-accent)' }}>Mission</span>
                </h2>
                <div className="space-y-4">
                  {MISSION_CONTENT.map((paragraph, index) => (
                    <p key={index} className="text-slate-600 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade" delay={200}>
              <div className="relative">
                <div className="relative border-2 p-1.5" style={{ borderColor: 'var(--green-accent)' }}>
                  <div className="relative aspect-video bg-slate-50 overflow-hidden">
                    <Image
                      src="/developer.jpeg"
                      alt="Developer working on innovative solutions"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-slate-300" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-slate-300" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/85">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "10+", label: "Team Members" },
            ].map((stat, i) => (
              <ScrollReveal key={i} animation="up" delay={i * 80}>
                <div className="text-center p-6 border border-slate-200/80 bg-white shadow-sm">
                  <div className="text-3xl lg:text-4xl font-black mb-2" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="up">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                HOW WE WORK
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Our Our <span style={{ color: 'var(--green-accent)' }}>Process</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Requirement Gathering", desc: "We collect, list, and compile client requirements to build the process from scratch aligned with your goals." },
              { num: "02", title: "Plan & Resources", desc: "We devise a strategic path, select resources, and provide a clear roadmap for successful execution." },
              { num: "03", title: "Design & Develop", desc: "We turn strategy into visually appealing, technically robust digital products focused on user experience." },
              { num: "04", title: "Quality Assurance", desc: "Rigorous testing validates all elements, ensuring they work correctly and meet the highest standards." },
              { num: "05", title: "Deployment", desc: "Once the product meets standards, we deploy it seamlessly and efficiently to production servers." },
              { num: "06", title: "Support & Maintenance", desc: "Ongoing maintenance ensures smooth operation, security, and performance optimization post-launch." },
            ].map((step, i) => (
              <ScrollReveal key={i} animation="up" delay={i * 80}>
                <div
                  className="group relative bg-[#F8FAFC] p-6 border border-slate-200/60 transition-all duration-300 h-full hover:border-[var(--green-accent)] hover:-translate-y-1 shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_24px_rgba(11,60,145,0.06)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: 'var(--green-accent)' }} />
                  <div className="text-5xl font-black opacity-[0.08] mb-4 leading-none" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--green-accent)' }}>
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 uppercase mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="up">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                OUR ADVANTAGES
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                What Sets Us Us <span style={{ color: 'var(--green-accent)' }}>Apart</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {WHY_FEATURES.map((feature, index) => (
              <ScrollReveal key={index} animation="up" delay={index * 60}>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200/60 transition-all duration-300 h-full hover:border-[var(--green-accent)] shadow-sm hover:shadow-[0_8px_16px_rgba(11,60,145,0.04)]"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--green-accent)' }} />
                  <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="up">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                WHAT DRIVES US
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Our Core <span style={{ color: 'var(--green-accent)' }}>Values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={index} animation="up" delay={index * 100}>
                  <div
                    className="group relative bg-[#F8FAFC] p-6 border border-slate-200/60 transition-all duration-300 h-full hover:border-[var(--green-accent)] hover:-translate-y-1 shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_24px_rgba(11,60,145,0.06)]"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: 'var(--green-accent)' }} />
                    <div className="w-10 h-10 flex items-center justify-center border border-slate-200 bg-white mb-5" style={{ backgroundColor: 'var(--green-bg-subtle)' }}>
                      <Icon className="w-5 h-5" style={{ color: 'var(--green-accent)' }} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 uppercase mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
