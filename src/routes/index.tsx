import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { Connections } from "@/components/home/Connections";
import { Practices } from "@/components/home/Practices";
import { HowWeWork } from "@/components/home/HowWeWork";
import { CountryPlatforms } from "@/components/home/CountryPlatforms";
import { ThailandPreview } from "@/components/home/ThailandPreview";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Partners } from "@/components/home/Partners";
import { ImpactFramework } from "@/components/home/ImpactFramework";
import { Insights } from "@/components/home/Insights";
import { ClosingInvitation } from "@/components/home/ClosingInvitation";

const TITLE = "Kampung Indonesia — International Education & Community Development";
const DESCRIPTION =
  "Kampung Indonesia builds locally rooted country platforms connecting education, communities, knowledge, and international partnerships.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <WhoWeAre />
        <Connections />
        <Practices />
        <HowWeWork />
        <CountryPlatforms />
        <ThailandPreview />
        <Ecosystem />
        <Partners />
        <ImpactFramework />
        <Insights />
        <ClosingInvitation />
      </main>
      <SiteFooter />
    </div>
  );
}
