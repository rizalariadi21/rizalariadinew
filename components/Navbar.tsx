"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="glass-panel flex items-center justify-between rounded-card px-5 py-3">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand font-heading text-sm font-bold text-navy">
              RA
            </span>
            <span className="font-heading text-sm font-semibold tracking-wide text-text-primary">
              Rizal Ariadi
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            className="hidden rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-navy transition-shadow hover:shadow-glow-blue md:inline-block"
          >
            Hubungi saya
          </a>

          <button
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-text-primary md:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-current transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="glass-panel mt-3 flex flex-col gap-1 rounded-card p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-lg bg-gradient-brand px-3 py-2.5 text-center text-sm font-semibold text-navy"
                >
                  Hubungi saya
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
