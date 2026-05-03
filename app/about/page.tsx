'use client';

import Image from "next/image";
import Script from "next/script";
import { createElement } from "react";
import Footer from "../components/Footer";
import PageHeroSection from "../components/PageHeroSection";
import Navbar from "../components/Navbar";
import ProductDevelopmentRoadmapSection from "../components/ProductDevelopmentRoadmapSection";
import { CheckCircle2 } from "lucide-react";
import { ABOUT_BENEFITS, ABOUT_FEATURES, ABOUT_VALUES, MISSION_CONTENT } from "../constants/about";

const ABOUT_ANIMATION_SCRIPT_SRC =
    "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js";
const ABOUT_HERO_LOTTIE_SRC =
    "https://lottie.host/16d30441-4691-479b-af84-8378b395f31c/VnspLdWVXM.lottie";

// Client component for About page with styled-jsx animations
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
                        <Script
                                src={ABOUT_ANIMATION_SCRIPT_SRC}
                                type="module"
                                strategy="afterInteractive"
                        />
            <Navbar />
            <PageHeroSection
                badge="Who We Are"
                title="About Us"
                description="Empowering businesses through innovative technology solutions, strategic digital transformation, and unwavering commitment to excellence."
                                backgroundContent={
                                    <div className="absolute inset-0">
                                        {/* Ambient blobs */}
                                        <div className="absolute -top-16 left-[-6%] h-72 w-72 rounded-full bg-primary-100/25 blur-3xl sm:h-96 sm:w-96" />
                                        <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl sm:h-112 sm:w-md" />
                                        {/* Lottie animation — right side background */}
                                        <div className="absolute right-[2%] top-1/2 -translate-y-1/2 h-[90%] aspect-square opacity-75">
                                            <div className="absolute inset-0 rounded-full bg-secondary-400/15 blur-3xl" />
                                            {createElement('dotlottie-wc', {
                                                src: ABOUT_HERO_LOTTIE_SRC,
                                                autoplay: true,
                                                loop: true,
                                                style: { width: '100%', height: '100%' },
                                            })}
                                        </div>
                                        {/* Gradient overlay — fades text area, lets animation breathe on the right */}
                                        <div className="absolute inset-0 bg-linear-to-r from-primary-900/85 via-primary-800/60 to-transparent" />
                                        <div className="absolute inset-0 bg-linear-to-b from-primary-900/20 via-transparent to-primary-900/30" />
                                    </div>
                                }
            />

            {/* Mission Section */}
            <section className="relative py-12 sm:py-16 md:py-24 lg:py-40 bg-linear-to-br from-surface via-background to-surface overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary-600/5 rounded-full blur-3xl -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-secondary-600/5 rounded-full blur-3xl translate-y-1/2" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                            <div className="inline-block mb-3 sm:mb-4">
                                <span className="text-[10px] xs:text-xs sm:text-sm font-bold text-secondary-600 uppercase tracking-widest bg-secondary-600/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                    Our Purpose
                                </span>
                            </div>
                            <h2 className="font-bold text-primary-700 leading-tight" style={{fontSize: 'clamp(1.75rem, 1.5rem + 1.5vw, 3.75rem)'}}>
                                Our Mission
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
                            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                                {MISSION_CONTENT.map((paragraph, index) => (
                                    <p 
                                        key={index}
                                        className="text-body leading-relaxed font-light hover:text-primary-700 transition-colors duration-300 text-justify" style={{fontSize: 'clamp(0.875rem, 0.825rem + 0.375vw, 1.125rem)'}}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            
                            <div className="relative group">
                                {/* Image container with decorative border */}
                                    <div className="absolute inset-0 bg-linear-to-br from-primary-600/20 to-secondary-600/20 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10" />
                                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-112 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-primary-600/10 group-hover:border-primary-600/30 transition-all duration-500">
                                    <Image
                                        src="/developer.jpeg"
                                        alt="Developer working on innovative solutions"
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        priority
                                    />
                                    {/* Gradient overlay for elegance */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProductDevelopmentRoadmapSection />

            {/* Why Choose Us Section */}
            <section className="relative py-12 sm:py-16 md:py-24 lg:py-40 bg-linear-to-b from-surface to-background overflow-hidden">
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute inset-0 bg-grid-overlay-subtle" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-center">
                            <div className="inline-block mb-3 sm:mb-4">
                                <span className="text-[10px] xs:text-xs sm:text-sm font-bold text-secondary-600 uppercase tracking-widest bg-secondary-600/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                    Our Strengths
                                </span>
                            </div>
                            <h2 className="font-bold text-primary-700 mb-4 sm:mb-5 md:mb-6 leading-tight" style={{fontSize: 'clamp(1.75rem, 1.5rem + 1.5vw, 3.75rem)'}}>
                                Why Choose Us?
                            </h2>
                            <p className="text-body max-w-3xl mx-auto font-light" style={{fontSize: 'clamp(1rem, 0.95rem + 0.25vw, 1.25rem)'}}>
                                We combine technical expertise with business acumen to deliver solutions that drive real results
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                            {ABOUT_BENEFITS.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl bg-linear-to-br from-surface to-background border border-border/50 hover:border-primary-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                                        style={{
                                            animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                                        }}
                                    >
                                        {/* Hover background effect */}
                                        <div className="absolute inset-0 bg-linear-to-br from-primary-600/0 via-primary-600/0 to-primary-600/0 group-hover:from-primary-600/5 group-hover:via-primary-600/3 group-hover:to-primary-700/5 transition-all duration-500 -z-10" />
                                        
                                            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 relative">
                                                <div className="inline-flex p-3 sm:p-3.5 md:p-4 rounded-lg sm:rounded-xl bg-linear-to-br from-primary-600/15 to-primary-700/10 group-hover:from-primary-600/30 group-hover:to-primary-700/20 transition-all duration-500 shadow-lg">
                                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-600 group-hover:text-primary-700 transition-colors duration-300 shrink-0" />
                                            </div>
                                        </div>
                                        
                                            <h3 className="font-bold text-primary-700 mb-2 sm:mb-3 md:mb-4 group-hover:text-secondary-600 transition-colors duration-300" style={{fontSize: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.5rem)'}}>
                                            {benefit.title}
                                        </h3>
                                        
                                            <p className="text-body leading-relaxed font-light group-hover:text-primary-700 transition-colors duration-300" style={{fontSize: 'clamp(0.8125rem, 0.7875rem + 0.125vw, 1rem)'}}>
                                            {benefit.description}
                                        </p>

                                        {/* Decorative line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary-600/0 via-primary-600/50 to-primary-600/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart Section */}
            <section className="relative py-12 sm:py-16 md:py-24 lg:py-40 bg-linear-to-b from-background via-surface to-background overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-secondary-600/5 rounded-full blur-3xl translate-x-1/2" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                            <div className="inline-block mb-3 sm:mb-4">
                                <span className="text-[10px] xs:text-xs sm:text-sm font-bold text-secondary-600 uppercase tracking-widest bg-secondary-600/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                    Our Advantages
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700 leading-tight">
                                What Sets Us Apart
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {ABOUT_FEATURES.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group relative p-5 md:p-6 rounded-xl bg-linear-to-br from-surface to-background border border-border/50 hover:border-secondary-600/50 transition-all duration-400 hover:shadow-lg hover:-translate-y-1 flex items-center gap-4 overflow-hidden"
                                    style={{
                                        animation: `slideInLeft 0.5s ease-out ${index * 0.05}s both`,
                                    }}
                                >
                                    {/* Hover effect background */}
                                    <div className="absolute inset-0 bg-linear-to-r from-secondary-600/0 via-secondary-600/5 to-secondary-600/0 group-hover:from-secondary-600/10 group-hover:via-secondary-600/8 group-hover:to-secondary-600/10 transition-all duration-500 -z-10" />
                                    
                                    <div className="shrink-0">
                                        <div className="inline-flex p-2 rounded-lg bg-secondary-600/15 group-hover:bg-secondary-600/30 transition-all duration-300">
                                            <CheckCircle2 className="w-5 h-5 text-secondary-600 group-hover:text-secondary-700 transition-colors duration-300 shrink-0" />
                                        </div>
                                    </div>
                                    
                                    <span className="font-semibold text-sm md:text-base text-body group-hover:text-primary-700 transition-colors duration-300">
                                        {feature}
                                    </span>

                                    {/* Right accent line */}
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-linear-to-b from-secondary-600/30 via-secondary-600/10 to-transparent scale-y-0 group-hover:scale-y-100 transform origin-top transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="relative py-24 md:py-40 bg-linear-to-br from-surface via-background to-surface overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/8 rounded-full blur-3xl -translate-y-1/2" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-600/8 rounded-full blur-3xl translate-y-1/2" />
                </div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 md:mb-20 text-center">
                            <div className="inline-block mb-4">
                                <span className="text-xs md:text-sm font-bold text-secondary-600 uppercase tracking-widest bg-secondary-600/10 px-4 py-2 rounded-full">
                                    What Drives Us
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700 mb-6 leading-tight">
                                Our Core Values
                            </h2>
                            <p className="text-lg md:text-xl text-body max-w-3xl mx-auto font-light">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {ABOUT_VALUES.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative p-8 md:p-10 lg:p-12 rounded-2xl bg-linear-to-br from-surface to-background border border-border/50 hover:border-primary-600/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                                        style={{
                                            animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`,
                                        }}
                                    >
                                        {/* Background gradient effect */}
                                        <div className="absolute inset-0 bg-linear-to-br from-primary-600/0 via-primary-600/0 to-primary-600/0 group-hover:from-primary-600/8 group-hover:via-primary-600/5 group-hover:to-primary-700/8 transition-all duration-500 -z-10" />

                                        {/* Top accent line */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-600/0 via-primary-600 to-primary-600/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                        
                                        <div className="mb-8 md:mb-10 relative">
                                            <div className="inline-flex p-4 md:p-5 rounded-xl md:rounded-2xl bg-linear-to-br from-primary-700 to-primary-600 group-hover:from-secondary-600 group-hover:to-secondary-500 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                                                <Icon className="w-7 md:w-8 h-7 md:h-8 text-inverse shrink-0" />
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-4 md:mb-5 group-hover:text-secondary-600 transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        
                                        <p className="text-body leading-relaxed text-sm md:text-base lg:text-lg font-light group-hover:text-primary-700 transition-colors duration-300">
                                            {value.description}
                                        </p>

                                        {/* Corner accent */}
                                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-br from-primary-600/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
