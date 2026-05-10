"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BRAND_NAME } from "@/lib/config";

interface Row {
  criteria: string;
  ours: { text: string; check?: boolean };
  free: string;
  workbook: string;
}

const rows: Row[] = [
  {
    criteria: "Quantity",
    ours: { text: "10,000+ pages", check: true },
    free: "Scattered, inconsistent",
    workbook: "200–400 per book",
  },
  {
    criteria: "Curation",
    ours: { text: "Skill-mapped, age-graded", check: true },
    free: "—",
    workbook: "Per book only",
  },
  {
    criteria: "Updates",
    ours: { text: "Quarterly, free", check: true },
    free: "—",
    workbook: "Buy a new book",
  },
  {
    criteria: "Cost over 3 years",
    ours: { text: "₹499 once", check: true },
    free: "“Free” + hours of search",
    workbook: "₹8,000+",
  },
  {
    criteria: "Hindi content",
    ours: { text: "Included", check: true },
    free: "Rare",
    workbook: "Separate purchase",
  },
  {
    criteria: "Print quality",
    ours: { text: "High-res, ink-friendly", check: true },
    free: "Variable",
    workbook: "—",
  },
  {
    criteria: "Money-back",
    ours: { text: "30-day guarantee", check: true },
    free: "—",
    workbook: "Often non-returnable",
  },
];

export function Comparison() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-3xl">
        <Eyebrow>How we compare</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          Why parents pick us over the alternatives.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-12 overflow-hidden rounded-2xl border border-border bg-card md:mt-16"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/3 px-5 py-5 text-xs uppercase tracking-[0.2em] text-muted-foreground font-normal md:px-8">
                  &nbsp;
                </th>
                <th
                  className="px-5 py-5 text-sm font-medium text-foreground md:px-8"
                  style={{ background: "var(--accent-soft)" }}
                >
                  {BRAND_NAME} (us)
                </th>
                <th className="px-5 py-5 text-sm font-medium text-muted-foreground md:px-8">
                  Free PDFs online
                </th>
                <th className="px-5 py-5 text-sm font-medium text-muted-foreground md:px-8">
                  Physical workbooks
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.criteria}
                  className={i < rows.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="px-5 py-5 text-sm font-medium text-foreground md:px-8">
                    {row.criteria}
                  </td>
                  <td
                    className="px-5 py-5 text-sm text-foreground md:px-8"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    <span className="flex items-start gap-2">
                      {row.ours.check && (
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: "var(--accent)" }}
                        />
                      )}
                      <span>{row.ours.text}</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 text-sm text-muted-foreground md:px-8">
                    {row.free}
                  </td>
                  <td className="px-5 py-5 text-sm text-muted-foreground md:px-8">
                    {row.workbook}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
