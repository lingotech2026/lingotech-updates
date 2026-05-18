'use client';
import { memo } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import type { Service } from '../constants/services';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = memo(function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <ScrollReveal animation="up" delay={index * 100}>
      <div 
        className="group relative bg-[#F8FAFC] p-6 transition-all duration-300 h-full flex flex-col shadow-[0_2px_8px_rgba(15,23,42,0.02)]"
        style={{ border: '1px solid rgba(15,23,42,0.06)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--green-accent)';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(11,60,145,0.06)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(15,23,42,0.06)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: 'var(--green-accent)' }} />

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center border border-slate-200 bg-white mb-5">
          <Image src={service.iconPath} alt={service.title} width={28} height={28} style={{ objectFit: 'contain' }} />
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {service.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {service.backPoints && service.backPoints.length > 0 && (
          <ul className="mb-5 flex flex-col gap-2">
            {service.backPoints.slice(0, 3).map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                {point}
              </li>
            ))}
          </ul>
        )}

        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}
        >
          Explore Service
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </ScrollReveal>
  );
});

export default ServiceCard;
