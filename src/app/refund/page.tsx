import { BRAND_NAME } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Refund Policy — ${BRAND_NAME}`,
};

export default function RefundPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 md:py-32">
      <h1 className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
        Refund Policy
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Thank you for purchasing our digital products.
      </p>

      <div className="mt-12 space-y-10 text-foreground">
        <section>
          <h2 className="text-xl font-medium">Digital Product Policy</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            All products sold are digital downloads. No physical items are shipped.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">No Refunds</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Due to the nature of digital products, all sales are final. Once the files are downloaded or accessed, refunds, returns, or exchanges are not possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Order Cancellation</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Orders cannot be canceled after purchase because the digital files are delivered instantly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Exceptions — Refunds Will Not Be Provided For</h2>
          <ul className="mt-3 space-y-1.5 text-muted-foreground leading-relaxed list-disc list-inside">
            <li>Change of mind after purchase</li>
            <li>Accidental purchases</li>
            <li>Compatibility or printer issues</li>
            <li>Failure to read product descriptions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium">Technical Support</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            If you experience any issues with downloading the files, opening the PDF, or file corruption — please contact us and we will gladly help resolve the issue.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Product Responsibility</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            It is the customer&apos;s responsibility to review the product description, file format, and requirements before purchasing.
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
