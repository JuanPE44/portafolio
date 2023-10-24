import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RowProps {
  children: ReactNode;
  className?: string;
  duration: number;
  initial: { x?: number | string; y?: number | string; opacity?: number };
  final?: { x?: number | string; y?: number | string; opacity?: number };
  delay?: number;
  ease?: string;
}

export function AnimationMove({
  children,
  className,
  duration,
  initial,
  final = { x: 0, y: 0, opacity: 1 },
  delay = 0,
  ease = "backOut",
}: RowProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={final}
      transition={{ duration: duration, ease: ease, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
