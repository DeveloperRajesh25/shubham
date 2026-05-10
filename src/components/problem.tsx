"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Stat {
  value: string;
  numericPart: number | null;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "45 min",
    numericPart: 45,
    suffix: " min",
    label: "average daily screen time gained back per child",
  },
  {
    value: "0 prep",
    numericPart: 0,
    suffix: " prep",
    label: "no laminating, no Pinterest scrolling, no last-minute searching",
  },
  {
    value: "1 click",
    numericPart: 1,
    suffix: " click",
    label: "download once, print whenever, forever",
  },
];

function CountUp({
  to,
  suffix = "",
  inView,
}: {
  to: number;
  suffix?: string;
  inView: boolean;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setVal(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
}

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="text-center">
        <Eyebrow className="justify-center">The parent problem</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          You didn&apos;t sign up to be a content negotiator with a 4-year-old.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg leading-relaxed"
        >
          Screens won the easy game. But you know the cost — shorter attention
          spans, tantrums when devices are taken away, learning that doesn&apos;t
          stick. The alternative — finding fresh, engaging activities every
          single day — is a part-time job nobody asked for.
        </motion.p>
      </div>

      <div
        ref={ref}
        className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 text-left transition-colors hover:border-foreground/40"
          >
            <div className="font-display text-5xl leading-none text-foreground md:text-6xl">
              {s.numericPart !== null ? (
                <CountUp
                  to={s.numericPart}
                  suffix={s.suffix}
                  inView={inView}
                />
              ) : (
                s.value
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
