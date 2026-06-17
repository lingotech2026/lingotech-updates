import React from 'react';
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_SECTIONS } from '../constants/footer';

const COPYRIGHT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200/80 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--green-accent) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/lingo-tech.png"
                alt="LingoTech Solutions"
                width={190}
                height={55}
                className="h-[52px] w-auto object-contain"
                loading="lazy"
                sizes="190px"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Software Engineering &amp; Web Development based in Kathmandu, Nepal. Building exceptional digital
              experiences for global clients.
            </p>

            <div className="flex gap-3">
              {[
                { Icon: Github, href: '#', name: 'GitHub' },
                { Icon: Linkedin, href: '#', name: 'LinkedIn' },
                { Icon: Instagram, href: '#', name: 'Instagram' },
                { Icon: Facebook, href: '#', name: 'Facebook' },
                { Icon: Twitter, href: '#', name: 'Twitter' },
              ].map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${name}`}
                  className="w-10 h-10 bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-white hover:bg-[var(--green-accent)] hover:border-[var(--green-accent)] transition-all duration-300"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3 text-sm">
                {section.links
                  .filter((l) => !l.isPlaceholder)
                  .map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href.startsWith('/') ? item.href : `/${item.href}`}
                        className="text-slate-500 transition-colors inline-flex items-center gap-2 group hover:text-[var(--green-accent)]"
                      >
                        <span className="w-0 h-px group-hover:w-3 transition-all duration-300 bg-[var(--green-accent)]" aria-hidden="true" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 border flex items-center justify-center bg-[var(--green-bg-subtle)] border-blue-100">
                  <Phone className="w-4 h-4 text-[var(--green-accent)]" aria-hidden="true" />
                </div>
                <a href="tel:+9779748263080" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                  +977 9748263080
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 border flex items-center justify-center bg-[var(--green-bg-subtle)] border-blue-100">
                  <Mail className="w-4 h-4 text-[var(--green-accent)]" aria-hidden="true" />
                </div>
                <a
                  href="mailto:solutionslingotech@gmail.com"
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
                >
                  solutionslingotech@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 border flex items-center justify-center shrink-0 bg-[var(--green-bg-subtle)] border-blue-100">
                  <MapPin className="w-4 h-4 text-[var(--green-accent)]" aria-hidden="true" />
                </div>
                <span className="text-slate-600 pt-2 font-medium">Lalitpur, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {COPYRIGHT_YEAR}{' '}
            <span className="text-slate-800 font-semibold">LingoTech Pvt.Ltd</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
