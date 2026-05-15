"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Star, ShieldCheck, Download, Zap } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 80% -10%, #FFE4CC 0%, transparent 60%), radial-gradient(800px 500px at 0% 100%, #FEF3C7 0%, transparent 55%), var(--background)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center px-6 py-6 md:py-10 lg:py-12">
        <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-accent-strong/20 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-strong shadow-sm sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-strong opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-strong" />
              </span>
              75% OFF — Limited Time
            </div>

            <h1 className="mt-3 text-[26px] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[40px] lg:text-5xl">
              10,000+ Worksheets to Keep Your Child{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Engaged</span>
                <span className="absolute inset-x-0 bottom-1 h-2.5 z-0 bg-highlight md:h-3" />
              </span>
              , Learning &amp; Growing
            </h1>

            <p className="mt-3 max-w-xl text-sm text-foreground/70 md:text-base leading-snug">
              The screen-free way your kid actually wants to learn. Designed by
              educators, loved by kids — download once, print forever.
            </p>

            {/* Pricing inline */}
            <div className="mt-4 flex items-baseline gap-2 sm:gap-3">
              <span className="text-base text-foreground/40 line-through sm:text-xl">
                ₹599
              </span>
              <span className="text-4xl font-extrabold text-accent-strong sm:text-5xl">
                ₹149
              </span>
              <span className="rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-bold text-success sm:text-xs">
                SAVE 75%
              </span>
            </div>

            <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="group cta-glow"
              >
                GET KIDS WORKSHEETS NOW
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </ButtonLink>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-foreground/70 sm:text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-highlight stroke-highlight"
                    />
                  ))}
                </div>
                <span className="font-bold text-foreground">4.9</span>
                <span>· 32,000+ parents</span>
              </div>
            </div>

            {/* Quick trust pills */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-foreground/80 shadow-sm ring-1 ring-border sm:text-xs">
                <Zap className="h-3 w-3 text-accent" /> Instant Delivery
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-foreground/80 shadow-sm ring-1 ring-border sm:text-xs">
                <Download className="h-3 w-3 text-accent" /> Lifetime Access
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-foreground/80 shadow-sm ring-1 ring-border sm:text-xs">
                <ShieldCheck className="h-3 w-3 text-success" /> Secure
              </span>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-1 md:order-2"
          >
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
              {/* Floating badges */}
              <div className="absolute -left-2 top-4 z-10 -rotate-6 rounded-xl bg-accent-strong px-2.5 py-1.5 text-white shadow-xl sm:-left-4">
                <div className="text-lg font-extrabold leading-none sm:text-xl">10,000+</div>
                <div className="text-[8px] font-bold uppercase tracking-wider sm:text-[10px]">Worksheets</div>
              </div>
              <div className="absolute -right-1 bottom-8 z-10 rotate-6 rounded-xl bg-success px-2.5 py-1.5 text-white shadow-xl sm:-right-3">
                <div className="text-base font-extrabold leading-none sm:text-lg">12</div>
                <div className="text-[8px] font-bold uppercase tracking-wider sm:text-[10px]">Categories</div>
              </div>
              <div className="absolute right-3 top-1 z-10 rotate-12 rounded-xl bg-highlight px-2.5 py-1.5 text-foreground shadow-xl">
                <div className="text-xs font-extrabold leading-none sm:text-sm">Ages 2–8</div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl">
                <Image
                  src="/images/book-poster-1.jpeg"
                  alt="10,000+ Kids Worksheets — Ultimate Mega Learning Bundle"
                  fill
                  sizes="(max-width: 768px) 70vw, 360px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
