import Link from 'next/link';

const features = [
  { 
    title: 'Expert Team', 
    desc: 'Our team comprises seasoned professionals with deep industry knowledge and technical expertise.',
    bgImage: '/laptop.webp'
  },
  { 
    title: 'Innovation First', 
    desc: 'We leverage cutting-edge technologies to build scalable and future-proof solutions.',
    bgImage: '/laptop.webp'
  },
  { 
    title: 'Client-Centric', 
    desc: 'We prioritize your business goals, ensuring transparent communication and collaborative success.',
    bgImage: '/laptop.webp'
  },
  { 
    title: 'Quality Assurance', 
    desc: 'Rigorous testing and quality standards ensure reliable, high-performance deliverables.',
    bgImage: '/laptop.webp'
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-24 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        <h2 className="text-xs md:text-sm font-bold text-gray-900 text-center mb-4 uppercase">
          Why Choose Us
        </h2>
        <p className="text-center text-xs text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Neo Software helps organizations streamline and optimize their operations for greater 
          efficiency and success. By working with us, organizations can adapt best practices 
          that will enable them to achieve their goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden bg-gray-900 aspect-video flex flex-col justify-end"
            >
              {/* Background gradient for text readability (assuming no image for now, just dark bg) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h6 className="text-white font-semibold text-xs">{feature.title}</h6>
                <p className="text-white/70 text-xs mt-1 line-clamp-2">{feature.desc}</p>
              </div>
              
              {/* Hover overlay with a decorative icon/button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 z-20">
                <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}