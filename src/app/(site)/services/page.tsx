"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { images } from "@/lib/images";

interface Service {
  title: string;
  outcome: string;
  details: string;
  img: string;
  icon: string;
  description: string;
  services: string[];
  outcomes: string[];
  process: string[];
  caseStudy?: {
    title: string;
    result: string;
    description: string;
  };
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "Brand Elevation",
      outcome: "From unknown to unmistakable.",
      details: "Positioning · Identity · Narrative",
      img: images.services.brandElevation,
      icon: "/globe.svg",
      description: "Transform your brand from a commodity to a category leader. We craft positioning, identity, and narrative that commands attention and premium pricing.",
      services: [
        "Brand positioning and market analysis",
        "Visual identity and brand guidelines",
        "Brand narrative and messaging framework",
        "Competitive landscape analysis",
        "Brand architecture and naming",
        "Brand launch strategy and execution"
      ],
      outcomes: [
        "Increased brand recognition and recall",
        "Premium pricing power and market positioning",
        "Stronger customer loyalty and advocacy",
        "Differentiated market presence"
      ],
      process: [
        "Market research and competitive analysis",
        "Brand positioning and strategy development",
        "Visual identity and messaging creation",
        "Implementation and launch execution"
      ],
      caseStudy: {
        title: "Aurum Luxury",
        result: "+212% revenue",
        description: "Reframed category story and rebuilt brand identity, resulting in immediate market recognition and premium positioning."
      }
    },
    {
      title: "Content Systems",
      outcome: "Stories that move markets.",
      details: "Cinematic Assets · Iteration · Distribution",
      img: images.services.contentSystems,
      icon: "/file.svg",
      description: "Build scalable content systems that create desire, drive engagement, and compound results across all channels and touchpoints.",
      services: [
        "Content strategy and planning",
        "Photography and videography production",
        "Social media content creation",
        "Email marketing content",
        "Blog and SEO content",
        "Content distribution and optimization"
      ],
      outcomes: [
        "Increased engagement and social proof",
        "Higher conversion rates from content",
        "Scalable content production systems",
        "Improved brand storytelling"
      ],
      process: [
        "Content audit and strategy development",
        "Asset creation and production",
        "Distribution and optimization",
        "Performance tracking and iteration"
      ],
      caseStudy: {
        title: "Noir Maison",
        result: "4.8x ROAS",
        description: "Developed cinematic content system that increased testing velocity 5x and unlocked efficient scale across channels."
      }
    },
    {
      title: "Digital Experience",
      outcome: "Web that sells on sight.",
      details: "UX/UI · Web Design · SEO Dev",
      img: images.services.digitalExperience,
      icon: "/window.svg",
      description: "Create digital experiences that convert visitors into customers from the first impression. We design for clarity, speed, and desire.",
      services: [
        "Website design and development",
        "User experience optimization",
        "Conversion rate optimization",
        "SEO and technical optimization",
        "E-commerce platform development",
        "Mobile app design and development"
      ],
      outcomes: [
        "Improved website conversion rates",
        "Enhanced user experience and engagement",
        "Better search engine visibility",
        "Increased online sales and leads"
      ],
      process: [
        "User research and journey mapping",
        "Design and development",
        "Testing and optimization",
        "Launch and performance monitoring"
      ],
      caseStudy: {
        title: "Verdi Collection",
        result: "+68% lead quality",
        description: "Redesigned digital experience with frictionless paths that elevated perception and removed hesitation."
      }
    },
    {
      title: "Growth & CRO",
      outcome: "Performance that compounds.",
      details: "Signals · Testing · Optimization",
      img: images.services.growth,
      icon: "/vercel.svg",
      description: "Build data-driven growth systems that identify opportunities, test hypotheses, and compound results through continuous optimization.",
      services: [
        "Conversion rate optimization",
        "A/B testing and experimentation",
        "Analytics and performance tracking",
        "Growth strategy and planning",
        "Marketing automation setup",
        "Performance marketing campaigns"
      ],
      outcomes: [
        "Increased conversion rates and revenue",
        "Data-driven decision making",
        "Scalable growth systems",
        "Improved marketing ROI"
      ],
      process: [
        "Performance audit and opportunity identification",
        "Hypothesis development and testing",
        "Implementation and optimization",
        "Results analysis and scaling"
      ],
      caseStudy: {
        title: "Luxury Growth Partners",
        result: "5x testing velocity",
        description: "Implemented data-driven testing framework that accelerated optimization cycles and unlocked new growth channels."
      }
    },
  ];

  const openServiceDetails = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative px-6 pt-28 md:pt-36 pb-12">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <h1 className="font-serif text-5xl md:text-7xl">Outcome-Driven Services</h1>
            <p className="mt-8 text-2xl text-foreground/80 max-w-3xl">
              We frame every engagement around measurable outcomes. Strategy leads. Execution follows. Results compound.
            </p>
          </div>
          <div className="md:col-span-5 relative rounded-lg overflow-hidden">
            <div className="relative aspect-[16/10]">
              <ImageWithFallback
                src={images.caseStudies.aurum}
                alt="Service hero"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="decorative-gradient" />
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group rounded-lg border border-foreground/10 bg-background/60 overflow-hidden cursor-pointer hover:bg-background/80 transition-all duration-300"
              onClick={() => openServiceDetails(s)}
            >
              <div className="relative aspect-[16/9]">
                <ImageWithFallback 
                  src={s.img} 
                  alt={s.title} 
                  fill 
                  sizes="(min-width: 768px) 45vw, 100vw" 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-block h-5 w-5">
                      <Image src={s.icon} alt="" width={20} height={20} className="object-contain opacity-80" />
                    </span>
                    <h2 className="font-serif text-3xl">{s.title}</h2>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 group-hover:border-foreground/40 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-gold"
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
                <p className="mt-3 text-base uppercase tracking-wider text-neutral">{s.details}</p>
                <p className="mt-6 text-xl text-foreground/90">{s.outcome}</p>
                <div className="mt-6 pt-4 border-t border-foreground/5">
                  <p className="text-sm text-foreground/60">Click to explore this service in detail</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
                  <div className="flex items-center gap-4">
                    <span className="inline-block h-8 w-8">
                      <Image src={selectedService.icon} alt="" width={32} height={32} className="object-contain opacity-80" />
                    </span>
                    <div>
                      <h2 className="font-serif text-5xl">{selectedService.title}</h2>
                      <p className="text-foreground/70 mt-3 text-xl">{selectedService.description}</p>
                    </div>
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
                  {/* Services List */}
                  <div>
                    <h3 className="font-serif text-2xl mb-6 text-gold">Services Included</h3>
                    <ul className="space-y-4">
                      {selectedService.services.map((service, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/80">
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-3"></span>
                          <span className="text-base leading-relaxed">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Outcomes */}
                  <div>
                    <h3 className="font-serif text-2xl mb-6 text-gold">Expected Outcomes</h3>
                    <ul className="space-y-4">
                      {selectedService.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/80">
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-3"></span>
                          <span className="text-base leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Our Process */}
                  <div>
                    <h3 className="font-serif text-xl mb-4 text-gold">Our Process</h3>
                    <ul className="space-y-3">
                      {selectedService.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/80">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center font-medium">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Case Study */}
                {selectedService.caseStudy && (
                  <div className="mb-8 p-6 rounded-lg border border-foreground/10 bg-background/40">
                    <h3 className="font-serif text-xl mb-4 text-gold">Case Study: {selectedService.caseStudy.title}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm text-foreground/60 uppercase tracking-wider">Result</p>
                        <p className="font-serif text-2xl text-gold mt-1">{selectedService.caseStudy.result}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-foreground/60 uppercase tracking-wider">What We Delivered</p>
                        <p className="text-foreground/80 mt-1">{selectedService.caseStudy.description}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-foreground/10 text-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-gold text-background px-12 py-6 text-xl font-medium hover:bg-gold/90 transition-all duration-300 hover:scale-105"
                  >
                    Get Started with {selectedService.title}
                    <span className="inline-block">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="font-serif text-3xl md:text-4xl">Let's architect an engagement around outcomes</h3>
          <p className="mt-4 text-foreground/80">Book a discovery call to identify the fastest path to impact.</p>
          <div className="mt-8">
            <Link href="/contact" className="rounded-full border border-foreground/20 px-6 py-3 text-sm hover-underline">Book Your Discovery Call</Link>
          </div>
        </div>
      </section>
    </main>
  );
}


