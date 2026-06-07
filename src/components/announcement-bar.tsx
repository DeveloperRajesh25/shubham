"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);

  const message = "( Soft Copy ) 14,000+ Kids Printable Worksheets.";
  const items = Array.from({ length: 6 }, () => message);

  if (!open) return null;
  return (
    <div className="relative z-50 flex h-10 items-center overflow-hidden bg-[var(--accent-strong)] px-12 text-center text-xs font-bold text-white sm:text-sm">
      <div className="announcement-marquee">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index > 0}
            className="announcement-marquee-item"
          >
            {item}
          </span>
        ))}
      </div>
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
