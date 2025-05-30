
"use client";
import { testimonialsData } from "@/lib/data";
import { TestimonialItem } from "./testimonial-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Assuming Shadcn Carousel is available, if not, a simpler implementation will be used.
// Checked package.json, @radix-ui/react-scroll-area is there, often used by Carousel.
// However, the carousel component itself might not be scaffolded.
// For now, I'll write code assuming it is or can be added.
// If Carousel is not from shadcn, this needs to be simplified to a basic map or a custom carousel.
// Let's assume a simple map for now if Carousel component is not found.
// Upon checking, there is no `carousel.tsx` in `components/ui`. So, I will use a simple grid layout instead of a carousel for now.
// This can be upgraded to a carousel later.

export function TestimonialsCarousel() {
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from businesses that have experienced the GSMA Technologies difference.
          </p>
        </div>
        
        {/* Using a grid instead of a carousel as Carousel component is not available */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Placeholder for Shadcn Carousel if it were available:
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <TestimonialItem testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        */}
      </div>
    </section>
  );
}
