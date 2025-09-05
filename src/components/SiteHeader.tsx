"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { tokens } from "@/lib/design-tokens";

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  featured?: boolean;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  {
    label: "Services",
    href: "/services",
    description: "Comprehensive solutions for brand transformation",
    children: [
      {
        label: "Brand Elevation",
        href: "/services#brand-elevation",
        description: "From unknown to unmistakable",
        featured: true,
      },
      {
        label: "Content Systems",
        href: "/services#content-systems",
        description: "Stories that move markets",
        featured: true,
      },
      {
        label: "Digital Experience",
        href: "/services#digital-experience",
        description: "Web that sells on sight",
        featured: true,
      },
      {
        label: "Growth & CRO",
        href: "/services#growth-cro",
        description: "Performance that compounds",
        featured: true,
      },
      {
        label: "Physical Location",
        href: "/services#physical-location",
        description: "Transform your physical presence",
      },
      {
        label: "AI & Automation",
        href: "/services#ai-automation",
        description: "Scale with intelligence",
      },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Real outcomes from real partnerships",
    children: [
      {
        label: "Aurum Luxury",
        href: "/case-studies/aurum",
        description: "+212% revenue growth",
        featured: true,
      },
      {
        label: "Noir Maison",
        href: "/case-studies/noir",
        description: "4.8x ROAS improvement",
        featured: true,
      },
      {
        label: "Verdi Collection",
        href: "/case-studies/verdi",
        description: "+68% lead quality",
        featured: true,
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    description: "Our story and approach",
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Insights and tools for growth",
    children: [
      {
        label: "Blog",
        href: "/blog",
        description: "Latest insights and strategies",
      },
      {
        label: "Templates",
        href: "/templates",
        description: "Free resources for your business",
      },
      {
        label: "Guides",
        href: "/guides",
        description: "Step-by-step frameworks",
      },
    ],
  },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl border-b border-neutral-200/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: tokens.motion.motionEasing.smooth }}
              className="text-2xl lg:text-3xl font-serif font-bold text-foreground"
            >
              LUX MEDIA
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className="text-base font-medium text-foreground/90 hover:text-foreground transition-colors duration-300 py-3 px-2 relative group"
                >
                  {item.label}
                  {item.children && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: tokens.motion.motionEasing.smooth }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[320px] bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-foreground/10 max-w-[calc(100vw-2rem)]"
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-foreground mb-2">
                            {item.label}
                          </h3>
                          <p className="text-base text-foreground/70 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block p-3 rounded-xl transition-all duration-300 group ${
                                child.featured
                                  ? "bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 hover:from-gold/20 hover:to-gold/10 hover:shadow-lg"
                                  : "hover:bg-foreground/5 hover:shadow-md"
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-foreground text-base mb-1 group-hover:text-primary-700 transition-colors">
                                    {child.label}
                                  </h4>
                                  <p className="text-sm text-foreground/70 leading-relaxed">
                                    {child.description}
                                  </p>
                                </div>
                                {child.featured && (
                                  <span className="ml-4 text-xs bg-gold text-background px-3 py-1.5 rounded-full font-medium shadow-sm">
                                    Featured
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>

                        {item.label === "Services" && (
                          <div className="mt-6 pt-6 border-t border-foreground/10">
                            <Link
                              href="/services"
                              className="inline-flex items-center text-base font-semibold text-gold hover:text-gold/80 transition-colors duration-300 group"
                            >
                              View all services 
                              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/contact"
              className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 px-4 py-2"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold bg-gold text-background rounded-full hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gold/20"
            >
              Book Discovery Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-foreground/5 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: tokens.motion.motionEasing.smooth }}
            className="lg:hidden bg-background/95 border-t border-foreground/10 backdrop-blur-xl shadow-lg"
          >
            <div className="container mx-auto px-4 sm:px-6 py-8">
              <nav className="space-y-6">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block text-xl font-semibold text-foreground py-3 border-b border-foreground/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-4 space-y-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block text-base text-foreground/70 hover:text-foreground py-2 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="mt-8 pt-8 border-t border-foreground/10 space-y-4">
                <Link
                  href="/contact"
                  className="block text-xl font-semibold text-foreground py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center px-8 py-4 text-base font-semibold bg-gold text-background rounded-full hover:bg-gold/90 transition-all duration-300 shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Discovery Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
