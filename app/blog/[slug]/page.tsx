import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Icons } from '../../components/Icons';
import BlogCard from '../../components/blog/BlogCard';
import { BLOG_POSTS, getRelatedPosts } from '../../constants/blog';
import { SITE_URL } from '../../constants/site';
import { renderMarkdownToHtml } from '../../utils/markdown';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Lingotech Solutions Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Individual blog post page with full content
 * Features: rich content display, author info, related posts, social sharing
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.id);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.featuredImage}`,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lingotech Solutions',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/LT.jpeg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section with Featured Image */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-surface to-background" />
          
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted mb-6" aria-label="Breadcrumb">
                <Link href="/blog" className="hover:text-primary-600 transition-colors">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-body">{post.category}</span>
              </nav>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-secondary-100 text-secondary-700">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-700 mb-4 sm:mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg sm:text-xl text-body mb-6 sm:mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full h-72 sm:h-96 md:h-125 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Article Content */}
              <div 
                className="blog-content max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(post.content) }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-bold text-primary-700 mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-700 hover:bg-primary-700 hover:text-white transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Icons.Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-700 hover:bg-primary-700 hover:text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Icons.Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 sm:py-16 md:py-20 bg-surface">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-700 mb-8 sm:mb-12 text-center">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="p-8 sm:p-10 md:p-12 rounded-2xl bg-linear-to-br from-primary-700 to-primary-600 text-white">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 sm:mb-8">
                  Let&apos;s discuss how we can help bring your ideas to life with cutting-edge technology.
                </p>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  Get in Touch
                  <Icons.ArrowRightUp className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
