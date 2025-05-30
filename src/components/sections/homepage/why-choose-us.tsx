
import { FloatingCard } from "@/components/common/floating-card";
import { Zap, Settings, BrainCircuit, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: Zap,
    title: "Blazing Speed",
    description: "Rapid deployment and lightning-fast performance for all our solutions.",
  },
  {
    Icon: Settings,
    title: "Custom Solutions",
    description: "Tailor-made strategies and applications designed specifically for your unique business needs.",
  },
  {
    Icon: BrainCircuit,
    title: "AI Expertise",
    description: "Leverage the power of cutting-edge AI with our team of experienced specialists.",
  },
  {
    Icon: ShieldCheck,
    title: "Verified n8n Partner",
    description: "Certified expertise in n8n workflow automation, ensuring quality and reliability.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Why Partner with GSMA Technologies?
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We're not just a vendor; we're your innovation partner, committed to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FloatingCard key={index} className="text-center group" interactive>
              <div className="p-4 bg-accent/10 rounded-full mb-6 inline-block group-hover:bg-accent/20 transition-colors">
                <feature.Icon className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
