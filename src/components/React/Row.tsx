import { motion } from "framer-motion";

export function Row() {
  return (
    <motion.span
      className="text-white text-3xl"
      initial={{ y: 0 }}
      animate={{ y: -30 }}
      transition={{ duration: 1, delay: 3, repeat: Infinity }}
    >
      ↓
    </motion.span>
  );
}
