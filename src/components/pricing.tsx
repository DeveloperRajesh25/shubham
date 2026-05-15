"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/config";

const features = [
  "10,000+ printable worksheets across 12 categories",
  "40+ skill-mapped developmental areas",
  "Lifetime access — unlimited downloads",
  "Print at home, school, or anywhere",
  "PDF format, easy to print — A4 & US Letter size",
  "Instant delivery via Google Drive download link",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="text-center">
        <Eyebrow className="justify-center">One bundle. One price.</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          Everything, forever, for less than a movie ticket.
        </motion.h2>
      </div>

      <div className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Bundle visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="relative aspect-square w-full overflow-hidden rounded-3xl p-6 md:p-10"
            style={{ background: "var(--accent-soft)" }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/book-poster-1.jpeg"
                alt="The Complete Bundle — 14,000+ Kids Worksheets Ultimate Mega Learning Bundle"
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              Printable PDF
            </span>
            <span>·</span>
            <span>Ages 3–10</span>
            <span>·</span>
            <span>Instant download</span>
          </div>
        </motion.div>

        {/* Price card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <div className="flex justify-center md:justify-start">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              Launch pricing — limited
            </span>
          </div>

          <h3 className="mt-6 text-center md:text-left text-xl font-medium text-foreground">
            The Complete Bundle
          </h3>

          <div className="mt-8 flex items-baseline justify-center gap-3 md:justify-start">
            <span className="text-xl text-muted-foreground line-through">
              ₹599
            </span>
            <span className="font-display text-7xl leading-none text-foreground md:text-8xl">
              ₹149
            </span>
          </div>
          <p className="mt-3 text-center md:text-left text-sm text-muted-foreground">
            one-time payment
          </p>

          <ul className="mt-10 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-foreground"
                  aria-hidden
                />
                <span className="text-sm md:text-base text-foreground leading-relaxed">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <ButtonLink
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-10 w-full justify-center group"
          >
            Get instant access — ₹149
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </ButtonLink>

          <p className="mt-5 text-center md:text-left text-xs text-muted-foreground">
            Secure checkout · Instant PDF delivery · Google Drive access
          </p>
        </motion.div>
      </div>
    </section>
  );
}
