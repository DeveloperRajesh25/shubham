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
    q: "Is this a physical product?",
    a: "No. This is a digital product only. No physical items will be shipped.",
  },
  {
    q: "How will I receive the product?",
    a: "This is a digital download. You'll get an email with a Google Drive link to download your files instantly!",
  },
  {
    q: "What format are the files in?",
    a: "PDF format, easy to print.",
  },
  {
    q: "What paper size is supported?",
    a: "Printable in A4 & US Letter size.",
  },
  {
    q: "Can I print multiple times?",
    a: "Yes, unlimited printing for personal or classroom use.",
  },
  {
    q: "What ages is this for?",
    a: "These worksheets are designed for children aged 2–9 years, but learning pace may vary for each child.",
  },
  {
    q: "Is there a refund?",
    a: "No refunds on digital products. Due to the nature of digital downloads, all sales are final once files are delivered. However, if you face any issues downloading or opening the files, please contact us and we'll be happy to help.",
  },
  {
    q: "Need help?",
    a: "Contact us if you face any download issues. We're happy to assist with any technical problems.",
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
