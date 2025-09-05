"use client";

import React from "react";
import { motion, useAnimationControls } from "framer-motion";

type MarqueeProps = {
  items: string[];
  direction?: "left" | "right";
  speedMs?: number;
  className?: string;
};

export function Marquee({ items, direction = "left", speedMs = 16000, className }: MarqueeProps) {
  const controls = useAnimationControls();
  const dir = direction === "left" ? -1 : 1;

  React.useEffect(() => {
    controls.start({
      x: [0, dir * -1000],
      transition: { duration: speedMs / 1000, repeat: Infinity, ease: "linear" },
    });
  }, [controls, dir, speedMs]);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`} aria-hidden>
      <motion.div className="inline-flex gap-8 pr-8" animate={controls}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="text-sm opacity-70">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}


