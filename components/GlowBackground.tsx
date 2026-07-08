"use client";

import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-[-10%] left-[5%] h-[420px] w-[420px] rounded-full bg-glow-blue/30 blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, 60, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] right-[0%] h-[380px] w-[380px] rounded-full bg-glow-green/25 blur-[130px]"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[25%] h-[400px] w-[400px] rounded-full bg-glow-orange/20 blur-[130px]"
        animate={{
          x: [0, 25, -35, 0],
          y: [0, -25, 20, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
