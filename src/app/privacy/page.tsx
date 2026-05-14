import { BRAND_NAME } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy — ${BRAND_NAME}`,
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 md:py-32">
      <h1 className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        We respect your privacy and are committed to protecting your personal information.
      </p>

      <div className="mt-12 space-y-10 text-foreground">
        <section>
          <h2 className="text-xl font-medium">Information We Collect</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            When you purchase or download our digital products, we may collect:
          </p>
          <ul className="mt-3 space-y-1.5 text-muted-foreground leading-relaxed list-disc list-inside">
            <li>Your name</li>
            <li>Email address</li>
            <li>Basic order details</li>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This information is collected only to process your order, deliver the digital product, and provide customer support.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">How We Use Your Information</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Your personal information is used strictly for order fulfillment, download access, and customer communication. We do not sell, rent, or share your personal information with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Children&apos;s Privacy</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our products are designed for children, but purchases are intended to be made by adults (parents, teachers, or guardians). We do not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Payment Security</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            All payments are processed through secure third-party payment gateways. We do not store or have access to your payment details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Cookies</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our website or platform may use cookies to improve user experience. Cookies do not collect personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Data Protection</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We take reasonable steps to protect your personal data from unauthorized access, misuse, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Contact</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy or your personal data, please contact us through the platform where you purchased the product.
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
