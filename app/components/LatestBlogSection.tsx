'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { getFeaturedPosts } from '../constants/blog';

export default function LatestBlogSection() {
  const [blogPage, setBlogPage] = useState(0);
  const blogsPerPage = 3;
  const allPosts = getFeaturedPosts();
  const totalBlogPages = Math.ceil(allPosts.length / blogsPerPage);

  return (
    <section className="py-20 md:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        <h2 className="text-xs md:text-sm font-bold text-gray-900 text-center mb-10 uppercase">
          LATEST FROM OUR PRESS
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.slice(blogPage * blogsPerPage, (blogPage + 1) * blogsPerPage).map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1.5">
                  {post.category}
                </span>
                <h5 className="text-emerald-600 font-semibold mb-3 line-clamp-2 text-sm uppercase">
                  {post.title}
                </h5>
                <p className="text-gray-600 text-sm mb-4 line-clamp-4 grow">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:underline mt-auto"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Blog Navigation */}
          {totalBlogPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setBlogPage(Math.max(0, blogPage - 1))}
                disabled={blogPage === 0}
                className="w-10 h-10 rounded-full border border-emerald-600 text-emerald-600 flex items-center justify-center disabled:opacity-30 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalBlogPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBlogPage(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    blogPage === i ? 'bg-emerald-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
              
              <button
                onClick={() => setBlogPage(Math.min(totalBlogPages - 1, blogPage + 1))}
                disabled={blogPage === totalBlogPages - 1}
                className="w-10 h-10 rounded-full border border-emerald-600 text-emerald-600 flex items-center justify-center disabled:opacity-30 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}