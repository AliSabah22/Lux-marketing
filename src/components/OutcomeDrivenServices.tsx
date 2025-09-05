"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";

interface Service {
  title: string;
  copy: string;
  img: string;
  description: string;
  outcomes: string[];
  approach: string[];
  caseStudy: {
    client: string;
    result: string;
    timeframe: string;
    description: string;
  };
}

interface OutcomeDrivenServicesProps {
  className?: string;
}

const services: Service[] = [
  {
    title: "Brand Elevation",
    copy: "Positioning, identity, and narrative that commands price and preference.",
    img: "https://images.unsplash.com/photo-1535697461900-0f43f33d7dd2?q=80&w=1400&auto=format&fit=crop",
    description: "Transform your brand from a commodity to a category leader. We craft positioning, identity, and narrative that commands attention and premium pricing.",
    outcomes: [
      "Premium pricing power and market positioning",
      "Increased brand recognition and recall",
      "Stronger customer loyalty and advocacy",
      "Differentiated market presence"
    ],
    approach: [
      "Market research and competitive analysis",
      "Brand positioning and strategy development",
      "Visual identity and messaging creation",
      "Implementation and launch execution"
    ],
    caseStudy: {
      client: "Aurum Luxury",
      result: "+212% revenue",
      timeframe: "6 months",
      description: "Reframed category story and rebuilt brand identity, resulting in immediate market recognition and premium positioning."
    }
  },
  {
    title: "Content Systems",
    copy: "Cinematic assets and iteration velocity that move markets.",
    img: "https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=1400&auto=format&fit=crop",
    description: "Build scalable content systems that create desire, drive engagement, and compound results across all channels and touchpoints.",
    outcomes: [
      "Increased engagement and social proof",
      "Higher conversion rates from content",
      "Scalable content production systems",
      "Improved brand storytelling"
    ],
    approach: [
      "Content audit and strategy development",
      "Asset creation and production",
      "Distribution and optimization",
      "Performance tracking and iteration"
    ],
    caseStudy: {
      client: "Noir Maison",
      result: "4.8x ROAS",
      timeframe: "3 months",
      description: "Developed cinematic content system that increased testing velocity 5x and unlocked efficient scale across channels."
    }
  },
  {
    title: "Digital Experience",
    copy: "Web that sells on sight—clarity, speed, and desire in every click.",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop",
    description: "Create digital experiences that convert visitors into customers from the first impression. We design for clarity, speed, and desire.",
    outcomes: [
      "Improved website conversion rates",
      "Enhanced user experience and engagement",
      "Better search engine visibility",
      "Increased online sales and leads"
    ],
    approach: [
      "User research and journey mapping",
      "Design and development",
      "Testing and optimization",
      "Launch and performance monitoring"
    ],
    caseStudy: {
      client: "Verdi Collection",
      result: "+68% lead quality",
      timeframe: "4 months",
      description: "Redesigned digital experience with frictionless paths that elevated perception and removed hesitation."
    }
  },
  {
    title: "Growth & CRO",
    copy: "Signals, testing, and optimization that compound performance.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    description: "Build data-driven growth systems that identify opportunities, test hypotheses, and compound results through continuous optimization.",
    outcomes: [
      "Increased conversion rates and revenue",
      "Data-driven decision making",
      "Scalable growth systems",
      "Improved marketing ROI"
    ],
    approach: [
      "Performance audit and opportunity identification",
      "Hypothesis development and testing",
      "Implementation and optimization",
      "Results analysis and scaling"
    ],
    caseStudy: {
      client: "Luxury Growth Partners",
      result: "5x testing velocity",
      timeframe: "2 months",
      description: "Implemented data-driven testing framework that accelerated optimization cycles and unlocked new growth channels."
    }
  }
];

export function OutcomeDrivenServices({ className = "" }: OutcomeDrivenServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openServiceDetails = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section className={`relative py-20 px-6 ${className}`}>
        <div className="mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-6xl"
          >
            Outcome-Driven Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6 text-xl text-foreground/80 max-w-3xl"
          >
            Strategy → Creative → Digital Experience → Optimization. Every engagement is architected around measurable outcomes.
          </motion.p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden rounded-lg border border-foreground/10 bg-background/60 cursor-pointer hover:bg-background/80 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                onClick={() => openServiceDetails(service)}
              >
                <div className="relative aspect-[16/10]">
                  <ImageWithFallback 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    sizes="(min-width: 768px) 45vw, 100vw" 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-3xl">{service.title}</h3>
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-foreground/20 group-hover:border-foreground/40 transition-colors duration-200">
                      <svg
                        className="w-4 h-4 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-4 text-xl text-foreground/80">{service.copy}</p>
                  <div className="mt-6 pt-4 border-t border-foreground/5">
                    <p className="text-sm text-foreground/60">Click to see outcomes and case studies</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="decorative-gradient" />
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeServiceDetails}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="font-serif text-4xl">{selectedService.title}</h2>
                    <p className="text-foreground/70 mt-2 text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={closeServiceDetails}
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-foreground/40 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  {/* Expected Outcomes */}
                  <div>
                    <h3 className="font-serif text-xl mb-4 text-gold">Expected Outcomes</h3>
                    <ul className="space-y-3">
                      {selectedService.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/80">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-2.5"></span>
                          <span className="text-sm leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Our Approach */}
                  <div>
                    <h3 className="font-serif text-xl mb-4 text-gold">Our Approach</h3>
                    <ul className="space-y-3">
                      {selectedService.approach.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/80">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center font-medium">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study */}
                  <div>
                    <h3 className="font-serif text-xl mb-4 text-gold">Case Study</h3>
                    <div className="p-4 rounded-lg border border-foreground/10 bg-background/40">
                      <div className="mb-3">
                        <p className="text-sm text-foreground/60 uppercase tracking-wider">Client</p>
                        <p className="font-serif text-lg">{selectedService.caseStudy.client}</p>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-foreground/60 uppercase tracking-wider">Result</p>
                        <p className="font-serif text-2xl text-gold">{selectedService.caseStudy.result}</p>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-foreground/60 uppercase tracking-wider">Timeframe</p>
                        <p className="text-sm">{selectedService.caseStudy.timeframe}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 uppercase tracking-wider">What We Delivered</p>
                        <p className="text-sm text-foreground/80 mt-1">{selectedService.caseStudy.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-foreground/10 text-center">
                  <Link
                    href="/services"
                    className="hover-underline inline-flex items-center gap-3 rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-wide bg-background/60 hover:bg-background/80 transition-all duration-300"
                  >
                    Explore {selectedService.title} in Detail
                    <span className="inline-block">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
