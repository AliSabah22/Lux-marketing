"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageWithFallback } from "@/components/ImageWithFallback";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // positive moves with scroll, negative opposite
  sizes?: string;
  priority?: boolean;
};

export function ParallaxImage({ src, alt, className, speed = 0.2, sizes, priority }: ParallaxImageProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -40, speed * 40]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <ImageWithFallback src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </motion.div>
  );
}


