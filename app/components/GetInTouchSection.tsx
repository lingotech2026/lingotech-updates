import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section className="py-12 md:py-16 bg-[#f4f7fb] relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 text-center">
        <h2 className="text-xs md:text-sm font-bold text-gray-900 mb-6 uppercase">
          Ready to Start Your Project?
        </h2>
        <h5 className="text-xs text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your ideas into powerful digital solutions. Let&apos;s talk about how we can 
          create an experience that resonates with your business.
        </h5>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/30"
        >
          Book a Demo <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
