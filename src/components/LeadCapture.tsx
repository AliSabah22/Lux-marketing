"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tokens } from "@/lib/design-tokens";

interface LeadCaptureProps {
  title?: string;
  subtitle?: string;
  offer?: string;
  className?: string;
  variant?: "inline" | "modal" | "popup";
  onSuccess?: (data: any) => void;
}

export function LeadCapture({
  title = "Get Your Free Marketing Audit",
  subtitle = "Discover exactly what's holding your brand back and how to fix it",
  offer = "Free 30-minute strategy session + custom growth roadmap",
  className = "",
  variant = "inline",
  onSuccess
}: LeadCaptureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    challenge: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your CRM or email service
      console.log("Lead captured:", formData);
      
      setIsSubmitted(true);
      onSuccess?.(formData);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          website: "",
          challenge: ""
        });
        setIsSubmitted(false);
        if (variant === "modal" || variant === "popup") {
          setIsOpen(false);
        }
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const formContent = (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: tokens.motion.motionEasing.smooth }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-foreground/10 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-foreground placeholder-foreground/40"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-foreground/10 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-foreground placeholder-foreground/40"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground/80 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-foreground/10 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-foreground placeholder-foreground/40"
            placeholder="Enter your company name"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-foreground/80 mb-2">
            Website URL
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-foreground/10 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-foreground placeholder-foreground/40"
            placeholder="https://yourwebsite.com"
          />
        </div>
        <div>
          <label htmlFor="challenge" className="block text-sm font-medium text-foreground/80 mb-2">
            Biggest Challenge
          </label>
          <input
            type="text"
            id="challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-foreground/10 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-foreground placeholder-foreground/40"
            placeholder="What's your biggest challenge?"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-gold to-gold/90 text-background font-semibold py-3 px-6 rounded-lg hover:from-gold/90 hover:to-gold/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Get Free Audit"
            )}
          </button>
        </div>
      </div>

      <p className="text-xs text-foreground/60 text-center">
        No spam, ever. We respect your privacy.
      </p>
    </motion.form>
  );

  const successMessage = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
      <p className="text-foreground/70">
        We've received your information. You'll receive your free audit within 24 hours.
      </p>
    </motion.div>
  );

  if (variant === "modal") {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center px-8 py-4 bg-gold text-background rounded-full font-semibold hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {title}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
                          <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-background rounded-2xl max-w-lg w-full max-h-[90vh] shadow-2xl border border-neutral-200/30 mx-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
                              <div className="p-6 flex-shrink-0">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
                  <p className="text-foreground/70">{subtitle}</p>
                </div>

                <div className="bg-gold/10 rounded-lg p-3 mb-4 border border-gold/20">
                  <p className="text-sm text-foreground font-medium">{offer}</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-6">
                {isSubmitted ? successMessage : formContent}
              </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  if (variant === "popup") {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center px-6 py-3 bg-gold text-background rounded-full font-semibold hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Get Free Audit
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-4 right-4 bg-background rounded-2xl p-6 shadow-2xl border border-neutral-200/30 max-w-sm z-50"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-foreground/40 hover:text-foreground/60"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-foreground/70">{subtitle}</p>
              </div>

              {isSubmitted ? successMessage : formContent}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Inline variant
  return (
    <div className={`bg-gradient-to-br from-background to-neutral-50/30 rounded-2xl p-8 border border-neutral-200/30 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-lg text-foreground/70 mb-6">{subtitle}</p>
        
        <div className="bg-gold/10 rounded-lg p-4 backdrop-blur-sm border border-gold/20">
          <p className="text-foreground font-semibold">{offer}</p>
        </div>
      </div>

      {isSubmitted ? successMessage : formContent}
    </div>
  );
}
