"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star, MessageCircle } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Review {
  quote: string;
  name: string;
  meta: string;
}

const reviews: Review[] = [
  {
    quote:
      "My 5-year-old asked for 'one more page' for the first time in his life. The phonics worksheets in particular hit the right level — challenging without being frustrating.",
    name: "Anita R.",
    meta: "Pune · son aged 5",
  },
  {
    quote:
      "I run a small home daycare and bought this skeptically. The variety meant I didn't repeat a worksheet for three months. Worth ten times what I paid.",
    name: "Karthika M.",
    meta: "Bengaluru · daycare educator",
  },
  {
    quote:
      "The Hindi varnamala set was unexpectedly good — most printable bundles either skip Hindi or do it badly. My daughter learned all 36 consonants in six weeks.",
    name: "Rohan & Priya D.",
    meta: "Mumbai · daughter aged 4",
  },
  {
    quote:
      "Skeptical husband convinced after two weeks. Saturday mornings used to be iPad battles. Now she sits with the cut-and-paste book and asks me to time her.",
    name: "Sneha K.",
    meta: "Hyderabad · daughter aged 6",
  },
  {
    quote:
      "As a Montessori-trained mom, I'm picky. The skill mapping is real — these aren't busywork sheets, they're sequenced. The team clearly knows early childhood pedagogy.",
    name: "Dr. Meera S.",
    meta: "Chennai · twins aged 3",
  },
  {
    quote:
      "Honestly bought it for the price. Stayed for the quality. Five months in, my son finishes one workbook category before asking for the next. He thinks it's a game.",
    name: "Aakash V.",
    meta: "Gurgaon · son aged 7",
  },
];

const chatScreens = [
  {
    src: "/images/whatsapp-testimonials/1.jpeg",
    alt: "WhatsApp message from Priya Sharma — Count & Match worksheet feedback",
    caption: "Priya Sharma · son aged 4",
  },
  {
    src: "/images/whatsapp-testimonials/2.jpeg",
    alt: "WhatsApp message from Ankita Verma — Shape Tracing worksheet feedback",
    caption: "Ankita Verma · child aged 4",
  },
  {
    src: "/images/whatsapp-testimonials/3.jpeg",
    alt: "WhatsApp message from Neha — Alphabet, Counting, and Tracing worksheet feedback",
    caption: "Neha (Mom) · child aged 5",
  },
  {
    src: "/images/whatsapp-testimonials/4.jpeg",
    alt: "WhatsApp message from a parent — worksheet bundle feedback",
    caption: "Riya S. · daughter aged 5",
  },
  {
    src: "/images/whatsapp-testimonials/5.jpeg",
    alt: "WhatsApp message from a parent — worksheet bundle feedback",
    caption: "Megha P. · son aged 6",
  },
  {
    src: "/images/whatsapp-testimonials/6.jpeg",
    alt: "WhatsApp message from a parent — worksheet bundle feedback",
    caption: "Sunita J. · child aged 4",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="max-w-3xl">
        <Eyebrow>What parents say</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          8,400+ reviews. Average 4.9.
        </motion.h2>
      </div>

      {/* WhatsApp screenshots — real parent chats */}
      <div className="mt-12 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <MessageCircle
            className="h-3.5 w-3.5"
            style={{ color: "var(--accent)" }}
            aria-hidden
          />
          Straight from the WhatsApp inbox
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {chatScreens.map((c, i) => (
            <motion.figure
              key={c.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-2xl border border-border bg-card p-3 transition-all hover:border-foreground/40 hover:-translate-y-0.5"
            >
              <div className="relative aspect-9/16 w-full overflow-hidden rounded-xl bg-background">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between px-2 pb-1 text-xs text-muted-foreground">
                <span className="italic">{c.caption}</span>
                <span
                  className="inline-flex items-center gap-1 font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  <MessageCircle className="h-3 w-3" aria-hidden />
                  Verified DM
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Written reviews */}
      <div className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.name + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.08,
              ease: "easeOut",
            }}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:border-foreground/40 hover:-translate-y-0.5"
          >
            <div className="flex" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className="h-3.5 w-3.5"
                  fill="var(--accent)"
                  stroke="var(--accent)"
                />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 text-base text-foreground leading-relaxed">
              <span aria-hidden>“</span>
              {r.quote}
              <span aria-hidden>”</span>
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-medium text-foreground not-italic">
                {r.name}
              </span>
              <span className="italic text-muted-foreground">
                {" "}
                — {r.meta}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
