'use client';

import Link from 'next/link';
import Image from 'next/image';
import { User, Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants/blog';
import ScrollReveal from './ScrollReveal';

export default function LatestBlogSection() {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28 border-t border-slate-200/80">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <ScrollReveal animation="up">
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--green-accent)", fontFamily: "'Poppins', sans-serif" }}>
                KNOWLEDGE BASE
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              LATEST INSIGHTS & <span style={{ color: "var(--green-accent)" }}>UPDATES</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {latestPosts.map((post, idx) => (
            <ScrollReveal key={idx} animation="up" delay={idx * 100}>
              <div 
                className="group flex flex-col md:flex-row bg-white border border-slate-200/60 transition-all duration-300 overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_24px_rgba(11,60,145,0.06)]"
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--green-accent)";
                    e.currentTarget.style.transform = 'translateX(6px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.06)";
                    e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div className="relative w-full md:w-64 min-h-[180px] bg-slate-100 border-b md:border-b-0 md:border-r border-slate-200/60 shrink-0">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 256px"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex gap-4 mb-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--green-accent)", fontFamily: "'Poppins', sans-serif" }}>
                    <span>{post.category}</span>
                  </div>

                  <h3 className="mb-3 text-xl lg:text-2xl font-black text-slate-900 uppercase leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <Link href={`/blog/${post.slug}`} className="hover:opacity-85 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex gap-5">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase">
                        <User size={12} style={{ color: "var(--green-accent)" }} />
                        {post.author.name}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase">
                        <Calendar size={12} style={{ color: "var(--green-accent)" }} />
                        {post.publishedAt}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors hover:opacity-80"
                      style={{ color: "var(--green-accent)", fontFamily: "'Poppins', sans-serif" }}
                    >
                      READ POST
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
           <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest border-2 text-slate-800 transition-all duration-300 hover:border-[var(--green-accent)] hover:text-[var(--green-accent)] hover:bg-slate-50"
            style={{ borderColor: 'rgba(15,23,42,0.15)', fontFamily: "'Poppins', sans-serif" }}
          >
             VIEW ALL POSTS
             <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}