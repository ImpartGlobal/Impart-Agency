import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { WhyImpart } from "@/components/sections/WhyImpart";
import { Testimonials } from "@/components/sections/Testimonials";
import { Support } from "@/components/sections/Support";
import { HomepageContact } from "@/components/sections/HomepageContact";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesGrid />
      <WhyImpart />
      <Process />
      <CaseStudies />
      <Stats />
      <Testimonials />
      <Support />
      <HomepageContact />
    </>
  );
}
