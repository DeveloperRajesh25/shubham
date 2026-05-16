import { BookOpen } from "lucide-react";
import { BRAND_NAME } from "@/lib/config";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}
function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const cols = [
  {
    title: "Product",
    links: [
      { href: "#whats-inside", label: "What's inside" },
      { href: "#pricing", label: "Pricing" },
      { href: "#preview", label: "Samples" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
                <BookOpen className="h-4 w-4" />
              </span>
              {BRAND_NAME}
            </div>
            <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
              Printable worksheets kids actually want to do.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-accent">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/60">
            © 2026 {BRAND_NAME}. Made for curious kids and tired parents.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors hover:bg-accent hover:text-white">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors hover:bg-accent hover:text-white">
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-5 flex justify-center border-t border-border pt-4 md:justify-start">
          <a
            href="https://webcros.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs text-foreground/60 transition-colors hover:text-foreground"
          >
            Developed by{" "}
            <span className="font-bold text-accent underline-offset-4 group-hover:underline">
              webcros
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
