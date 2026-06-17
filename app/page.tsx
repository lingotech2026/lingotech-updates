import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { SITE_URL } from './constants/site';

import DeviconStyles from './components/DeviconStyles';
const ServicesSection = dynamic(() => import('./components/ServicesSection'));
const PortfolioSection = dynamic(() => import('./components/PortfolioSection'));
const ToolsMarquee = dynamic(() => import('./components/ToolsMarquee'));
const AboutSection = dynamic(() => import('./components/AboutSection'));
const WhyChooseUsSection = dynamic(() => import('./components/WhyChooseUsSection'));
const GetInTouchSection = dynamic(() => import('./components/GetInTouchSection'));
const LatestBlogSection = dynamic(() => import('./components/LatestBlogSection'));
const Footer = dynamic(() => import('./components/Footer'));

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

const faqItems = [
  {
    question: 'What services does Lingotech Solutions offer?',
    answer:
      'We offer website development, mobile app development, custom software engineering, SEO, and digital marketing services.',
  },
  {
    question: 'Where is Lingotech Solutions based?',
    answer: 'We are based in Lalitpur, Nepal and serve clients globally.',
  },
  {
    question: 'How can I start a project with Lingotech?',
    answer: 'Book a consultation through our contact page and our team will guide you through discovery and planning.',
  },
];

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Lingotech Solutions',
        url: SITE_URL,
        logo: `${SITE_URL}/lingo-tech.png`,
        email: 'solutionslingotech@gmail.com',
        telephone: '+9779748263080',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lalitpur',
          addressCountry: 'NP',
        },
        sameAs: [],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'Lingotech Solutions',
        image: `${SITE_URL}/lingo-tech.png`,
        url: SITE_URL,
        telephone: '+9779748263080',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lalitpur',
          addressCountry: 'NP',
        },
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Lingotech Solutions',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/#services`,
        name: 'Software Development Services',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'Worldwide',
        serviceType: ['Web Development', 'Mobile App Development', 'SEO', 'Custom Software'],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
        ],
      },
    ],
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <DeviconStyles />
      <AboutSection />
      <WhyChooseUsSection />
      <LatestBlogSection />
      <ToolsMarquee />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
