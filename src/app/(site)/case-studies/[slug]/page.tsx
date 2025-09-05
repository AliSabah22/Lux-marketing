"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { images } from "@/lib/images";
import { use } from "react";

interface CaseStudyData {
  title: string;
  subtitle: string;
  metrics: string;
  challenge: string;
  process: string[];
  transformation: string;
  results: string[];
  timeline: string;
  industry: string;
  services: string[];
  charts: {
    revenue: { data: number[]; labels: string[] };
    conversion: { data: number[]; labels: string[] };
    traffic: { data: number[]; labels: string[] };
  };
  kpis: {
    [key: string]: { value: string; change: string; timeframe: string };
  };
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
}

const CASES: Record<string, CaseStudyData> = {
  aurum: {
    title: "Aurum",
    subtitle: "Luxury DTC Brand Transformation",
    metrics: "+212% DTC revenue in 90 days",
    challenge: "Aurum was a premium jewelry brand struggling with plateaued growth, low brand recognition, and inconsistent conversion rates. Despite high-quality products, they couldn't command premium pricing or scale their customer base effectively.",
    process: [
      "Brand positioning audit and competitive analysis",
      "Premium visual identity and messaging framework",
      "Website redesign with conversion optimization",
      "Content strategy and social media transformation",
      "Paid advertising optimization and scaling"
    ],
    transformation: "Transformed from a commodity jewelry brand to a premium lifestyle brand that commands 3x higher pricing and generates consistent organic growth through brand authority and customer advocacy.",
    results: [
      "Revenue increased by 212% in 90 days",
      "Average order value grew by 89%",
      "Conversion rate improved by 156%",
      "Customer acquisition cost reduced by 45%",
      "Brand recognition increased by 340%"
    ],
    timeline: "6 months",
    industry: "Luxury Jewelry & Accessories",
    services: ["Brand Elevation", "Digital Experience", "Growth & CRO", "Content Systems"],
    charts: {
      revenue: {
        data: [100, 145, 189, 234, 278, 312],
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]
      },
      conversion: {
        data: [2.1, 2.8, 3.4, 4.1, 4.8, 5.4],
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]
      },
      traffic: {
        data: [100, 156, 234, 312, 445, 567],
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]
      }
    },
    kpis: {
      revenue: { value: "+212%", change: "vs. baseline", timeframe: "6 months" },
      conversion: { value: "+156%", change: "improvement", timeframe: "6 months" },
      aov: { value: "+89%", change: "increase", timeframe: "6 months" },
      cac: { value: "-45%", change: "reduction", timeframe: "6 months" },
      brandRecognition: { value: "+340%", change: "increase", timeframe: "6 months" },
      customerLifetime: { value: "+178%", change: "increase", timeframe: "6 months" }
    },
    testimonials: [
      {
        quote: "The transformation was incredible. We went from struggling to sell $200 pieces to commanding $800+ for the same quality. The brand positioning work was game-changing.",
        author: "Sarah Chen",
        role: "Founder & CEO, Aurum"
      }
    ]
  },
  noir: {
    title: "Noir Maison",
    subtitle: "Premium Fashion Brand Scaling",
    metrics: "4.8x ROAS across paid social",
    challenge: "Noir Maison had excellent products but struggled with creative performance, low ROAS, and inability to scale their paid advertising effectively. Their content wasn't converting and they were burning through ad spend.",
    process: [
      "Creative performance audit and content strategy",
      "Cinematic content system development",
      "A/B testing framework implementation",
      "Audience targeting optimization",
      "Cross-platform campaign scaling"
    ],
    transformation: "Built a scalable content system that increased testing velocity 5x and unlocked efficient scale across all channels, resulting in consistent 4.8x ROAS and sustainable growth.",
    results: [
      "ROAS improved from 1.2x to 4.8x",
      "Cost per acquisition reduced by 67%",
      "Ad spend scaled by 340%",
      "Testing velocity increased 5x",
      "Customer acquisition cost dropped by 58%"
    ],
    timeline: "3 months",
    industry: "Premium Fashion & Apparel",
    services: ["Content Systems", "Growth & CRO", "Digital Experience"],
    charts: {
      revenue: {
        data: [100, 234, 445, 678, 890, 1200],
        labels: ["Week 1", "Week 4", "Week 8", "Week 10", "Week 12", "Week 14"]
      },
      conversion: {
        data: [1.2, 2.1, 2.8, 3.4, 4.1, 4.8],
        labels: ["Week 1", "Week 4", "Week 8", "Week 10", "Week 12", "Week 14"]
      },
      traffic: {
        data: [100, 189, 312, 445, 567, 734],
        labels: ["Week 1", "Week 4", "Week 8", "Week 10", "Week 12", "Week 14"]
      }
    },
    kpis: {
      roas: { value: "4.8x", change: "vs. 1.2x baseline", timeframe: "3 months" },
      cpa: { value: "-67%", change: "reduction", timeframe: "3 months" },
      scale: { value: "+340%", change: "ad spend increase", timeframe: "3 months" },
      testing: { value: "5x", change: "velocity increase", timeframe: "3 months" },
      conversion: { value: "+234%", change: "improvement", timeframe: "3 months" },
      revenue: { value: "+1100%", change: "increase", timeframe: "3 months" }
    },
    testimonials: [
      {
        quote: "The content system they built for us is incredible. We went from struggling to get 1.2x ROAS to consistently hitting 4.8x. The testing framework alone has paid for itself 10x over.",
        author: "Marcus Rodriguez",
        role: "VP Growth, Noir Maison"
      }
    ]
  },
  verdi: {
    title: "Verdi",
    subtitle: "B2B SaaS Lead Generation",
    metrics: "+68% lead quality QoQ",
    challenge: "Verdi was generating high volumes of leads but struggling with lead quality and conversion rates. Their website wasn't effectively qualifying prospects, leading to wasted sales resources and poor conversion rates.",
    process: [
      "Website UX audit and conversion analysis",
      "Lead qualification system implementation",
      "Content strategy and SEO optimization",
      "Sales funnel redesign",
      "Marketing automation setup"
    ],
    transformation: "Redesigned the entire customer journey to attract and qualify high-intent prospects, resulting in significantly improved lead quality and sales team efficiency.",
    results: [
      "Lead quality improved by 68%",
      "Conversion rate increased by 142%",
      "Cost per qualified lead reduced by 45%",
      "Sales cycle shortened by 23%",
      "Customer acquisition cost dropped by 34%"
    ],
    timeline: "4 months",
    industry: "B2B SaaS & Technology",
    services: ["Digital Experience", "Growth & CRO", "Content Systems"],
    charts: {
      revenue: {
        data: [100, 134, 178, 234, 289, 345],
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]
      },
      conversion: {
        data: [45, 52, 58, 63, 68, 72],
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]
      },
      traffic: {
        data: [100, 145, 189, 234, 278, 312],
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]
      }
    },
    kpis: {
      leadQuality: { value: "+68%", change: "improvement", timeframe: "4 months" },
      conversion: { value: "+142%", change: "increase", timeframe: "4 months" },
      costPerLead: { value: "-45%", change: "reduction", timeframe: "4 months" },
      salesCycle: { value: "-23%", change: "shortening", timeframe: "4 months" },
      cac: { value: "-34%", change: "reduction", timeframe: "4 months" },
      revenue: { value: "+245%", change: "increase", timeframe: "4 months" }
    },
    testimonials: [
      {
        quote: "The lead quality improvement was remarkable. Our sales team went from spending 80% of their time on unqualified leads to closing deals with prospects who were ready to buy.",
        author: "Jennifer Park",
        role: "Head of Sales, Verdi"
      }
    ]
  }
};

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const item = CASES[slug];
  if (!item) return notFound();

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <main className="px-6 py-20 mx-auto max-w-6xl">
      {/* Hero Section */}
      <motion.div {...fadeUp} className="relative rounded-lg overflow-hidden mb-12">
        <div className="relative aspect-[16/9]">
          <ImageWithFallback
            src={slug === "noir" ? images.caseStudies.noir : slug === "verdi" ? images.caseStudies.verdi : images.caseStudies.aurum}
            alt={item.title}
            fill
            sizes="(min-width: 768px) 80vw, 100vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Header */}
      <motion.div {...fadeUp} className="mb-16">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="font-serif text-4xl md:text-6xl mb-2">{item.title}</h1>
            <p className="text-xl text-foreground/70 mb-4">{item.subtitle}</p>
            <p className="text-gold text-lg font-medium">{item.metrics}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-foreground/60 uppercase tracking-wider">Industry</p>
            <p className="font-medium">{item.industry}</p>
            <p className="text-sm text-foreground/60 uppercase tracking-wider mt-4">Timeline</p>
            <p className="font-medium">{item.timeline}</p>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div {...fadeUp} className="mb-16">
        <h2 className="font-serif text-2xl mb-8">Key Performance Indicators</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(item.kpis).map(([key, kpi]) => (
            <div key={key} className="p-6 rounded-lg border border-foreground/10 bg-background/60">
              <p className="text-sm text-foreground/60 uppercase tracking-wider mb-2">
                {key === 'revenue' ? 'Revenue Growth' : 
                 key === 'roas' ? 'ROAS' :
                 key === 'leadQuality' ? 'Lead Quality' :
                 key === 'conversion' ? 'Conversion Rate' :
                 key === 'aov' ? 'Average Order Value' :
                 key === 'cac' ? 'Customer Acquisition Cost' :
                 key === 'brandRecognition' ? 'Brand Recognition' :
                 key === 'customerLifetime' ? 'Customer Lifetime Value' :
                 key === 'costPerLead' ? 'Cost Per Lead' :
                 key === 'salesCycle' ? 'Sales Cycle' :
                 key === 'scale' ? 'Ad Spend Scale' :
                 key === 'testing' ? 'Testing Velocity' : key}
              </p>
              <p className="font-serif text-3xl text-gold mb-1">{kpi.value}</p>
              <p className="text-sm text-foreground/70">{kpi.change} • {kpi.timeframe}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Charts Section */}
      <motion.div {...fadeUp} className="mb-16">
        <h2 className="font-serif text-2xl mb-8">Performance Over Time</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Revenue Chart */}
          <div className="p-6 rounded-lg border border-foreground/10 bg-background/60">
            <h3 className="font-serif text-lg mb-4">Revenue Growth</h3>
            <div className="mb-4">
              <p className="text-sm text-foreground/60">Baseline: 100% → Final: {Math.round(item.charts.revenue.data[item.charts.revenue.data.length - 1])}%</p>
            </div>
            <div className="flex items-end justify-between h-40 gap-2">
              {item.charts.revenue.data.map((value, index) => {
                const maxValue = Math.max(...item.charts.revenue.data);
                const height = (value / maxValue) * 120; // Use fixed pixel height instead of percentage
                return (
                  <div key={index} className="flex-1 flex flex-col items-center group">
                    <div className="relative">
                      <div 
                        className="w-full bg-gradient-to-t from-gold to-gold/80 rounded-t transition-all duration-300 group-hover:from-gold group-hover:to-gold/90 min-h-[8px]"
                        style={{ height: `${Math.max(height, 8)}px` }}
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        {value}%
                      </div>
                    </div>
                    <span className="text-xs text-foreground/60 mt-3 text-center">
                      {item.charts.revenue.labels[index]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Conversion Chart */}
          <div className="p-6 rounded-lg border border-foreground/10 bg-background/60">
            <h3 className="font-serif text-lg mb-4">Conversion Rate</h3>
            <div className="mb-4">
              <p className="text-sm text-foreground/60">Baseline: {item.charts.conversion.data[0]}% → Final: {item.charts.conversion.data[item.charts.conversion.data.length - 1]}%</p>
            </div>
            <div className="flex items-end justify-between h-40 gap-2">
              {item.charts.conversion.data.map((value, index) => {
                const maxValue = Math.max(...item.charts.conversion.data);
                const height = (value / maxValue) * 120; // Use fixed pixel height instead of percentage
                return (
                  <div key={index} className="flex-1 flex flex-col items-center group">
                    <div className="relative">
                      <div 
                        className="w-full bg-gradient-to-t from-gold to-gold/80 rounded-t transition-all duration-300 group-hover:from-gold group-hover:to-gold/90 min-h-[8px]"
                        style={{ height: `${Math.max(height, 8)}px` }}
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        {value}%
                      </div>
                    </div>
                    <span className="text-xs text-foreground/60 mt-3 text-center">
                      {item.charts.conversion.labels[index]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Traffic Chart */}
          <div className="p-6 rounded-lg border border-foreground/10 bg-background/60">
            <h3 className="font-serif text-lg mb-4">Traffic Growth</h3>
            <div className="mb-4">
              <p className="text-sm text-foreground/60">Baseline: 100% → Final: {Math.round(item.charts.traffic.data[item.charts.traffic.data.length - 1])}%</p>
            </div>
            <div className="flex items-end justify-between h-40 gap-2">
              {item.charts.traffic.data.map((value, index) => {
                const maxValue = Math.max(...item.charts.traffic.data);
                const height = (value / maxValue) * 120; // Use fixed pixel height instead of percentage
                return (
                  <div key={index} className="flex-1 flex flex-col items-center group">
                    <div className="relative">
                      <div 
                        className="w-full bg-gradient-to-t from-gold to-gold/80 rounded-t transition-all duration-300 group-hover:from-gold group-hover:to-gold/90 min-h-[8px]"
                        style={{ height: `${Math.max(height, 8)}px` }}
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        {value}%
                      </div>
                    </div>
                    <span className="text-xs text-foreground/60 mt-3 text-center">
                      {item.charts.traffic.labels[index]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl mb-6">Challenge</h2>
          <p className="text-foreground/80 leading-relaxed">{item.challenge}</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl mb-6">Transformation</h2>
          <p className="text-foreground/80 leading-relaxed">{item.transformation}</p>
        </motion.div>
      </div>

      {/* Process */}
      <motion.div {...fadeUp} className="mb-16">
        <h2 className="font-serif text-2xl mb-8">Our Process</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {item.process.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 text-gold text-lg font-medium flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>
              <p className="text-sm text-foreground/80">{step}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Results */}
      <motion.div {...fadeUp} className="mb-16">
        <h2 className="font-serif text-2xl mb-8">Results</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {item.results.map((result, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2"></span>
              <p className="text-foreground/80">{result}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Services Used */}
      <motion.div {...fadeUp} className="mb-16">
        <h2 className="font-serif text-2xl mb-8">Services Delivered</h2>
        <div className="flex flex-wrap gap-3">
          {item.services.map((service) => (
            <span key={service} className="px-4 py-2 rounded-full border border-foreground/20 bg-background/60 text-sm">
              {service}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div {...fadeUp} className="mb-16">
        <h2 className="font-serif text-2xl mb-8">Client Testimonial</h2>
        <div className="p-8 rounded-lg border border-foreground/10 bg-background/60">
          <blockquote className="font-serif text-xl leading-relaxed mb-6">
            "{item.testimonials[0].quote}"
          </blockquote>
          <div>
            <p className="font-medium">{item.testimonials[0].author}</p>
            <p className="text-sm text-foreground/70">{item.testimonials[0].role}</p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div {...fadeUp} className="text-center">
        <h2 className="font-serif text-2xl mb-4">Ready to achieve similar results?</h2>
        <p className="text-foreground/80 mb-8">Let's discuss how we can transform your business.</p>
        <a
          href="/contact"
          className="hover-underline inline-flex items-center gap-3 rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-wide bg-background/60 hover:bg-background/80 transition-all duration-300"
        >
          Book Your Discovery Call
          <span className="inline-block">→</span>
        </a>
      </motion.div>
    </main>
  );
}


