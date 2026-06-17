'use client';

import { useMemo, useState } from 'react';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';
import { BLOG_POSTS, BlogCategory } from '../../constants/blog';
import ScrollReveal from '../ScrollReveal';

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');

  const sortedPosts = useMemo(
    () => [...BLOG_POSTS].sort((a, b) => a.publishedAt.localeCompare(b.publishedAt) * -1),
    []
  );

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return sortedPosts;
    return sortedPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory, sortedPosts]);

  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <ScrollReveal animation="up" delay={100}>
            <div className="mb-10">
              <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="up" delay={150}>
            <div className="mb-8">
              <p className="text-sm font-semibold text-slate-500">
                Showing{' '}
                <span className="font-bold text-[var(--green-accent)]">{filteredPosts.length}</span>{' '}
                {filteredPosts.length === 1 ? 'article' : 'articles'}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
          </ScrollReveal>

          {filteredPosts.length > 0 ? (
            <div className="flex flex-col gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white border border-dashed border-slate-300">
              <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-xl font-bold text-slate-800 mb-2">No articles in this category</h2>
              <p className="text-slate-500 text-sm">Try another category or check back later.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
