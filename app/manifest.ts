import type { MetadataRoute } from 'next';
import { SITE_URL } from './constants/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lingotech Solutions',
    short_name: 'Lingotech',
    description: 'High-performance websites, web applications, and mobile apps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0B3C91',
    icons: [
      {
        src: '/lingo-tech.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
