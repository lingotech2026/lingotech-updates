import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { SITE_URL } from './constants/site';

const ServicesSection = dynamic(() => import('./components/ServicesSection'), { ssr: true });
const PortfolioSection = dynamic(() => import('./components/PortfolioSection'), { ssr: true });
const ToolsMarquee = dynamic(() => import('./components/ToolsMarquee'), { ssr: true });
const AboutSection = dynamic(() => import('./components/AboutSection'), { ssr: true });
const WhyChooseUsSection = dynamic(() => import('./components/WhyChooseUsSection'), { ssr: true });
const GetInTouchSection = dynamic(() => import('./components/GetInTouchSection'), { ssr: true });
const LatestBlogSection = dynamic(() => import('./components/LatestBlogSection'), { ssr: true });
const Footer = dynamic(() => import('./components/Footer'), { ssr: true });

const ogImage = '/team_collaboration_office.png';

export const metadata: Metadata = {
  title: 'Lingotech Solutions - Turning Ideas Into Digital Reality',
  description:
    'We build high-performance websites, web applications, and mobile apps designed to scale with your business.',
  keywords: [
    'Lingotech Solutions',
    'web development',
    'mobile app development',
    'software engineering',
    'SEO services',
    'UI UX design',
    'Nepal tech company',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lingotech Solutions - Turning Ideas Into Digital Reality',
    description:
      'We build high-performance websites, web applications, and mobile apps designed to scale with your business.',
    url: '/',
    siteName: 'Lingotech Solutions',
    images: [
      {
        url: ogImage,
        width: 1024,
        height: 1024,
        alt: 'Lingotech Solutions team collaborating in the office',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lingotech Solutions - Turning Ideas Into Digital Reality',
    description:
      'We build high-performance websites, web applications, and mobile apps designed to scale with your business.',
    images: [ogImage],
  },
};

/**
 * Home page component - Landing page showcasing company services and value proposition
 * Displays complete overview with hero, services, technologies, about, and CTA sections
 */
export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}#organization`,
        name: 'Lingotech Solutions',
        url: SITE_URL,
        logo: `${SITE_URL}/lingo-tech.png`,
        email: 'solutionslingotech@gmail.com',
        telephone: '+977 9748263080',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lalitpur',
          addressCountry: 'NP',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        url: SITE_URL,
        name: 'Lingotech Solutions',
        publisher: {
          '@id': `${SITE_URL}#organization`,
        },
        inLanguage: 'en',
      },
    ],
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <WhyChooseUsSection />
      <LatestBlogSection />
      <ToolsMarquee />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
