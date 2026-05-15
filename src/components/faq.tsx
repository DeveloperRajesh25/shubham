"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
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
    a: "100% digital. No physical items will be shipped — you get instant access to all 10,000+ worksheets in PDF format delivered to your inbox within minutes of purchase.",
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
  {
    q: "What if I'm not satisfied?",
    a: "Not happy with your purchase? Get a full refund within 30 days, no questions asked.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
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

      <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-success-soft p-6 text-center">
        <p className="text-sm font-bold text-foreground">
          Need help? Talk to us on WhatsApp
        </p>
        <a
          href="https://wa.me/919611563472"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:brightness-105"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp (+91 96115 63472)
        </a>
      </div>
    </section>
  );
}
