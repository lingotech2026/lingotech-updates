import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import BlogPageClient from '../components/blog/BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights and ideas on technology, development, and business growth from Lingotech Solutions.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <section className="bg-white border-b border-slate-200/80 pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] mb-4 text-[var(--green-accent)]">
              Our Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 uppercase leading-tight mb-5">
              Insights &amp; <span className="text-[var(--green-accent)]">Ideas</span>
            </h1>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Stay updated with our latest thoughts on technology, development, and business growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <BlogPageClient />
      <Footer />
    </main>
  );
}
