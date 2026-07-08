"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-32 pb-20">
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-panel mx-auto mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow-green/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-glow-green" />
          </span>
          <span className="text-xs text-text-secondary">
            Bekerja bareng tim AI, hasil tetap dipegang manusia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
        >
          Sistem korporat yang dibangun{" "}
          <span className="text-gradient">rapi, cepat, dan bisa dipercaya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-base text-text-secondary sm:text-lg"
        >
          Saya membantu perusahaan membangun dashboard, otomasi, dan tools internal
          menggunakan tooling AI modern — dengan proses kerja yang tetap terarah dan
          keputusan akhir yang selalu ada di tangan manusia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="w-full rounded-lg bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-navy transition-shadow hover:shadow-glow-blue sm:w-auto"
          >
            Diskusikan proyek Anda
          </a>
          <a
            href="#services"
            className="glass-panel w-full rounded-lg px-7 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:bg-white/5 sm:w-auto"
          >
            Lihat layanan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
