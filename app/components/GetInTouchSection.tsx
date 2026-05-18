import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#F8FAFC] border-t border-slate-200/80">
      
      {/* Background patterns */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.08,
        }}
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="0" cy="400" r="300" stroke="var(--green-accent)" strokeWidth="1"/>
        <circle cx="0" cy="400" r="200" stroke="var(--green-accent)" strokeWidth="2"/>
        <circle cx="800" cy="0" r="250" stroke="var(--green-accent)" strokeWidth="1"/>
        <circle cx="800" cy="0" r="150" stroke="var(--green-accent)" strokeWidth="2"/>
      </svg>

      <div className="container relative z-10 text-center max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          READY TO START YOUR <span style={{ color: "var(--green-accent)" }}>PROJECT?</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
          Transform your ideas into powerful digital solutions. Let&apos;s talk about how we can 
          create an experience that resonates with your business.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:opacity-90 shadow-md"
          style={{ backgroundColor: "var(--green-accent)", fontFamily: "'Poppins', sans-serif" }}
        >
          BOOK A CONSULTATION
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
