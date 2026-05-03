import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-xs md:text-sm font-bold text-gray-900 mb-4 uppercase text-left">
              Why work with us?
            </h2>
            <h4 className="text-xs font-semibold text-gray-800 mb-3 leading-snug">
              We are a technology-driven company dedicated to delivering innovative solutions
            </h4>
            <h5 className="text-xs text-gray-600 mb-6 leading-relaxed">
              With years of industry experience, our expertise spans cutting-edge technologies 
              and proven methodologies, ensuring your projects are built on solid foundations.
            </h5>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:underline"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100">
              <video
                className="w-full aspect-video"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}