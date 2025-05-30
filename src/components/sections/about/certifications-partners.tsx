
import Image from "next/image";
import { certificationsData } from "@/lib/data";

export function CertificationsPartners() {
  if (!certificationsData || certificationsData.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Certifications & Trusted Partners
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Our commitment to quality and collaboration, recognized by industry leaders.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="p-4 rounded-lg transition-transform hover:scale-110" title={cert.name}>
              <Image
                src={cert.logoUrl}
                alt={cert.name}
                width={120}
                height={60}
                className="object-contain h-12 md:h-16 opacity-80 hover:opacity-100 transition-opacity duration-300"
                data-ai-hint={cert.dataAiHint || "logo"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
