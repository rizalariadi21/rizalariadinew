"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Trust() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="glass-panel relative min-h-[220px] overflow-hidden rounded-card p-8 sm:p-10">
          <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-brand" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="pl-4"
            >
              <p className="font-heading text-lg leading-relaxed text-text-primary sm:text-xl">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-text-primary">
                  {testimonials[active].name}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonials[active].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Lihat testimoni ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${
                index === active
                  ? "w-6 bg-gradient-brand"
                  : "w-2 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
