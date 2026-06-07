"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Review {
  quote: string;
  name: string;
  meta: string;
}

const reviews: Review[] = [
  {
    quote:
      "The content variety is excellent and keeps my child productively busy. It’s challenging without being frustrating. Best investment for learning while having fun!",
    name: "Amit J.",
    meta: "Hyderabad • parent",
  },
  {
    quote:
      "As an educator and a mom, I’m highly impressed by the variety. From logical thinking to puzzles, everything is well-designed. My daughter asks for a new page every day!",
    name: "Priyanka P.",
    meta: "Bengaluru • educator",
  },
  {
    quote:
      "Value for money! The phonics and math worksheets are perfect. They make learning so much fun and easy. Love that I can print them anytime for practice.",
    name: "Rahul V.",
    meta: "Mumbai • dad",
  },
  {
    quote:
      "The activities are engaging and educational at the same time. My daughter looks forward to using it every day, and I can see a noticeable improvement in her learning skills.",
    name: "Priya S.",
    meta: "Bengaluru • parent",
  },
  {
    quote:
      "Very well-designed content that keeps children interested and motivated. It’s a great balance of fun and learning, and the progress has been impressive.",
    name: "Rajesh K.",
    meta: "Ahmedabad • parent",
  },
  {
    quote:
      "My son enjoys every activity and stays focused for longer periods. The quality of the learning material is outstanding and worth every penny.",
    name: "Neha M.",
    meta: "Jaipur • parent",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-8 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Reviews
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-3 max-w-2xl text-base text-foreground/70 md:text-lg"
        >
          What parents and educators are saying.
        </motion.p>
      </div>

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
