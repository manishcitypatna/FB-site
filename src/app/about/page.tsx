
import { AboutHero } from "@/components/sections/about/about-hero";
// import { TeamVisuals } from "@/components/sections/about/team-visuals"; // Removed import
import { MissionVisionValues } from "@/components/sections/about/mission-vision-values";
import { CertificationsPartners } from "@/components/sections/about/certifications-partners";
import { CompanyTimeline } from "@/components/sections/about/company-timeline";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about GSMA Technologies, our mission, vision, values, and the innovative team driving our AI and IT solutions.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVisionValues />
      <CompanyTimeline />
      {/* Removed TeamVisuals section
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <TeamVisuals />
        </div>
      </section>
      */}
      <CertificationsPartners />
       <section className="py-16 md:py-24 text-center bg-gradient-to-t from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            We are always looking for passionate talent and exciting collaborations. If our vision resonates with you, let's connect.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Work With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
