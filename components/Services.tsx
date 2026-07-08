"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { DashboardIcon, AutomationIcon, ToolsIcon } from "./icons";

const iconMap = {
  dashboard: DashboardIcon,
  automation: AutomationIcon,
  tools: ToolsIcon,
};

const accentStyles = {
  blue: {
    badge: "bg-glow-blue/10 text-glow-blue",
    hoverBorder: "hover:border-glow-blue/50",
    hoverShadow: "hover:shadow-glow-blue",
  },
  green: {
    badge: "bg-glow-green/10 text-glow-green",
    hoverBorder: "hover:border-glow-green/50",
    hoverShadow: "hover:shadow-glow-green",
  },
  orange: {
    badge: "bg-glow-orange/10 text-glow-orange",
    hoverBorder: "hover:border-glow-orange/50",
    hoverShadow: "hover:shadow-glow-orange",
  },
} as const;

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Yang bisa saya bantu bangun
          </h2>
          <p className="mt-4 text-text-secondary">
            Fokus di tiga area yang paling sering jadi masalah tim operasional dan IT
            di perusahaan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const accent = accentStyles[service.accent];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`glass-panel rounded-card border border-white/8 p-7 transition-all duration-300 ${accent.hoverBorder} ${accent.hoverShadow}`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.badge}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
