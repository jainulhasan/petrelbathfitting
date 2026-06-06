"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export { motion };

export function Reveal({
  children,
  delay = 0,
  className = ""
}: Readonly<{ children: React.ReactNode; delay?: number; className?: string }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  value,
  suffix = "",
  label
}: Readonly<{ value: number; suffix?: string; label: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 58, damping: 18 });
  const rounded = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (isInView) raw.set(value);
  }, [isInView, raw, value]);

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-luxury backdrop-blur-xl">
      <motion.strong className="block text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {rounded}
      </motion.strong>
      <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-white/58">{label}</span>
    </div>
  );
}
