
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          Meet the Innovators at <span className="text-primary">GSMA Technologies</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto">
          We are a passionate team of thinkers, creators, and problem-solvers dedicated to pushing the boundaries of technology and delivering exceptional value to our clients.
        </p>
        {/* Placeholder for AI-generated team visual or actual team photo */}
        <div className="relative max-w-4xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-2xl glassmorphic">
           <Image 
            src="https://placehold.co/1200x675.png" 
            alt="GSMA Technologies Team" 
            fill
            className="object-cover"
            data-ai-hint="team technology office"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-8">
            <p className="text-2xl font-semibold text-white text-center">Pioneering the Future, Together.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
