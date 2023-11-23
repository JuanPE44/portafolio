import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RowProps {
  children?: ReactNode;
  className?: string;
  duration: number;
  initial: {
    x?: number | string;
    y?: number | string;
    opacity?: number;
    height?: string;
  };
  final?: {
    x?: number | string;
    y?: number | string;
    opacity?: number;
    height?: string;
  };
  delay?: number;
  ease?: string;
  viewport?: boolean;
}

export function AnimationMove({
  children,
  className,
  duration,
  initial,
  final = { x: 0, y: 0, opacity: 1, height: "" },
  delay = 0,
  ease = "easeInOut",
  viewport = false,
}: RowProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={final}
      viewport={{ once: viewport }}
      transition={{ duration: duration, ease: ease, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
