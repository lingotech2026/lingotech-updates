import type { MetadataRoute } from 'next';
import { SITE_URL } from './constants/site';
import { BLOG_POSTS } from './constants/blog';

const STATIC_ROUTES = [
  { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/team', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date('2026-06-17'),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
