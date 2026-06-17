import type { Metadata, Viewport } from 'next';
import { Poppins, Pinyon_Script } from 'next/font/google';
import './globals.css';
import AppLoadingProvider from './components/AppLoadingProvider';
import { SITE_URL } from './constants/site';
import { HERO_VIDEO_POSTER } from './constants/videos';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const pinyonScript = Pinyon_Script({
  variable: '--font-pinyon-script',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lingotech Solutions - Turning Ideas Into Digital Reality',
    template: '%s | Lingotech Solutions',
  },
  description: 'We build high-performance websites, web applications, and mobile apps that scale with your business.',
  keywords: ['software development', 'web development', 'mobile apps', 'Lingotech Solutions', 'digital agency'],
  authors: [{ name: 'Lingotech Solutions' }],
  creator: 'Lingotech Solutions',
  publisher: 'Lingotech Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Lingotech Solutions - Turning Ideas Into Digital Reality',
    description: 'We build high-performance websites, web applications, and mobile apps that scale with your business.',
    siteName: 'Lingotech Solutions',
    images: [
      {
        url: '/lingo-tech.png',
        width: 800,
        height: 600,
        alt: 'Lingotech Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lingotech Solutions - Turning Ideas Into Digital Reality',
    description: 'We build high-performance websites, web applications, and mobile apps that scale with your business.',
    images: ['/lingo-tech.png'],
    creator: '@lingotech',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/lingo-tech.png',
    apple: '/lingo-tech.png',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${pinyonScript.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="preload"
          as="image"
          href={HERO_VIDEO_POSTER}
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased bg-white text-slate-900 font-[family-name:var(--font-poppins)]">
        <AppLoadingProvider
          minLoadingSeconds={0}
          showOnRefresh={false}
          showOnNavigation={false}
        >
          {children}
        </AppLoadingProvider>
      </body>
    </html>
  );
}
