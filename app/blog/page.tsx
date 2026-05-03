'use client';

import { useState, useMemo } from 'react';
import Script from 'next/script';
import { createElement } from 'react';
import Navbar from '../components/Navbar';
import PageHeroSection from '../components/PageHeroSection';
import Footer from '../components/Footer';
import BlogCard from '../components/blog/BlogCard';
import CategoryFilter from '../components/blog/CategoryFilter';
import FeaturedPosts from '../components/blog/FeaturedPosts';
import { BLOG_POSTS, getFeaturedPosts, BlogCategory } from '../constants/blog';

const BLOG_ANIMATION_SCRIPT_SRC =
  'https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js';
const BLOG_HERO_LOTTIE_SRC =
  'https://lottie.host/f852c7fe-a21d-4404-826b-0d59f54a5899/KCtKgXho5Y.lottie';

/**
 * Blog listing page - Main hub for all blog content
 * Features: category filtering, featured posts, responsive grid layout
 */
export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');
  const featuredPosts = getFeaturedPosts();

  const sortedPosts = useMemo(
    () => [...BLOG_POSTS].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    []
  );

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return sortedPosts;
    }
    return sortedPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory, sortedPosts]);

  return (
    <main className="min-h-screen bg-background">
      <Script
        src={BLOG_ANIMATION_SCRIPT_SRC}
        type="module"
        strategy="afterInteractive"
      />
      <Navbar />
      
      <PageHeroSection
        badge="Insights & Knowledge"
        title="Our Blog"
        description="Explore our latest articles, tutorials, and insights on web development, design, technology, and business growth."
        backgroundContent={
          <div className="absolute inset-0">
            {/* Ambient blobs */}
            <div className="absolute -top-16 left-[-6%] h-72 w-72 rounded-full bg-primary-100/25 blur-3xl sm:h-96 sm:w-96" />
            <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl sm:h-112 sm:w-md" />
            {/* Lottie animation — right side background */}
            <div className="absolute right-[2%] top-1/2 -translate-y-1/2 h-[90%] aspect-square opacity-75">
              <div className="absolute inset-0 rounded-full bg-secondary-400/15 blur-3xl" />
              {createElement('dotlottie-wc', {
                src: BLOG_HERO_LOTTIE_SRC,
                autoplay: true,
                loop: true,
                style: { width: '100%', height: '100%' },
              })}
            </div>
            {/* Gradient overlay — fades text area, lets animation breathe on the right */}
            <div className="absolute inset-0 bg-linear-to-r from-primary-900/85 via-primary-800/60 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-b from-primary-900/20 via-transparent to-primary-900/30" />
          </div>
        }
      />

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && selectedCategory === 'All' && (
              <FeaturedPosts posts={featuredPosts} />
            )}

            {/* Category Filter */}
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {/* Results Count */}
            <div className="mb-6 text-center">
              <p className="text-sm sm:text-base text-muted">
                {selectedCategory === 'All' 
                  ? `Showing all ${filteredPosts.length} articles`
                  : `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} in ${selectedCategory}`
                }
              </p>
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-100 mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-700 mb-2">
                  No articles found
                </h3>
                <p className="text-sm sm:text-base text-muted">
                  Try selecting a different category or check back later for new content.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
