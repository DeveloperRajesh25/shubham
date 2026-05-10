"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-50 flex h-10 items-center justify-center bg-foreground px-12 text-center text-sm text-background">
      <span className="truncate">
        Limited launch offer — 75% off ends soon.
      </span>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background cursor-pointer"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
