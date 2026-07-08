"use client";

import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section id="cta" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl rounded-card border border-white/8 bg-gradient-cta px-8 py-16 text-center sm:px-16"
      >
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Ada sistem yang ingin dirapikan?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-text-secondary">
          Ceritakan alur kerja tim Anda saat ini, dan kita cari tahu bareng-bareng
          sistem seperti apa yang paling masuk akal untuk dibangun.
        </p>
        <a
          href="mailto:hello@rizalariadi.dev"
          className="mt-8 inline-block rounded-lg bg-gradient-brand px-8 py-3.5 text-sm font-semibold text-navy transition-shadow hover:shadow-glow-blue"
        >
          Hubungi saya
        </a>
      </motion.div>
    </section>
  );
}
