"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const mouseLeft = useMotionValue(0);
  const mouseTop = useMotionValue(0);
  const left = useSpring(mouseLeft, { stiffness: 500, damping: 40, mass: 0.5 });
  const top = useSpring(mouseTop, { stiffness: 500, damping: 40, mass: 0.5 });

  React.useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseLeft.set(e.clientX);
      mouseTop.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseLeft, mouseTop]);

  return (
    <>
      <motion.div className="cursor-ring -translate-x-1/2 -translate-y-1/2" style={{ left, top }} />
      <motion.div className="cursor-dot -translate-x-1/2 -translate-y-1/2" style={{ left, top }} />
      {children}
    </>
  );
}


