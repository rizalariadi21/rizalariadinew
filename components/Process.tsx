"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Cara kerjanya
          </h2>
          <p className="mt-4 text-text-secondary">
            Tiga tahap sederhana, supaya Anda tahu persis sedang berada di mana.
          </p>
        </div>

        <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex items-start gap-6 py-8 transition-all duration-300 hover:pl-3"
            >
              <span className="font-heading text-2xl font-bold text-text-secondary/50 transition-colors group-hover:text-glow-blue">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
