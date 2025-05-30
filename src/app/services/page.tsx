
import { servicesData } from "@/lib/data";
import { InteractiveServiceCard } from "@/components/sections/services/interactive-service-card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the innovative AI and IT solutions offered by GSMA Technologies, including AI Workflow Automation, GPT Chatbots, Web App Development, Data Dashboards, and Cloud Infrastructure.',
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Our Suite of <span className="text-primary">Innovative Services</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            At GSMA Technologies, we offer a comprehensive range of cutting-edge services designed to empower your business, enhance efficiency, and drive growth in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesData.map((service) => (
            <InteractiveServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 md:mt-20 text-center">
            <p className="text-xl text-foreground/80">
                Can't find what you're looking for?
            </p>
            <p className="mt-2 text-lg text-foreground/70">
                We specialize in custom solutions. <a href="/contact" className="text-primary hover:underline font-semibold">Contact us</a> to discuss your unique project requirements.
            </p>
        </div>
      </div>
    </div>
  );
}
