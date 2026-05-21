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
    q: "Is this a digital or physical product?",
    a: "100% digital. No physical items will be shipped — you get instant access to all 14,000+ worksheets in PDF format delivered to your inbox within minutes of purchase.",
  },
  {
    q: "How will I receive the worksheets?",
    a: "You'll get an email with a Google Drive link to download all your files instantly. Open the link, download the PDFs, and you're ready to print.",
  },
  {
    q: "What ages is this for?",
    a: "Designed for children aged 2–9 years. Each worksheet is age-graded so you always know what's right for your child.",
  },
  {
    q: "Do I need special skills to use these worksheets?",
    a: "No special skills required! Simply download, print on regular paper, and hand to your child. Each worksheet comes with clear instructions.",
  },
  {
    q: "Can I print in black & white or do I need color?",
    a: "Both work perfectly! Color printing makes worksheets more engaging, but black & white is completely fine and saves ink costs.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-8 md:py-24">
      <div className="text-center">
        <Eyebrow color="accent">Got questions?</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Frequently Asked <span className="text-accent">Questions</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-10 overflow-hidden rounded-2xl border-2 border-border bg-white"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-5">
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
