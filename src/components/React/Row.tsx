import { motion } from "framer-motion";

export function Row() {
  return (
    <motion.div
      className="text-white text-3xl"
      initial={{ y: 0 }}
      animate={{ y: -20 }}
      transition={{
        duration: 1,
        delay: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <svg
        className="h-5 w-5 mb-1 fill-yellow-800 -rotate-90"
        viewBox="0 0 24 24"
      >
        <path d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z" />
      </svg>
    </motion.div>
  );
}
