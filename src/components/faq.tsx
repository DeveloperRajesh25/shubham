"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this a one-time payment or a subscription?",
    a: "One-time. Pay ₹499 once, access for life. No recurring charges, ever.",
  },
  {
    q: "What ages is this for?",
    a: "Designed for kids 2–8. Each worksheet is labeled 2–3, 4–5, or 6–8 so you can pick the right level.",
  },
  {
    q: "Do I need a printer at home?",
    a: "Helpful but not required. Many parents print at the local stationery shop (₹1–2 per page) or use the worksheets digitally on a tablet with a stylus.",
  },
  {
    q: "What format are the files?",
    a: "Standard PDFs, A4 sized, ink-friendly. Open on any phone, tablet, laptop, or printer.",
  },
  {
    q: "What if my child outgrows the bundle?",
    a: "The bundle covers up to age 8. Quarterly updates also extend the range — and you keep lifetime access.",
  },
  {
    q: "Can I share this with another parent?",
    a: "The license is for one family or one classroom. We trust you.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes — 30 days, no questions asked. Email us and we'll process the refund.",
  },
  {
    q: "How is this different from free worksheets online?",
    a: "Free worksheets are scattered, inconsistent in quality, and not skill-mapped. Ours are sequenced, age-graded, and built by certified educators. Most parents tell us they spent more time hunting for free PDFs than the ₹499 we charge.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div>
        <Eyebrow>Common questions</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          Everything you might be wondering.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-12 border-t border-border"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
