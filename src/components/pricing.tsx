"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check, ArrowRight, ShieldCheck, Download, Zap } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/config";

const features = [
  "14,000+ printable worksheets across 12 categories",
  "40+ skill-mapped developmental areas",
  "Lifetime access — unlimited downloads",
  "Print at home, school, or anywhere",
  "PDF format — A4 & US Letter size",
  "Instant Google Drive delivery to your inbox",
  "Bonus: certificates, reward charts, planners",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(800px 400px at 100% 0%, #FFE4CC 0%, transparent 60%), radial-gradient(700px 400px at 0% 100%, #FEF9C3 0%, transparent 55%), var(--background)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-strong px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-md">
            🔥 85% OFF — LAUNCH PRICING
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Available at <span className="text-accent">₹149 ONLY</span>
          </motion.h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-foreground/70 md:text-lg">
            One-time payment. Lifetime access. Less than a movie ticket.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 grid grid-cols-1 items-center gap-8 rounded-3xl border-2 border-accent bg-white p-6 shadow-2xl md:grid-cols-5 md:gap-10 md:p-10"
        >
          <div className="md:col-span-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-accent-soft">
              <Image
                src="/images/book-poster-1.jpeg"
                alt="The Complete Bundle — 14,000+ Kids Worksheets"
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute -right-2 top-4 rotate-6 rounded-xl bg-accent-strong px-3 py-2 text-white shadow-xl">
                <div className="text-2xl font-extrabold leading-none">85%</div>
                <div className="text-[10px] font-bold uppercase tracking-wider">OFF</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xl font-extrabold text-foreground">
              The Complete Kids Worksheet Bundle
            </h3>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl text-foreground/40 line-through">
                ₹999
              </span>
              <span className="text-6xl font-extrabold text-accent-strong md:text-7xl">
                ₹149
              </span>
              <span className="rounded-full bg-success px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                SAVE 85%
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground/60">one-time payment</p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success text-white">
                    <Check className="h-2.5 w-2.5" strokeWidth={4} />
                  </span>
                  <span className="text-xs text-foreground/80 leading-relaxed sm:text-sm">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <ButtonLink
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              className="mt-7 w-full justify-center group cta-glow"
            >
              GET INSTANT ACCESS — ₹149
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </ButtonLink>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-foreground/60 md:justify-start">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-success" />
                Secure checkout
              </span>
              <span className="inline-flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-accent" />
                Instant delivery
              </span>
              <span className="inline-flex items-center gap-1">
                <Download className="h-3.5 w-3.5 text-accent" />
                Google Drive access
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
