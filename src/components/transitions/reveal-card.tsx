"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface RevealCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  randomDelay?: boolean;
  threshold?: number;
  duration?: number;
  once?: boolean;
}

export default function RevealCard({
  children,
  className = "",
  delay = 0,
  randomDelay = false,
  threshold = 0.2,
  duration = 1,
  once = false,
}: RevealCardProps) {
  // Lazy initialization ensures Math.random() is only called once per component
  const [delayValue] = useState(() =>
    randomDelay ? Math.random() * delay : delay,
  );

  return (
    <motion.div
      className={className}
      initial={{
        transform: "translateY(20px)",
        filter: "blur(10px)",
        opacity: 0,
      }}
      whileInView={{
        transform: "translateY(0)",
        filter: "blur(0px)",
        opacity: 1,
      }}
      exit={{ transform: "translateY(0)", filter: "blur(10px)", opacity: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{
        type: "tween",
        duration,
        delay: delayValue,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
