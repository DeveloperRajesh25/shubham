"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!open) return null;
  return (
    <div className="relative z-50 flex h-10 items-center justify-center bg-[var(--accent-strong)] px-12 text-center text-xs font-bold text-white sm:text-sm">
      <span className="truncate">
        🔥 LIMITED LAUNCH OFFER — 85% OFF ends in{" "}
        <span className="tabular-nums tracking-wider">
          {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
        </span>
      </span>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
