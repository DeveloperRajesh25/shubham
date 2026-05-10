import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Problem } from "@/components/problem";
import { SolutionBento } from "@/components/solution-bento";
import { WhatsInside } from "@/components/whats-inside";
import { WorksheetPreview } from "@/components/worksheet-preview";
import { SkillsGrid } from "@/components/skills-grid";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Comparison } from "@/components/comparison";
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
        <SolutionBento />
        <WhatsInside />
        <WorksheetPreview />
        <SkillsGrid />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
