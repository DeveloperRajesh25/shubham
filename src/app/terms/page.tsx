import { BRAND_NAME } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${BRAND_NAME}`,
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 md:py-32">
      <h1 className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        By purchasing and downloading this digital product, you agree to the following terms and conditions.
      </p>

      <div className="mt-12 space-y-10 text-foreground">
        <section>
          <h2 className="text-xl font-medium">Digital Product</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This is a digital download product. No physical item will be shipped.
          </p>
        </section>

       

        <section>
          <h2 className="text-xl font-medium">Usage Rights</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This product is for personal use and classroom use only.
          </p>
          <p className="mt-3 text-muted-foreground font-medium">You may:</p>
          <ul className="mt-2 space-y-1.5 text-muted-foreground leading-relaxed list-disc list-inside">
            <li>Print the worksheets for your own children or students</li>
            <li>Use them in a classroom or homeschool setting</li>
          </ul>
          <p className="mt-4 text-muted-foreground font-medium">You may not:</p>
          <ul className="mt-2 space-y-1.5 text-muted-foreground leading-relaxed list-disc list-inside">
            <li>Resell, share, or redistribute the files</li>
            <li>Upload the files to any website, social media, or marketplace</li>
            <li>Claim the designs as your own</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium">File Format &amp; Printing</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Files are provided in PDF format and are printable in A4 &amp; US Letter size. For best results, use a high-quality printer and paper.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Color Disclaimer</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Colors may vary slightly depending on screen and printer settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Technical Issues</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            If you face any problem with downloading or opening the files, please contact us and we will be happy to assist you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Age Recommendation</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            These worksheets are designed for children aged 2–9 years, but learning pace may vary for each child.
          </p>
        </section>
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to {BRAND_NAME}
        </a>
      </div>
    </main>
  );
}
