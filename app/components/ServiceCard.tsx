import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import type { Service } from '../constants/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

/**
 * Flip card service component
 * Front: icon, title, description, and CTA
 * Back: green gradient with feature bullet points
 */
const ServiceCard = memo(function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <ScrollReveal animation="up" delay={index * 100}>
      <div className="flip-card h-[420px]">
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front bg-white rounded-lg shadow-lg p-6 flex flex-col border border-gray-100">
            <Image
              src={service.iconPath}
              alt={service.title}
              width={80}
              height={80}
              className="w-20 h-20 object-contain mx-auto mb-4"
            />
            <p className="text-sm text-gray-600 leading-relaxed flex-1 overflow-auto">
              <Link
                href="/services"
                className="text-emerald-600 font-semibold hover:underline"
              >
                {service.title}
              </Link>{' '}
              {service.description}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium mt-4 hover:underline text-sm"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Back */}
          <div className="flip-card-back bg-gradient-green rounded-lg shadow-lg p-6 flex flex-col text-white">
            <div className="flex-1 flex flex-col justify-center">
              <h5 className="text-lg font-bold mb-6 text-center">{service.backTitle}</h5>
              <ul className="space-y-3 mb-6">
                {service.backPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn-outline-light self-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
});

export default ServiceCard;
