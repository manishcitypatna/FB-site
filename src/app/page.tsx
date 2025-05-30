
import { HeroSection } from "@/components/sections/homepage/hero-section";
import { ServiceHighlights } from "@/components/sections/homepage/service-highlights";
import { TrustBadges } from "@/components/sections/homepage/trust-badges";
import { LiveCounters } from "@/components/sections/homepage/live-counters";
import { ClientLogosCarousel } from "@/components/sections/homepage/client-logos-carousel";
import { TestimonialsCarousel } from "@/components/sections/homepage/testimonials-carousel";
import { WhyChooseUs } from "@/components/sections/homepage/why-choose-us"; // New component
import { FloatingCard } from "@/components/common/floating-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <ServiceHighlights />
      <LiveCounters />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <ClientLogosCarousel />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FloatingCard className="max-w-3xl mx-auto" interactive>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Let's co-create the future. Partner with GSMA Technologies for innovative AI and IT solutions that drive real results.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FloatingCard>
        </div>
      </section>
    </>
  );
}
