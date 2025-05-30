
import { projectsData } from "@/lib/data";
import { ProjectCard } from "@/components/sections/portfolio/project-card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Discover a selection of innovative projects by GSMA Technologies, showcasing our expertise in AI, automation, web development, and more.',
};

export default function PortfolioPage() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Showcasing Our <span className="text-primary">Innovations</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore a curated selection of our projects, demonstrating our commitment to excellence and cutting-edge technology in solving real-world business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
