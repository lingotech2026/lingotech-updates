'use client';
import React from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_SECTIONS } from '../constants/footer';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-slate-200/80 pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--green-accent) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/lingo-tech.png"
                alt="LingoTech Solutions"
                width={190}
                height={55}
                className="h-[52px] w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Software Engineering & Web Development based in Kathmandu, Nepal. 
              Building exceptional digital experiences for global clients.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "#", name: "Github" },
                { Icon: Linkedin, href: "#", name: "LinkedIn" },
                { Icon: Instagram, href: "#", name: "Instagram" },
                { Icon: Facebook, href: "#", name: "Facebook" },
                { Icon: Twitter, href: "#", name: "Twitter" },
              ].map(({ Icon, href, name }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300"
                  style={{ borderRadius: 0 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--green-accent)";
                    e.currentTarget.style.borderColor = "var(--green-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.03)";
                    e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.08)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {section.links.filter(l => !l.isPlaceholder).map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href.startsWith('/') ? item.href : `/${item.href}`}
                      className="text-slate-500 transition-colors inline-flex items-center gap-2 group hover:text-[var(--green-accent)]"
                    >
                      <span className="w-0 h-[1px] group-hover:w-3 transition-all duration-300" style={{ backgroundColor: "var(--green-accent)" }}></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 border flex items-center justify-center" style={{ backgroundColor: "var(--green-bg-subtle)", borderColor: "rgba(11, 60, 145, 0.15)" }}>
                  <Phone className="w-4 h-4" style={{ color: "var(--green-accent)" }} />
                </div>
                <a
                  href={`tel:+977 9748263080`}
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
                >
                  +977 9748263080
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 border flex items-center justify-center" style={{ backgroundColor: "var(--green-bg-subtle)", borderColor: "rgba(11, 60, 145, 0.15)" }}>
                  <Mail className="w-4 h-4" style={{ color: "var(--green-accent)" }} />
                </div>
                <a
                  href={`mailto:solutionslingotech@gmail.com`}
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
                >
                  solutionslingotech@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 border flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--green-bg-subtle)", borderColor: "rgba(11, 60, 145, 0.15)" }}>
                  <MapPin className="w-4 h-4" style={{ color: "var(--green-accent)" }} />
                </div>
                <span className="text-slate-600 pt-2 font-medium">Lalitpur, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {year} <span className="text-slate-800 font-semibold">LingoTech Pvt.Ltd</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
