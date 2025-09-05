"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Marquee } from "@/components/Marquee";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { OutcomeDrivenServices } from "@/components/OutcomeDrivenServices";
import { HeroShowcase } from "@/components/HeroShowcase";
import { FooterCTA } from "@/components/FooterCTA";
import { LeadCapture } from "@/components/LeadCapture";
import { StickyCTA } from "@/components/StickyCTA";
import { images } from "@/lib/images";

const easeOut = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: easeOut },
  viewport: { once: true, margin: "-100px" },
};

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. HERO - Premium Cinematic Experience with Strong UVP */}
      <HeroShowcase
        headline="Transform Your Brand Into a Market Leader"
        subheadline="Stop struggling with inconsistent results. We help premium brands achieve 3x revenue growth through strategic positioning and high-converting digital experiences."
        primaryCTA="Book Your Free Strategy Call"
        secondaryCTA="See Our Results"
      />

      {/* 2. SOCIAL PROOF - Trust & Credibility */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-neutral-50/30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-foreground/70 font-semibold mb-4">Trusted by Industry Leaders</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              "They helped us achieve 4.8x ROAS in just 3 months"
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Join 47+ premium brands that have transformed their market position and revenue with our proven methodology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-70 mb-12">
            {["next.svg", "vercel.svg", "globe.svg", "file.svg", "window.svg", "next.svg"].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
                className="relative h-12"
              >
                <Image src={`/${src}`} alt="Logo" fill sizes="200px" className="object-contain" />
              </motion.div>
            ))}
          </div>
          
          <div className="mb-8">
            <Marquee
              items={["Strategy", "Creative", "Digital Experience", "Optimization", "Positioning", "CRO", "Content Systems"]}
              speedMs={14000}
              className="opacity-70"
            />
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
            className="flex items-center justify-center gap-8 text-sm text-foreground/60"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Google Analytics Verified
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Facebook Ads Manager
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Shopify Analytics
            </span>
          </motion.div>
        </div>
      </section>

      {/* 3. PAIN POINTS & SOLUTION - Problem-Agitation-Solution */}
      <section className="py-24 px-6 bg-neutral-50/30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-8">
              Struggling to Get Consistent Results?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Most brands waste time and money on tactics that don't work. We've identified the exact formula that drives predictable, scalable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Pain Points */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Common Challenges We Solve</h3>
              {[
                "Inconsistent revenue growth despite high ad spend",
                "Low conversion rates on your website",
                "Brand positioning that doesn't command premium prices",
                "Content that doesn't resonate with your audience",
                "Scaling issues when trying to grow beyond initial success"
              ].map((pain, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed">{pain}</p>
                </div>
              ))}
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/20"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Our Proven Solution</h3>
              <div className="space-y-4">
                {[
                  "Strategic positioning that commands premium prices",
                  "High-converting digital experiences that sell on sight",
                  "Content systems that build trust and authority",
                  "Data-driven optimization that compounds results",
                  "Scalable processes that work at any stage"
                ].map((solution, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg text-foreground/80 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gold/20">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gold text-background rounded-full font-semibold hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Your Free Strategy Session
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. LEAD CAPTURE - Conversion Optimization */}
      <section className="py-24 px-6 bg-background/80">
        <div className="mx-auto max-w-6xl">
          <LeadCapture
            title="Get Your Free Marketing Audit"
            subtitle="Discover exactly what's holding your brand back and how to fix it"
            offer="Free 30-minute strategy session + custom growth roadmap + 3 actionable recommendations"
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* 5. DETAILED SERVICES - Comprehensive Offerings */}
      <ServicesAccordion className="bg-neutral-50/50" />

      {/* 6. CASE STUDIES - Proof of Results */}
      <section id="results" className="py-24 px-6 bg-neutral-50/30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Proven Results That Speak for Themselves</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's exactly what we've delivered for our clients.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {[
              { 
                slug: "aurum", 
                title: "Aurum Luxury", 
                result: "+212% revenue", 
                img: "https://images.unsplash.com/photo-1517451330947-7809dead78d5?q=80&w=1400&auto=format&fit=crop",
                metrics: {
                  revenue: "+212%",
                  conversion: "+156%",
                  aov: "+89%",
                  timeframe: "6 months"
                },
                chart: {
                  type: "growth",
                  data: [100, 145, 189, 234, 278, 312],
                  labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]
                }
              },
              { 
                slug: "noir", 
                title: "Noir Maison", 
                result: "4.8x ROAS", 
                img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
                metrics: {
                  roas: "4.8x",
                  cpa: "-67%",
                  scale: "+340%",
                  timeframe: "3 months"
                },
                chart: {
                  type: "roas",
                  data: [2.1, 2.8, 3.4, 4.1, 4.8],
                  labels: ["Week 1", "Week 4", "Week 8", "Week 10", "Week 12"]
                }
              },
              { 
                slug: "verdi", 
                title: "Verdi Collection", 
                result: "+68% lead quality", 
                img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1400&auto=format&fit=crop",
                metrics: {
                  leadQuality: "+68%",
                  conversion: "+142%",
                  costPerLead: "-45%",
                  timeframe: "4 months"
                },
                chart: {
                  type: "quality",
                  data: [45, 52, 58, 63, 68],
                  labels: ["Month 1", "Month 2", "Month 3", "Month 4"]
                }
              },
            ].map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 hover:shadow-xl"
              >
                <Link href={`/case-studies/${c.slug}`} className="block">
                  <div className="relative aspect-[4/3]">
                    <ImageWithFallback src={c.img} alt={c.title} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-2xl font-bold">{c.title}</h3>
                      <span className="text-xl text-gold font-bold">{c.result}</span>
                    </div>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(c.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-4 rounded-xl bg-foreground/5">
                          <p className="text-sm text-foreground/60 uppercase tracking-wider font-medium">
                            {key === 'revenue' ? 'Revenue Growth' : 
                             key === 'roas' ? 'ROAS' :
                             key === 'leadQuality' ? 'Lead Quality' :
                             key === 'conversion' ? 'Conversion' :
                             key === 'aov' ? 'AOV' :
                             key === 'cpa' ? 'CPA' :
                             key === 'scale' ? 'Scale' :
                             key === 'costPerLead' ? 'Cost/Lead' :
                             key === 'timeframe' ? 'Timeframe' : key}
                          </p>
                          <p className="font-serif text-xl text-gold font-bold mt-2">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Mini Chart */}
                    <div className="mb-6">
                      <div className="flex items-end justify-between h-16 gap-1">
                        {c.chart.data.map((value, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center">
                            <div 
                              className="w-full bg-gradient-to-t from-gold/80 to-gold/40 rounded-t transition-all duration-300 group-hover:from-gold to-gold/60"
                              style={{ height: `${(value / Math.max(...c.chart.data)) * 100}%` }}
                            />
                            <span className="text-xs text-foreground/50 mt-1 hidden group-hover:block">
                              {c.chart.labels[index]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-foreground/80">
                      <span className="font-medium">Challenge → Process → Transformation → Results</span>
                      <span className="text-primary-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Overall Performance Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }}
            className="bg-gradient-to-r from-gold/10 to-gold/5 p-12 rounded-2xl border border-gold/20"
          >
            <h3 className="font-serif text-3xl text-center mb-10 font-bold">Collective Impact Across All Clients</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-serif text-gold font-bold mb-3">$47M+</div>
                <p className="text-lg text-foreground/70 font-medium">Additional Revenue Generated</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif text-gold font-bold mb-3">3.2x</div>
                <p className="text-lg text-foreground/70 font-medium">Average ROAS Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif text-gold font-bold mb-3">+89%</div>
                <p className="text-lg text-foreground/70 font-medium">Average Conversion Increase</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif text-gold font-bold mb-3">13</div>
                <p className="text-lg text-foreground/70 font-medium">Months Average Timeline</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
                              <Link
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 bg-gold text-background rounded-full font-semibold hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                View All Case Studies
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. TESTIMONIALS - Social Validation */}
      <section className="py-24 px-6 bg-neutral-50/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-6">What Our Partners Say</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Real testimonials from real clients who've transformed their businesses with us.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                quote:
                  "They reframed our category story and rebuilt our experience. Results were immediate and compounding. We saw a 212% revenue increase in just 6 months.",
                author: "Sarah Chen",
                title: "VP Growth, DTC Luxury",
                company: "Aurum Luxury"
              },
              {
                quote:
                  "Their creative system increased testing velocity 5x and unlocked efficient scale across channels. We achieved 4.8x ROAS consistently.",
                author: "Michael Rodriguez",
                title: "Head of Performance",
                company: "Global Retail"
              },
            ].map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.1 }}
                className={`rounded-2xl border border-foreground/10 p-10 bg-background/80 backdrop-blur-sm shadow-lg ${i === 1 ? "md:text-right" : ""}`}
              >
                <blockquote className="font-serif text-2xl leading-relaxed mb-6">"{t.quote}"</blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-bold text-lg">{t.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.author}</div>
                    <div className="text-sm text-foreground/70">{t.title}, {t.company}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
            className="text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-background rounded-full font-semibold hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Our Success Stories
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. TRANSFORMATION IN PRACTICE - How It Works */}
      <section className="py-24 px-6 bg-background/80">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-6">How We Transform Brands</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Our proven 4-step process that consistently delivers exceptional results.
            </p>
          </motion.div>
          
          <div className="space-y-20">
            {[
              {
                title: "Strategic Positioning",
                subtitle: "Command Premium Prices",
                copy: "We reframe your category story and signal value before it's proven. From identity to narrative to touchpoints, everything coheres to position you as the premium choice.",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop",
                step: "01"
              },
              {
                title: "Creative Systems",
                subtitle: "Scale Effortlessly",
                copy: "We build a library of cinematic assets and iteration loops that increase testing velocity and channel efficiency. Your creative becomes a competitive advantage.",
                img: "https://images.unsplash.com/photo-1520971347569-456cfd318834?q=80&w=1600&auto=format&fit=crop",
                step: "02"
              },
              {
                title: "Digital Experiences",
                subtitle: "Sell on Sight",
                copy: "We design frictionless paths that elevate perception and remove hesitation. Clarity, speed, and desire combine to create experiences that convert visitors into customers.",
                img: "https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?q=80&w=1600&auto=format&fit=crop",
                step: "03"
              },
            ].map((item, i) => {
              const reversed = i % 2 === 1;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: easeOut, delay: 0.1 * i }}
                  className="grid md:grid-cols-12 gap-12 items-center"
                >
                  <div className={`${reversed ? "md:order-last" : ""} md:col-span-7 relative rounded-2xl overflow-hidden shadow-xl`}>
                    <div className="relative aspect-[16/9] md:aspect-[5/3]">
                      <ImageWithFallback
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 60vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-6 left-6 bg-gold text-background px-4 py-2 rounded-full font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${reversed ? "md:text-right" : ""}`}>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">{item.title}</h3>
                    <p className="text-xl text-gold font-semibold mb-6">{item.subtitle}</p>
                    <p className="text-lg text-foreground/80 leading-relaxed max-w-md md:max-w-none ml-0 md:ml-auto">{item.copy}</p>
                    <div className={`mt-8 ${reversed ? "justify-end" : ""} flex`}>
                      <Link href="/services" className="hover-underline text-lg font-semibold text-gold">Learn more about this step</Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. OUTCOME-DRIVEN SERVICES - Solution Presentation */}
      <OutcomeDrivenServices />

      {/* 10. APPROACH - Process & Methodology */}
      <section className="py-24 px-6 bg-neutral-50/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Our Winning Process</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              A systematic approach that ensures consistent, predictable results for every client.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Strategy", body: "Category insight, POV, and outcome design that positions you for maximum impact.", step: "01" },
              { title: "Creative", body: "Cinematic systems that scale effortlessly and build brand recognition.", step: "02" },
              { title: "Experience", body: "Frictionless paths that heighten desire and remove buying hesitation.", step: "03" },
              { title: "Optimization", body: "Data-driven signals, testing, and compounding returns over time.", step: "04" },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.1 }}
                className="rounded-2xl border border-foreground/10 p-8 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-gold font-bold text-lg">{s.step}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA - Action */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gold/10 to-gold/5">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="font-serif text-4xl md:text-6xl mb-8"
          >
            Ready to Transform Your Brand?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="text-xl text-foreground/80 mb-8 leading-relaxed"
          >
            Let's architect an outcome-led plan and get to work. Your competitors are already falling behind.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="space-y-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-12 py-6 bg-gold text-background rounded-full text-xl font-bold hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Free Strategy Call
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-sm text-foreground/60">No commitment required • 30-minute session • Immediate value</p>
          </motion.div>
        </div>
        <div className="decorative-gradient" />
      </section>

      {/* 12. FOOTER CTA - Final Conversion */}
      <FooterCTA />
      
      {/* 13. STICKY CTA - Conversion Optimization */}
      <StickyCTA />
    </div>
  );
}
