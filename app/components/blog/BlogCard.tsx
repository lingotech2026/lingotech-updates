import Image from 'next/image';
import Link from 'next/link';
import { User, Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import type { BlogPost } from '../../constants/blog';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

/**
 * Premium Horizontal Blog Card
 * Re-designed to match our brand new light blue/white system.
 */
export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <ScrollReveal animation="up" delay={index * 50}>
      <div className="group flex flex-col md:flex-row bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl mb-8">
        
        {/* Left Side: Image Area */}
        <div className="relative w-full md:w-[35%] lg:w-[30%] h-56 md:h-auto overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay with Title & Category */}
          <div className="absolute inset-0 bg-[#0B3C91]/40 flex flex-col items-center justify-center p-6 text-center">
            <h4 className="text-white font-bold text-[10px] md:text-[11px] uppercase leading-tight mb-2">
              {post.title}
            </h4>
            <p className="text-blue-100/90 text-[8px] md:text-[9px]">
              {post.category}
            </p>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-sm md:text-base font-bold text-slate-800 mb-2 group-hover:text-[#0B3C91] transition-colors leading-snug">
              {post.title}
            </h3>
          </Link>
          
          <p className="text-slate-500 text-[10px] md:text-[11px] line-clamp-2 mb-5 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Metadata Meta */}
          <div className="flex flex-wrap items-center gap-6 mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-[#0B3C91]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#0B3C91] text-[10px] font-bold">{post.author.name}</span>
                <span className="text-[9px] text-slate-400 font-medium">Author</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-800 text-[10px] font-bold tracking-tight">{post.publishedAt}</span>
                <span className="text-[9px] text-slate-400 font-medium">Published Date</span>
              </div>
            </div>

            <Link 
              href={`/blog/${post.slug}`}
              className="ml-auto flex items-center gap-2 text-[#0B3C91] font-bold text-xs uppercase tracking-wider group/link hover:text-blue-800 transition-colors"
            >
              Read More 
              <div className="w-6 h-6 rounded-full border border-[#0B3C91] flex items-center justify-center group-hover/link:bg-[#0B3C91] group-hover/link:text-white transition-all">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
