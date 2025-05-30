
"use client";
import Image from "next/image";
import { clientLogosData } from "@/lib/data";

export function ClientLogosCarousel() {
  if (!clientLogosData || clientLogosData.length === 0) {
    return null;
  }

  // Duplicate logos for a smoother infinite scroll illusion
  const duplicatedLogos = [...clientLogosData, ...clientLogosData];

  return (
    <section className="py-16 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-semibold text-center text-foreground mb-10">
          Trusted by Industry Leaders
        </h2>
        <div className="relative w-full">
          <div className="animate-marquee whitespace-nowrap flex">
            {duplicatedLogos.map((client, index) => (
              <div key={`${client.id}-${index}`} className="inline-block mx-6 md:mx-10 flex-shrink-0">
                <Image
                  src={client.logoUrl}
                  alt={client.name}
                  width={150}
                  height={60}
                  className="object-contain h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  data-ai-hint={client.dataAiHint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
