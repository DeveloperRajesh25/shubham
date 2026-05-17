"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WorksheetCategoryBox } from "@/components/worksheet-category-box";

interface WorksheetCategory {
  name: string;
  images: string[];
}

export function WorksheetsClient({
  categories,
}: {
  categories: WorksheetCategory[];
}) {
  return (
    <section
      id="worksheets"
      className="mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow color="highlight">All Categories</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Explore <span className="text-accent">All Worksheets</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-3 max-w-2xl text-base text-foreground/70 md:text-lg"
        >
          {categories.length} categories of fun and engaging activities for kids.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <WorksheetCategoryBox
            key={category.name}
            name={category.name}
            images={category.images}
          />
        ))}
      </div>
    </section>
  );
}
