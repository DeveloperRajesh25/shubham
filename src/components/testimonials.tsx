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
      "My 5-year-old asked for 'one more page' for the first time in his life. The phonics worksheets hit the right level — challenging without being frustrating.",
    name: "Anita R.",
    meta: "Pune · son aged 5",
  },
  {
    quote:
      "The variety is incredible! From alphabet to math to puzzles — everything is there. My son improved so much in just 2 weeks.",
    name: "Karthika M.",
    meta: "Bengaluru · educator",
  },
  {
    quote:
      "Worth every rupee! The quality is excellent and my kids are learning while having fun. No more screen addiction.",
    name: "Sneha K.",
    meta: "Hyderabad · daughter 6",
  },
];

const chatScreens = [
  { src: "/images/whatsapp-testimonials/1.jpeg", caption: "Priya · son 4" },
  { src: "/images/whatsapp-testimonials/2.jpeg", caption: "Ankita · child 4" },
  { src: "/images/whatsapp-testimonials/3.jpeg", caption: "Neha · child 5" },
  { src: "/images/whatsapp-testimonials/4.jpeg", caption: "Riya · daughter 5" },
  { src: "/images/whatsapp-testimonials/5.jpeg", caption: "Megha · son 6" },
  { src: "/images/whatsapp-testimonials/6.jpeg", caption: "Sunita · child 4" },
];

export function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow color="success">
          <MessageCircle className="h-3 w-3" /> WhatsApp love
        </Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Loved, Trusted &amp;{" "}
          <span className="text-success">Shared on WhatsApp</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-3 max-w-2xl text-base text-foreground/70 md:text-lg"
        >
          Join 32,000+ happy parents across India.
        </motion.p>
      </div>

      {/* WhatsApp screenshots */}
      <div className="mt-10 grid grid-cols-3 gap-2.5 sm:gap-3 md:grid-cols-6 md:gap-4">
        {chatScreens.map((c, i) => (
          <motion.figure
            key={c.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: (i % 6) * 0.06,
              ease: "easeOut",
            }}
            className="group overflow-hidden rounded-xl border-2 border-border bg-white p-1.5 transition-all hover:-translate-y-1 hover:border-success/40 hover:shadow-lg sm:rounded-2xl sm:p-2"
          >
            <div className="relative aspect-9/16 w-full overflow-hidden rounded-lg bg-background sm:rounded-xl">
              <Image
                src={c.src}
                alt={`WhatsApp testimonial from ${c.caption}`}
                fill
                sizes="(max-width: 640px) 33vw, 180px"
                className="object-contain"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-1.5 flex flex-col items-start gap-0.5 px-1 pb-1 text-[10px] sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
              <span className="truncate font-medium italic text-foreground/70">
                {c.caption}
              </span>
              <span className="inline-flex shrink-0 items-center gap-0.5 font-bold text-success">
                <MessageCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                Verified
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Written reviews */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.name + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: "easeOut",
            }}
            className="flex flex-col rounded-2xl border-2 border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <div className="flex" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className="h-4 w-4 fill-highlight stroke-highlight"
                />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm text-foreground leading-relaxed">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-bold text-foreground not-italic">
                {r.name}
              </span>
              <span className="italic text-foreground/60"> — {r.meta}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
