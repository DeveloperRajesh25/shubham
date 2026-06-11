import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";

const demoUrl =
  "https://drive.google.com/drive/folders/1y-0oY37q_FEF8WcXj6f_KBAhSPvxFvu9";

export function FreeDemo() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-6 pb-8 md:pt-10 md:pb-10">
      <div className="overflow-hidden rounded-4xl border border-(--accent)/15 bg-[linear-gradient(135deg,rgba(255,250,240,0.98),rgba(255,240,217,0.98))] p-6 shadow-[0_20px_60px_rgba(249,115,22,0.12)] md:p-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow color="accent">Free Preview</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            See Inside the Library Before You Buy!
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
            Open a free Google Drive demo to preview the worksheet collection,
            layout, and the quality parents get before buying.
          </p>

          <ButtonLink
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            size="lg"
            className="mt-6 min-w-65 px-6"
          >
            📥 View Free Demo (Google Drive)
            <ArrowRight className="h-5 w-5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}