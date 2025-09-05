"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  title: string;
  items: string[];
  icon: string;
  description: string;
  detailedDescription: string;
  outcomes: string[];
  process: string[];
}

interface ServicesAccordionProps {
  className?: string;
}

const services: Service[] = [
  {
    title: "Physical Location Services",
    icon: "🏪",
    description: "Transform your physical presence into a powerful marketing asset",
    detailedDescription: "Elevate your brick-and-mortar presence with comprehensive physical marketing solutions that create memorable customer experiences and drive foot traffic.",
    items: [
      "In-store photography & videography for marketing campaigns",
      "Printed promotional materials (posters, signage, menus, flyers)",
      "Branded digital screen content & installation",
      "Local influencer collaborations & event marketing",
      "AI-powered customer feedback and review management",
      "Mystery shopper & customer experience reporting"
    ],
    outcomes: [
      "Increased foot traffic and dwell time",
      "Enhanced brand perception in local market",
      "Improved customer experience scores",
      "Higher conversion rates from walk-ins"
    ],
    process: [
      "Location audit and opportunity identification",
      "Custom content creation and installation",
      "Local partnership development",
      "Performance tracking and optimization"
    ]
  },
  {
    title: "Online & Digital Services",
    icon: "💻",
    description: "Build a compelling digital presence that converts visitors into customers",
    detailedDescription: "Create a powerful digital ecosystem that attracts, engages, and converts your target audience across all online touchpoints.",
    items: [
      "Website design & optimization",
      "Social media content creation & management",
      "Targeted ad campaigns (Google, Meta, TikTok)",
      "Email marketing setup & automation",
      "Brand identity & graphic design",
      "SEO optimization & blog content creation",
      "Video production for social media & ads"
    ],
    outcomes: [
      "Increased online visibility and traffic",
      "Higher conversion rates and lead quality",
      "Improved brand recognition and engagement",
      "Scalable digital marketing systems"
    ],
    process: [
      "Digital strategy and platform selection",
      "Content creation and optimization",
      "Campaign setup and management",
      "Analytics and continuous improvement"
    ]
  },
  {
    title: "AI & Automation Services",
    icon: "🤖",
    description: "Leverage AI to scale your operations and enhance customer experience",
    detailedDescription: "Implement intelligent automation solutions that streamline operations, reduce costs, and provide personalized customer experiences at scale.",
    items: [
      "AI chatbots for customer support",
      "AI-powered sales funnels and lead nurturing",
      "Data-driven campaign performance reporting",
      "Virtual assistant setups for admin & scheduling",
      "AI content generation for blogs, product descriptions, and social media"
    ],
    outcomes: [
      "24/7 customer support availability",
      "Reduced operational costs and manual work",
      "Improved lead nurturing and conversion",
      "Scalable content creation and management"
    ],
    process: [
      "AI strategy and tool selection",
      "System integration and training",
      "Performance monitoring and optimization",
      "Continuous learning and improvement"
    ]
  },
  {
    title: "Premium Add-On Services",
    icon: "⭐",
    description: "Elevate your brand with premium services that set you apart",
    detailedDescription: "Access exclusive premium services that enhance your brand positioning and create competitive advantages in your market.",
    items: [
      "Reputation management & online review strategy",
      "Virtual event planning & webinar hosting",
      "Local business partnerships & sponsorship campaigns",
      "Loyalty programs & digital membership cards"
    ],
    outcomes: [
      "Enhanced brand reputation and trust",
      "Increased customer loyalty and retention",
      "Stronger market positioning",
      "Higher customer lifetime value"
    ],
    process: [
      "Premium service strategy development",
      "Implementation and execution",
      "Performance monitoring and optimization",
      "Continuous enhancement and scaling"
    ]
  },
  {
    title: "Additional Value-Added Ideas",
    icon: "💡",
    description: "Innovative solutions that create new opportunities for growth",
    detailedDescription: "Explore cutting-edge value-added services that create new revenue streams and competitive advantages for your business.",
    items: [
      "Influencer partnerships",
      "Customer support automation",
      "Analytics and performance reporting",
      "Virtual event management",
      "Content creation packages (blogs, SEO, short-form video)"
    ],
    outcomes: [
      "New revenue streams and opportunities",
      "Improved customer satisfaction",
      "Enhanced market reach and visibility",
      "Competitive differentiation"
    ],
    process: [
      "Opportunity identification and strategy",
      "Implementation and testing",
      "Performance optimization",
      "Scaling and expansion"
    ]
  }
];

export function ServicesAccordion({ className = "" }: ServicesAccordionProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card as hero

  const openServiceDetails = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  const nextCard = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next >= services.length - 1 ? 1 : next; // Keep within bounds for 3-card view
    });
  };

  const prevCard = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      return next <= 0 ? services.length - 2 : next; // Keep within bounds for 3-card view
    });
  };

  // Get the 3 cards to display (left, center, right)
  const getVisibleCards = () => {
    const leftIndex = currentIndex - 1;
    const centerIndex = currentIndex;
    const rightIndex = currentIndex + 1;
    
    return [
      services[leftIndex < 0 ? services.length - 1 : leftIndex],
      services[centerIndex],
      services[rightIndex >= services.length ? 0 : rightIndex]
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <>
      <section className={`relative py-20 px-6 ${className}`}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Comprehensive Service Portfolio</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-xl">
              Strategy-led services that transform every touchpoint of your business into a growth opportunity.
            </p>
          </motion.div>

          {/* Horizontal Scrolling Cards */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevCard}
              disabled={currentIndex <= 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-background/90 border border-foreground/20 flex items-center justify-center hover:bg-background hover:border-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextCard}
              disabled={currentIndex >= services.length - 2}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-background/90 border border-foreground/20 flex items-center justify-center hover:bg-background hover:border-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div className="flex justify-center items-center gap-8 px-24">
              {visibleCards.map((service, index) => {
                const isHero = index === 1; // Center card is always hero
                const isLeft = index === 0;
                const isRight = index === 2;
                
                return (
                  <motion.div
                    key={`${service.title}-${currentIndex}-${index}`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: isHero ? 1 : 0.7, 
                      scale: isHero ? 1 : 0.85,
                      y: isHero ? 0 : 10
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.1
                    }}
                    className={`group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 hover:bg-background/80 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl ${
                      isHero ? 'w-96 h-96 ring-2 ring-gold/20' : 'w-72 h-72'
                    }`}
                    onClick={() => openServiceDetails(service)}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/5 ${
                      isHero ? 'opacity-100' : 'opacity-50'
                    }`} />
                    
                    <div className={`relative p-8 h-full flex flex-col ${isHero ? 'justify-between' : 'justify-center'}`}>
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <span className={`${isHero ? 'text-5xl' : 'text-4xl'}`}>{service.icon}</span>
                          <h3 className={`font-serif ${isHero ? 'text-3xl' : 'text-xl'} leading-tight`}>
                            {service.title}
                          </h3>
                        </div>
                        
                        <p className={`text-foreground/70 ${isHero ? 'text-lg leading-relaxed' : 'text-sm leading-relaxed'}`}>
                          {service.description}
                        </p>
                      </div>

                      {isHero && (
                        <div className="space-y-4 mt-8">
                          {service.items.slice(0, 3).map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3 text-foreground/80">
                              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-3"></span>
                              <span className="text-base leading-relaxed">{item}</span>
                            </div>
                          ))}
                          {service.items.length > 3 && (
                            <p className="text-base text-gold mt-4 font-medium">
                              +{service.items.length - 3} more services
                            </p>
                          )}
                        </div>
                      )}

                      <div className={`pt-4 border-t border-foreground/5 ${isHero ? 'mt-8' : 'mt-4'}`}>
                        <p className={`text-foreground/60 ${isHero ? 'text-sm' : 'text-xs'}`}>
                          Click to learn more
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: services.length - 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i + 1)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === i + 1 
                      ? 'bg-gold scale-125' 
                      : 'bg-foreground/20 hover:bg-foreground/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-center mt-20"
          >
            <p className="text-foreground/70 text-lg mb-8">
              Ready to explore how these services can transform your business?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gold text-background px-12 py-6 text-xl font-medium hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Discovery Call
              <span className="inline-block">→</span>
            </a>
          </motion.div>
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
              className="bg-background rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{selectedService.icon}</span>
                    <div>
                      <h2 className="font-serif text-5xl">{selectedService.title}</h2>
                      <p className="text-foreground/70 mt-3 text-xl">{selectedService.detailedDescription}</p>
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
                      {selectedService.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/80">
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-3"></span>
                          <span className="text-base leading-relaxed">{item}</span>
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
                    <h3 className="font-serif text-2xl mb-6 text-gold">Our Process</h3>
                    <ul className="space-y-4">
                      {selectedService.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/80">
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-3"></span>
                          <span className="text-base leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-8 border-t border-foreground/10">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-gold text-background px-10 py-4 text-lg font-medium hover:bg-gold/90 transition-all duration-300 hover:scale-105"
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
    </>
  );
}
