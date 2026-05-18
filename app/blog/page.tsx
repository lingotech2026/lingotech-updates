'use client';

import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/blog/BlogCard';
import CategoryFilter from '../components/blog/CategoryFilter';
import { BLOG_POSTS, BlogCategory } from '../constants/blog';
import ScrollReveal from '../components/ScrollReveal';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');

  const sortedPosts = useMemo(
    () => [...BLOG_POSTS].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    []
  );

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return sortedPosts;
    return sortedPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory, sortedPosts]);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Page Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--green-accent)' }}
            >
              Our Blog
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 uppercase leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-main)' }}
            >
              Insights &amp; <span style={{ color: 'var(--green-accent)' }}>Ideas</span>
            </h1>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Stay updated with our latest thoughts on technology, development, and business growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + Posts */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

          {/* Category Filter */}
          <ScrollReveal animation="up" delay={100}>
            <div className="mb-10">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </ScrollReveal>

          {/* Post Count */}
          <ScrollReveal animation="up" delay={150}>
            <div className="mb-8">
              <p className="text-sm font-semibold text-slate-500">
                Showing{' '}
                <span className="font-bold" style={{ color: 'var(--green-accent)' }}>
                  {filteredPosts.length}
                </span>{' '}
                {filteredPosts.length === 1 ? 'article' : 'articles'}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
          </ScrollReveal>

          {/* Blog Cards */}
          {filteredPosts.length > 0 ? (
            <div className="flex flex-col gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white border border-dashed border-slate-300">
              <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No articles in this category</h3>
              <p className="text-slate-500 text-sm">Try another category or check back later.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
