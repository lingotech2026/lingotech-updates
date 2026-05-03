import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../Icons';
import ScrollReveal from '../ScrollReveal';
import type { BlogPost } from '../../constants/blog';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

/**
 * Blog card component for displaying blog post previews
 * Features: responsive design, hover effects, category badges, reading time
 */
export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <ScrollReveal animation={index % 2 === 0 ? 'up' : 'zoom'} delay={index * 80}>
      <article className="blog-card h-full flex flex-col">
        {/* Featured Image */}
        <Link
          href={`/blog/${post.slug}`}
          className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl sm:rounded-t-2xl group/image"
        >
          <div className="absolute inset-0 bg-linear-to-t from-primary-900/60 to-transparent z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover/image:scale-110 transition-transform duration-500"
          />

          {/* Featured Badge */}
          {post.isFeatured && (
            <div className="absolute top-4 right-4 z-20 blog-featured-badge">
              <Icons.Star className="w-3 h-3" />
              Featured
            </div>
          )}
        </Link>

        {/* Card Content */}
        <div className="flex flex-col grow p-5 sm:p-6">

          {/* Title */}
          <Link
            href={`/blog/${post.slug}`}
            className="group/title"
          >
            <h3 className="text-lg sm:text-xl font-bold text-primary-700 mb-2 sm:mb-3 line-clamp-2 group-hover/title:text-secondary-600 transition-colors">
              {post.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-sm md:text-base text-body leading-relaxed mb-4 line-clamp-3 grow">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-secondary-600 transition-colors gap-2 mt-4 focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-primary-600 rounded"
            aria-label={`Read more about ${post.title}`}
          >
            Read full article
            <Icons.ArrowRightUp className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </article>
    </ScrollReveal>
  );
}
