import Image from 'next/image';
import { TEAM_MEMBERS } from '../constants/team';
import { SITE_URL } from '../constants/site';
import Footer from '../components/Footer';
import PageHeroSection from '../components/PageHeroSection';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team - Lingotech Solutions | Nirajan Dhungel & Leadership',
  description: 'Meet the team behind Lingotech Solutions: Nirajan Dhungel (Co-Founder & CTO), Shishab Shrestha (Co-Founder & CEO), and Nirush Man Shrestha (Co-Founder & CPO).',
  alternates: {
    canonical: `${SITE_URL}/team`,
  },
  openGraph: {
    title: 'Our Team - Lingotech Solutions',
    description: 'Meet Nirajan Dhungel and the leadership team turning ideas into exceptional digital reality at Lingotech Solutions.',
    url: `${SITE_URL}/team`,
    siteName: 'Lingotech Solutions',
    images: [
      {
        url: `${SITE_URL}/team/nirajandhungel.png`,
        width: 1254,
        height: 1254,
        alt: 'Nirajan Dhungel - Co-Founder & CTO / Software Engineer at Lingotech Solutions',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team - Lingotech Solutions',
    description: 'Meet Nirajan Dhungel and the founding team driving digital innovation at Lingotech Solutions.',
    images: [`${SITE_URL}/team/nirajandhungel.png`],
  },
};

export default function TeamPage() {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${SITE_URL}/team#webpage`,
        url: `${SITE_URL}/team`,
        name: 'Our Team - Lingotech Solutions',
        description: 'Meet the team behind Lingotech Solutions: Nirajan Dhungel, Shishab Shrestha, and Nirush Man Shrestha.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: SITE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Team',
              item: `${SITE_URL}/team`,
            },
          ],
        },
      },
      ...TEAM_MEMBERS.map((member) => ({
        '@type': 'Person',
        '@id': `${SITE_URL}/team#${member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        name: member.name,
        jobTitle: member.role,
        worksFor: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Lingotech Solutions',
          url: SITE_URL,
        },
        image: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}${member.image}`,
          url: `${SITE_URL}${member.image}`,
          contentUrl: `${SITE_URL}${member.image}`,
          caption: member.alt || `${member.name} - ${member.role} at Lingotech Solutions`,
          name: `${member.name} - ${member.role}`,
          width: member.imageWidth ? `${member.imageWidth}px` : '1200px',
          height: member.imageHeight ? `${member.imageHeight}px` : '1200px',
          encodingFormat: member.image.endsWith('.png') ? 'image/png' : 'image/jpeg',
        },
        description: member.bio || `${member.name} is ${member.role} at Lingotech Solutions.`,
      })),
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <Navbar />

      <PageHeroSection
        badge="Meet Our Team"
        title="The People Behind The Product"
        description="We're a diverse group of designers, developers, and strategists united by a passion for creating exceptional digital experiences."
      />

      {/* Team Grid */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Team Members">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM_MEMBERS.map((member, index) => {
              const isNirajan = member.name.toLowerCase().includes('nirajan');
              return (
                <ScrollReveal key={member.name} animation="up" delay={index * 100}>
                  <figure
                    itemScope
                    itemType="https://schema.org/Person"
                    className="group relative overflow-hidden bg-[#F8FAFC] border border-slate-200/80 transition-all duration-300 hover:border-[var(--green-accent)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,60,145,0.06)]"
                  >
                    {/* Top accent bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity z-20" style={{ backgroundColor: 'var(--green-accent)' }} />

                    {/* Photo */}
                    <div className="relative h-[360px] sm:h-[420px] overflow-hidden bg-slate-100">
                      <Image
                        src={member.image}
                        alt={member.alt || `${member.name} - ${member.role} at Lingotech Solutions`}
                        title={`${member.name} - ${member.role} | Lingotech Solutions`}
                        width={member.imageWidth || 600}
                        height={member.imageHeight || 420}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading={isNirajan || index === 0 ? 'eager' : 'lazy'}
                        priority={isNirajan}
                        itemProp="image"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                    </div>

                    {/* Info */}
                    <figcaption className="p-5 text-center border-t border-slate-200/50">
                      <h3
                        itemProp="name"
                        className="font-black text-slate-900 uppercase mb-1.5 text-base tracking-wide"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        itemProp="jobTitle"
                        className="text-[10px] font-bold uppercase tracking-widest"
                        style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}
                      >
                        {member.role}
                      </p>
                      <div className="mx-auto mt-3 w-10 h-[1px]" style={{ backgroundColor: 'rgba(11,60,145,0.25)' }} />
                    </figcaption>
                  </figure>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="up">
            <div className="relative bg-white border border-slate-200 p-10 lg:p-14 text-center overflow-hidden max-w-2xl mx-auto shadow-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] opacity-[0.06] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, var(--green-accent), transparent 70%)' }} />
              
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                  JOIN US
                </span>
                <h2 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Want to Join Our Team?
                </h2>
                <p className="text-slate-600 text-sm mb-8 max-w-md mx-auto">
                  We&apos;re always looking for talented individuals who share our passion for innovation and building great products.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:opacity-90 shadow-md"
                  style={{ backgroundColor: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}
                >
                  View Open Positions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
