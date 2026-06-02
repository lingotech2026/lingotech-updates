'use client';
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const services = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS.",
    iconPath: "/services/website-service.svg",
    href: "/services",
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Cross-platform mobile applications using React Native and modern frameworks.",
    iconPath: "/services/mobile-app-service.svg",
    href: "/services",
  },
  {
    id: "software-dev",
    title: "System/Software Development",
    description: "Custom software solutions tailored to your business needs using Java, Python, and Node.js.",
    iconPath: "/services/backend-service.svg",
    href: "/services",
  },
  {
    id: "seo",
    title: "SEO Services",
    description: "Improve your website visibility and ranking on search engines with proven SEO strategies.",
    iconPath: "/services/seo-service.svg",
    href: "/services",
  },
  {
    id: "gso",
    title: "GSO AI (SEO Services)",
    description: "Advanced AI-powered SEO and digital marketing optimization to boost your website visibility and ranking.",
    iconPath: "/services/seo-main.svg",
    href: "/services",
  },
  {
    id: "smm",
    title: "Social Media Marketing (SMM)",
    description: "Build your brand presence and engage with your audience across social platforms.",
    iconPath: "/services/marketing-service.svg",
    href: "/services",
  },
]

export default function ServicesSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="up">
          <div className="mb-14">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--green-accent)", fontFamily: "'Poppins', sans-serif" }}>
                SERVICES
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              WHAT WE <span style={{ color: "var(--green-accent)" }}>OFFER</span>
            </h2>
            <p className="text-slate-500 max-w-xl text-sm">
              Crafting websites, apps, and AI-powered solutions with precision, creativity, and impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="up" delay={index * 100}>
              <Link
                href={service.href}
                className="group relative bg-[#F8FAFC] p-6 transition-all duration-300 block h-full shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:shadow-[0_12px_24px_rgba(11,60,145,0.06)]"
                style={{ border: "1px solid rgba(15, 23, 42, 0.06)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--green-accent)"; e.currentTarget.style.transform = "translateY(-4px)" }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.06)"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                {/* Color Accent Bar */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: "var(--green-accent)" }}
                />

                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-slate-200/80 bg-white"
                  >
                    <Image
                      src={service.iconPath}
                      alt={service.title}
                      width={28}
                      height={28}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-5">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: "var(--green-accent)" }}>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>LEARN MORE</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 transition-colors font-bold uppercase tracking-wide text-sm hover:opacity-80"
            style={{ color: "var(--green-accent)", fontFamily: "'Poppins', sans-serif" }}
          >
            VIEW ALL SERVICES
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}