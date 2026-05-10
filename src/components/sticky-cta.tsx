"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/config";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Trigger after roughly the hero (90vh)
      setShow(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-4 z-40 md:hidden"
          style={{
            filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.12))",
          }}
        >
          <div className="flex items-center justify-between gap-3 rounded-full border border-border bg-card p-2 pl-5">
            <div className="flex items-baseline gap-2 text-sm">
              <span className="font-display text-xl text-foreground">₹499</span>
              <span className="text-xs text-muted-foreground line-through">
                ₹1,999
              </span>
            </div>
            <a
              href={CHECKOUT_URL}
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              Get bundle
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
