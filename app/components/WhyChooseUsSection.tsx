'use client';
import ScrollReveal from './ScrollReveal';

const features = [
  { 
    title: 'Expert Team', 
    desc: 'Our team comprises seasoned professionals with deep industry knowledge and technical expertise.',
  },
  { 
    title: 'Innovation First', 
    desc: 'We leverage cutting-edge technologies to build scalable and future-proof solutions.',
  },
  { 
    title: 'Client-Centric', 
    desc: 'We prioritize your business goals, ensuring transparent communication and collaborative success.',
  },
  { 
    title: 'Quality Assurance', 
    desc: 'Rigorous testing and quality standards ensure reliable, high-performance deliverables.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <ScrollReveal animation="up">
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--green-accent)", fontFamily: "'Poppins', sans-serif" }}>
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              WE HELP ORGANIZATIONS <br /><span style={{ color: "var(--green-accent)" }}>STREAMLINE AND OPTIMIZE</span>
            </h2>
            <p className="text-slate-500 max-w-xl text-sm">
              By working with us, organizations can adapt best practices that enable them to achieve their goals with efficiency and proven methodologies.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} animation="up" delay={idx * 100}>
              <div
                className="group relative bg-[#F8FAFC] p-6 border border-slate-200/60 transition-all duration-300 h-full shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_24px_rgba(11,60,145,0.05)]"
                onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = "var(--green-accent)";
                   e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.06)";
                   e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Large faded numbers */}
                <div 
                  className="absolute right-3 top-3 text-2xl font-black opacity-[0.1] pointer-events-none group-hover:opacity-[0.8] transition-opacity duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif", color: "var(--green-accent)" }}
                >
                   {String(idx + 1).padStart(2, '0')}
                </div>
                
                <div className="w-1 h-8 mb-5" style={{ backgroundColor: "var(--green-accent)" }} />
                <h4 className="text-slate-900 mb-3 text-base font-bold uppercase tracking-wide relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}