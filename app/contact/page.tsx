"use client";

import { useState, FormEvent } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHeroSection from "../components/PageHeroSection";
import { Send, User, Mail, MessageSquare, FileText, Phone, MapPin } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type FormErrors = Record<string, string>;

const CONTACT_DETAILS = [
  { icon: Phone, label: "Phone", value: "+977 9748263080", href: "tel:+9779748263080" },
  { icon: Mail, label: "Email", value: "solutionslingotech@gmail.com", href: "mailto:solutionslingotech@gmail.com" },
  { icon: MapPin, label: "Location", value: "Lalitpur, Kathmandu, Nepal", href: null },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: '#F8FAFC',
    border: '1px solid #E2E8F0',
    color: '#0F172A',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    color: '#475569',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    marginBottom: '0.5rem',
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <PageHeroSection
        badge="Get in Touch"
        title="Contact Us"
        description="Have a question or ready to start your next project? We're here to help and would love to hear from you."
      />

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/85">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Contact Form */}
            <ScrollReveal animation="up">
              <div>
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                    SEND A MESSAGE
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Let&apos;s Talk About Your <span style={{ color: 'var(--green-accent)' }}>Project</span>
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>
                      <User className="inline w-3 h-3 mr-1.5" />Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      style={inputStyle}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--green-accent)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = errors.name ? '#ef4444' : '#E2E8F0'}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>
                      <Mail className="inline w-3 h-3 mr-1.5" />Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      style={inputStyle}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--green-accent)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = errors.email ? '#ef4444' : '#E2E8F0'}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={labelStyle}>
                      <FileText className="inline w-3 h-3 mr-1.5" />Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      style={inputStyle}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--green-accent)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = errors.subject ? '#ef4444' : '#E2E8F0'}
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>
                      <MessageSquare className="inline w-3 h-3 mr-1.5" />Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--green-accent)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = errors.message ? '#ef4444' : '#E2E8F0'}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm"
                    style={{ backgroundColor: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="p-4 border border-green-200 bg-green-50 text-center mt-4">
                      <p className="text-green-800 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Message Sent Successfully
                      </p>
                    </div>
                  )}
                  {submitStatus === "error" && Object.keys(errors).length > 0 && (
                    <div className="p-4 border border-red-200 bg-red-50 text-center mt-4">
                      <p className="text-red-800 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Please correct the errors
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal animation="up" delay={150}>
              <div>
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'var(--green-accent)', fontFamily: "'Poppins', sans-serif" }}>
                    CONTACT DETAILS
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Reach Us <span style={{ color: 'var(--green-accent)' }}>Directly</span>
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Connect with our team through the following channels.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  {CONTACT_DETAILS.map((info) => {
                    const Icon = info.icon;
                    const inner = (
                      <div className="flex items-center gap-4 p-5 bg-[#F8FAFC] border border-slate-200/60 transition-all duration-300 hover:border-[var(--green-accent)] shadow-[0_2px_8px_rgba(15,23,42,0.01)]">
                        <div className="w-10 h-10 flex items-center justify-center border border-slate-200 bg-white shrink-0 shadow-sm" style={{ backgroundColor: 'var(--green-bg-subtle)' }}>
                          <Icon className="w-4 h-4" style={{ color: 'var(--green-accent)' }} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {info.label}
                          </p>
                          <p className="text-slate-700 text-sm font-medium">{info.value}</p>
                        </div>
                      </div>
                    );
                    return info.href ? (
                      <a key={info.label} href={info.href} className="block">{inner}</a>
                    ) : (
                      <div key={info.label}>{inner}</div>
                    );
                  })}
                </div>

                {/* Business hours */}
                <div className="p-6 bg-[#F8FAFC] border border-slate-200/60 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 uppercase mb-4 tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                      <span className="text-slate-500 text-xs tracking-wider uppercase font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Monday – Friday</span>
                      <span className="text-slate-700 text-sm">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                      <span className="text-slate-500 text-xs tracking-wider uppercase font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Saturday</span>
                      <span className="text-slate-700 text-sm">10:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs tracking-wider uppercase font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Sunday</span>
                      <span className="text-slate-400 text-sm">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    <span className="flex items-center h-4">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full opacity-75 rounded-full" style={{ background: 'var(--green-accent)' }} />
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--green-accent)' }} />
                      </span>
                    </span>
                    <span className="text-xs text-slate-700 uppercase tracking-widest font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Accepting New Projects
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
