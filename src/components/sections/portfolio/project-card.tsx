
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";
import { FloatingCard } from "@/components/common/floating-card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <FloatingCard className="group overflow-hidden h-full flex flex-col" interactive>
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.dataAiHint || "project technology"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
           <h3 className="text-xl font-semibold text-primary-foreground mb-1">{project.title}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-sm text-foreground/70 mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-1">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-1">Key Outcomes</h4>
          <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto flex gap-2 flex-wrap">
          {project.liveLink && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          )}
          {project.caseStudyLink && (
            <Button variant="default" size="sm" asChild>
              <Link href={project.caseStudyLink}>
                Case Study <FileText className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </FloatingCard>
  );
}
