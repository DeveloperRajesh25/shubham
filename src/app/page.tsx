import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Problem } from "@/components/problem";
import { WhatsInside } from "@/components/whats-inside";
import { Worksheets } from "@/components/worksheets";
import { WorksheetPreview } from "@/components/worksheet-preview";
import { HowItWorks } from "@/components/how-it-works";
import { Comparison } from "@/components/comparison";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Videos } from "@/components/videos";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <WhatsInside />
        <Worksheets />
        <WorksheetPreview />
        <HowItWorks />
        <Comparison />
        <Pricing />
        <Testimonials />
        <Videos />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
