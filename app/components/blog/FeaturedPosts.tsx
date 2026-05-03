import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../Icons';
import type { BlogPost } from '../../constants/blog';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

/**
 * Featured posts section component
 * Displays highlighted blog posts with enhanced visual treatment
 */
export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) return null;

  const mainPost = posts[0];
  const otherPosts = posts.slice(1, 3);

  return (
    <section className="mb-12 sm:mb-16 md:mb-20">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-700">
          Featured Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Main Featured Post - Large Card */}
        <Link
          href={`/blog/${mainPost.slug}`}
          className="group relative rounded-2xl overflow-hidden bg-linear-to-br from-primary-700 to-primary-600 h-100 sm:h-112.5 lg:h-125 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={mainPost.featuredImage}
              alt={mainPost.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-primary-900/95 via-primary-900/50 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
            <div className="blog-featured-badge mb-4 w-fit">
              <Icons.Star className="w-3 h-3" />
              Featured
            </div>

            <span className="text-xs sm:text-sm font-semibold mb-2 text-secondary-300">
              {mainPost.category}
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 line-clamp-2 group-hover:text-secondary-300 transition-colors">
              {mainPost.title}
            </h3>

            <p className="text-sm sm:text-base text-neutral-200 mb-4 sm:mb-6 line-clamp-2">
              {mainPost.excerpt}
            </p>
          </div>
        </Link>

        {/* Other Featured Posts - Smaller Cards */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {otherPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group lt-card-interactive flex gap-4 sm:gap-6 p-4 sm:p-6"
            >
              {/* Image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between grow min-w-0">
                <div>
                  <span className="text-xs font-semibold text-secondary-600 mb-1 block">
                    {post.category}
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-primary-700 mb-2 line-clamp-2 group-hover:text-secondary-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-body line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
