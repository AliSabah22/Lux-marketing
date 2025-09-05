"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { tokens } from "@/lib/design-tokens";

interface FooterCTAProps {
  title?: string;
  subtitle?: string;
  newsletterTitle?: string;
  newsletterDescription?: string;
  leadMagnetTitle?: string;
  leadMagnetDescription?: string;
  leadMagnetUrl?: string;
}

export function FooterCTA({
  title = "Ready to transform your brand?",
  subtitle = "Join hundreds of businesses that have accelerated their growth with our strategic approach.",
  newsletterTitle = "Stay ahead of the curve",
  newsletterDescription = "Get exclusive insights, strategies, and case studies delivered to your inbox.",
  leadMagnetTitle = "Free Growth Audit Template",
  leadMagnetDescription = "Get our proven framework for analyzing your brand's growth opportunities.",
  leadMagnetUrl = "/resources/growth-audit-template",
}: FooterCTAProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-foreground to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Section */}
          <div className="text-center mb-16 lg:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
            >
              {title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary-500/25"
              >
                Book Your Discovery Call
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors duration-300"
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>

          {/* Newsletter and Lead Magnet Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10"
            >
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-3">
                  {newsletterTitle}
                </h3>
                <p className="text-white/70 text-lg">
                  {newsletterDescription}
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-3 bg-success-500/20 border border-success-500/30 rounded-lg text-success-500 text-sm"
                >
                  ✓ Successfully subscribed! Check your email for confirmation.
                </motion.div>
              )}

              <p className="text-white/50 text-sm mt-4">
                No spam, ever. Unsubscribe at any time.
              </p>
            </motion.div>

            {/* Lead Magnet */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-premium rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
                    🎁 Free Resource
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-3">
                    {leadMagnetTitle}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {leadMagnetDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Comprehensive brand analysis framework</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Growth opportunity identification</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Actionable next steps</span>
                  </div>
                </div>

                <Link
                  href={leadMagnetUrl}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300"
                >
                  Download Free Template
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
