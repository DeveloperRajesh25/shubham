"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CHECKOUT_URL, BRAND_NAME } from "@/lib/config";
import { cn } from "@/lib/utils";

const links = [
  { href: "#whats-inside", label: "What's Inside" },
  { href: "#skills", label: "Skills" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-2xl tracking-tight text-foreground"
        >
          {BRAND_NAME}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            className="group"
          >
            Get the Bundle
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </ButtonLink>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-foreground/5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-30 flex flex-col bg-background md:hidden">
          <nav
            className="flex flex-col gap-2 px-6 py-8"
            aria-label="Mobile primary"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-foreground py-2"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-10">
            <ButtonLink
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full justify-center group"
            >
              Get the Bundle
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
