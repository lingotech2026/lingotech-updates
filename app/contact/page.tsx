"use client";

import { useState, FormEvent, createElement } from "react";
import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHeroSection from "../components/PageHeroSection";
import FormField from "../components/FormField";
import { Send, User, Mail, MessageSquare, FileText } from "lucide-react";
import { CONTACT_INFO } from "../constants/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_ANIMATION_SCRIPT_SRC =
  "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js";
const CONTACT_HERO_LOTTIE_SRC =
  "https://lottie.host/a86780b7-095a-4d23-834a-c6781a623879/GzRxwblMs0.lottie";
type FormErrors = Record<string, string>;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!EMAIL_PATTERN.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSubmitStatus("error");
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Script
        src={CONTACT_ANIMATION_SCRIPT_SRC}
        type="module"
        strategy="afterInteractive"
      />
      <Navbar />
      <PageHeroSection
        badge="Get in Touch"
        title="Contact Us"
        description="Have a question or ready to start your next project? We're here to help and would love to hear from you."
        backgroundContent={
          <div className="absolute inset-0">
            {/* Ambient blobs */}
            <div className="absolute -top-16 left-[-6%] h-72 w-72 rounded-full bg-primary-100/25 blur-3xl sm:h-96 sm:w-96" />
            <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl sm:h-112 sm:w-md" />
            {/* Lottie animation — right side background */}
            <div className="absolute right-[2%] top-1/2 -translate-y-1/2 h-[90%] aspect-square opacity-75">
              <div className="absolute inset-0 rounded-full bg-secondary-400/15 blur-3xl" />
              {createElement("dotlottie-wc", {
                src: CONTACT_HERO_LOTTIE_SRC,
                autoplay: true,
                loop: true,
                style: { width: "100%", height: "100%" },
              })}
            </div>
            {/* Gradient overlay — fades text area, lets animation breathe on the right */}
            <div className="absolute inset-0 bg-linear-to-r from-primary-900/85 via-primary-800/60 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-b from-primary-900/20 via-transparent to-primary-900/30" />
          </div>
        }
      />

      {/* Contact Content Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              
              {/* Contact Form */}
              <div>
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <h2 className="font-bold text-primary-600 mb-3 sm:mb-4" style={{fontSize: 'clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem)'}}>
                    Send us a Message
                  </h2>
                    <p className="text-body" style={{fontSize: 'clamp(0.875rem, 0.825rem + 0.375vw, 1.125rem)'}}>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  <FormField
                    label="Your Name"
                    name="name"
                    icon={User}
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Full Name"
                    required
                  />

                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    icon={Mail}
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="your.email@example.com"
                    required
                  />

                  <FormField
                    label="Subject"
                    name="subject"
                    icon={FileText}
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    placeholder="Project Inquiry"
                    required
                  />

                  <FormField
                    label="Message"
                    name="message"
                    icon={MessageSquare}
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell us about your project..."
                    isTextarea
                    rows={6}
                    required
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-inverse py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-inverse/30 border-t-inverse rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-success-50 border border-success-100 rounded-lg" role="alert">
                      <p className="text-success-700 font-medium">
                        Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === "error" && Object.keys(errors).length > 0 && (
                    <div className="p-4 bg-error-50 border border-error-100 rounded-lg" role="alert">
                      <p className="text-error-700 font-medium">
                        ✗ Please correct the errors above and try again.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary-600 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-lg text-body">
                    Reach out to us directly through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {CONTACT_INFO.map((info) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-start gap-4 p-6 bg-background rounded-xl hover:bg-primary-100 transition-colors duration-200">
                        <div className="p-3 bg-primary-600/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-body uppercase tracking-wide mb-1">
                            {info.label}
                          </h3>
                          <p className="text-lg font-medium text-primary-600">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a
                        key={info.label}
                        href={info.href}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={info.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
