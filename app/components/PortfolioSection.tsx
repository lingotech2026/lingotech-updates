'use client';
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PORTFOLIO_PROJECTS = [
  {
    id: "himalink",
    title: "Himalink",
    category: "Digital Marketplace",
    description: "A modern advertising and listing platform connecting vendors, property owners, and buyers. Powered by a scalable multi-service architecture featuring a React admin dashboard, real-time chat servers, and Cloudflare edge caching for secure, global access.",
    image: "/projects/himalink.jpeg", 
    techStack: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Nginx", icon: "devicon-nginx-original" }
    ],
    features: [
      "Structured digital marketplace",
      "Real-time chat interactions",
      "Admin analytics dashboard",
      "Cloudflare edge security"
    ],
    liveUrl: "#",
    githubUrl: "#",
    imageRight: false,
  },

  {
    id: "futsmandu",
    title: "Futsmandu",
    category: "Sports Management Platform",
    description: "A comprehensive platform utilizing Flutter for cross-platform mobile access and NestJS on the backend. Hosted on secure VPS cloud infrastructure, the system leverages Nginx, Docker, Redis caching, and PostgreSQL for robust, high-performance operations.",
    image: "/projects/futsmandu.png", 
    techStack: [
      { name: "Flutter", icon: "devicon-flutter-plain" },
      { name: "NestJS", icon: "devicon-nestjs-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Nginx", icon: "devicon-nginx-original" }
    ],
    features: [
      "Cross-platform mobile apps",
      "High-performance API",
      "Cloud VPS Deployment",
      "Advanced caching mechanisms"
    ],
    liveUrl: "#",
    githubUrl: "#",
    imageRight: true,
  },
   {
    id: "collabboard",
    title: "CollabBoard",
    category: "Real-Time Collaboration",
    description: "A full-stack collaborative whiteboard application built with Go, React, TypeScript, PostgreSQL, and WebSockets. Enables secure JWT user authentication, board creation, and live real-time collaboration through a scalable Dockerized monorepo architecture.",
    image: "/projects/collaboard.png", 
    techStack: [
      { name: "Go", icon: "devicon-go-original-wordmark" },
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Vite", icon: "devicon-vitejs-plain" }
    ],
    features: [
      "Real-time WebSocket collaboration",
      "Secure JWT authentication",
      "Board creation & management",
      "Scalable monorepo architecture"
    ],
    liveUrl: "#",
    githubUrl: "#",
    imageRight: false,
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#F8FAFC] border-t border-b border-slate-200/80">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="up">
          <div className="mb-20 text-center">
            <div className="inline-block mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-blue-50 text-[#0B3C91] border border-blue-100 rounded-full">
                OUR RECENT WORK
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase leading-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Featured <span style={{ color: "var(--green-accent)" }}>Projects</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              Explore some of our most impactful work, where we've turned complex challenges into beautiful, high-performing digital realities.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects List */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} animation="up" delay={index * 100}>
              <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${project.imageRight ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-[55%]">
                  <div className="relative w-full aspect-[16/10] bg-slate-100 rounded-xl p-2 sm:p-3 border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md group">
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain sm:object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 border-l-2 pl-4" style={{ borderColor: "var(--green-accent)" }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech) => (
                        <div key={tech.name} className="group relative flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-sm transition-all duration-300 group-hover:border-[#0B3C91] group-hover:shadow-md group-hover:-translate-y-1">
                            <i className={`${tech.icon} colored`}></i>
                          </div>
                          <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-[#0B3C91] whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-10">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-full shadow-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B3C91] text-white font-bold uppercase tracking-wide text-xs hover:bg-blue-800 transition-all shadow-md rounded-lg"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Link>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
