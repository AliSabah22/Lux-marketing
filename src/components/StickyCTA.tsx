"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LeadCapture } from "./LeadCapture";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show sticky CTA after scrolling 50% of the page
      if (scrollPosition > (documentHeight - windowHeight) * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLeadCaptureSuccess = (data: any) => {
    console.log("Lead captured from sticky CTA:", data);
    setShowLeadCapture(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 border-t border-neutral-200/30 shadow-lg backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    Ready to Transform Your Brand?
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Get your free marketing audit and discover your growth potential
                  </p>
                </div>
                
                <div className="flex items-center gap-4 ml-6">
                  <button
                    onClick={() => setShowLeadCapture(true)}
                    className="bg-gold text-background px-6 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Get Free Audit
                  </button>
                  
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-foreground/40 hover:text-foreground/60 transition-colors duration-300"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lead Capture Modal */}
      <AnimatePresence>
        {showLeadCapture && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowLeadCapture(false)}
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
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Get Your Free Marketing Audit
                  </h2>
                  <p className="text-foreground/70">
                    Discover exactly what's holding your brand back and how to fix it
                  </p>
                </div>

                <div className="bg-gold/10 rounded-lg p-3 mb-4 border border-gold/20">
                  <p className="text-sm text-foreground font-medium">
                    Free 30-minute strategy session + custom growth roadmap + 3 actionable recommendations
                  </p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-6">
                <LeadCapture
                  variant="inline"
                  onSuccess={handleLeadCaptureSuccess}
                  className="!bg-transparent !p-0 !border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


