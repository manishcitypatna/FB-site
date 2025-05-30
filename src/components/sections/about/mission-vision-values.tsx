
import { FloatingCard } from "@/components/common/floating-card";
import { Eye, Target, Heart } from "lucide-react";

const corePrinciples = [
  {
    Icon: Target,
    title: "Our Mission",
    text: "To empower businesses with transformative AI and IT solutions, fostering innovation, efficiency, and sustainable growth.",
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    text: "To be a global leader in AI-driven business transformation, recognized for our cutting-edge solutions and client-centric approach.",
    colorClass: "text-accent",
    bgClass: "bg-accent/10",
  },
  {
    Icon: Heart, // Representing core values / integrity
    title: "Our Values",
    text: "Innovation, Integrity, Collaboration, Excellence, and Customer Obsession drive everything we do.",
     colorClass: "text-yellow-500", // A distinct color for values
     bgClass: "bg-yellow-500/10",
  },
];

export function MissionVisionValues() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Guiding Principles
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            The foundation of our culture and the compass for our actions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corePrinciples.map((principle, index) => (
            <FloatingCard key={index} className="text-center group h-full flex flex-col" interactive>
              <div className={`p-4 ${principle.bgClass} rounded-full mb-6 inline-block self-center group-hover:scale-110 transition-transform`}>
                <principle.Icon className={`h-10 w-10 ${principle.colorClass}`} />
              </div>
              <h3 className={`text-2xl font-semibold ${principle.colorClass} mb-3`}>{principle.title}</h3>
              <p className="text-foreground/70 text-sm flex-grow">{principle.text}</p>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
