"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { tokens } from "@/lib/design-tokens";

interface HeroShowcaseProps {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  videoUrl?: string;
  stats?: Array<{
    value: string;
    label: string;
    suffix?: string;
  }>;
}

export function HeroShowcase({
  headline = "We Don't Sell Services. We Sell Outcomes.",
  subheadline = "Strategy-led creative and digital experiences that command attention and compound results.",
  primaryCTA = "Book Your Discovery Call",
  secondaryCTA = "See Results",
  videoUrl = "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
  stats = [
    { value: "212", label: "Revenue Growth", suffix: "%" },
    { value: "4.8", label: "ROAS", suffix: "x" },
    { value: "68", label: "Lead Quality", suffix: "%" },
  ],
}: HeroShowcaseProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-primary-900/40"
        />
        {videoUrl && (
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 0.3 : 0 }}
            transition={{ duration: 1.5, ease: tokens.motion.motionEasing.smooth }}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </motion.video>
        )}
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
            Luxury Growth Partner
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ opacity }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tight mb-8"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ opacity }}
            className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ opacity }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary-500/25"
            >
              {primaryCTA}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-xl"
              >
                →
              </motion.span>
            </Link>
            
            <Link
              href="#results"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors duration-300"
            >
              {secondaryCTA}
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ opacity }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-primary-400">{stat.suffix}</span>
                </div>
                <div className="text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
