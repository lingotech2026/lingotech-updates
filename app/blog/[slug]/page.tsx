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
        url: `${SITE_URL}/lingo-tech.png`,
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
      
      <main className="min-h-screen bg-white text-slate-900">
        <Navbar />

        {/* Hero Section with Featured Image */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-[#F8FAFC] border-b border-slate-200/80">
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(11,60,145,0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(11,60,145,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '4vw 4vw',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
            }}
          />

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-6" aria-label="Breadcrumb">
                <Link href="/blog" className="hover:text-[#0B3C91] transition-colors">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-slate-600">{post.category}</span>
              </nav>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-blue-50 text-[#0B3C91] border border-blue-100 mb-4 shadow-sm">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed font-light pl-4 border-l-2" style={{ borderColor: 'var(--green-accent)' }}>
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full h-72 sm:h-96 md:h-[450px] border border-slate-200 p-1.5 shadow-md">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="object-cover"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 border border-slate-200 text-[10px] font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Article Content */}
              <div 
                className="blog-content max-w-none text-slate-700 text-sm leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(post.content) }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Share this article</h3>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 text-[#0B3C91] border border-blue-100 hover:bg-[#0B3C91] hover:text-white transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Icons.Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 text-[#0B3C91] border border-blue-100 hover:bg-[#0B3C91] hover:text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Icons.Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-[#F8FAFC] border-t border-b border-slate-200/80">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-8 sm:mb-12 text-center uppercase tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="p-10 sm:p-12 bg-linear-to-br from-[#0B3C91] to-[#082C6C] text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, #3B82F6, transparent 70%)' }} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 uppercase tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/90 mb-8 max-w-md mx-auto leading-relaxed">
                    Let&apos;s discuss how we can help bring your ideas to life with cutting-edge technology.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B3C91] font-bold uppercase tracking-widest text-xs hover:bg-blue-50 transition-colors shadow-md"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Get in Touch
                    <Icons.ArrowRightUp className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
