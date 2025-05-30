
import Link from "next/link";
import type { Service } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FloatingCard } from "@/components/common/floating-card";

interface InteractiveServiceCardProps {
  service: Service;
}

export function InteractiveServiceCard({ service }: InteractiveServiceCardProps) {
  return (
    <FloatingCard className="group h-full flex flex-col transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-primary/20" interactive>
      <div className="p-4 bg-primary/10 rounded-full self-start mb-6 group-hover:bg-primary/20 transition-colors">
        <service.Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
      <p className="text-foreground/70 text-base mb-6 flex-grow">{service.description}</p>
      <Button variant="outline" asChild className="mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Link href={service.detailsLink}>
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </FloatingCard>
  );
}
