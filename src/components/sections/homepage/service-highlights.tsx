
import { servicesData } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FloatingCard } from "@/components/common/floating-card";

export function ServiceHighlights() {
  // Show first 3 services as highlights
  const highlightedServices = servicesData.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Core Expertise
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We deliver innovative solutions across a spectrum of AI and IT domains to accelerate your growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedServices.map((service) => (
            <FloatingCard key={service.id} className="flex flex-col items-center text-center group" interactive>
              <div className="p-4 bg-primary/10 rounded-full mb-6 inline-block group-hover:bg-primary/20 transition-colors">
                <service.Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 text-sm mb-6 flex-grow">{service.description}</p>
              <Button variant="link" asChild className="text-primary group-hover:underline">
                <Link href={service.detailsLink}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FloatingCard>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
