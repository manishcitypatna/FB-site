
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Building, Zap, Users, Award, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const timelineEventsData: TimelineEvent[] = [
  { year: "2020", title: "Inception", description: "GSMA Technologies founded with a vision to revolutionize IT solutions.", Icon: Building },
  { year: "2021", title: "First AI Project", description: "Successfully delivered our first major AI-powered automation project.", Icon: Zap },
  { year: "2022", title: "Team Expansion", description: "Grew our team of experts, enhancing capabilities in cloud and web development.", Icon: Users },
  { year: "2023", title: "Key Partnerships", description: "Became a verified n8n partner and forged strategic alliances.", Icon: Award },
  { year: "2024", title: "Future Forward", description: "Expanding into new AI frontiers and scaling global operations.", Icon: Rocket },
];

export function CompanyTimeline() {
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setVisibleEvents((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      eventRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Our Journey of Innovation</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Tracing our milestones from a bold idea to a trusted technology partner.
          </p>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
          
          {timelineEventsData.map((event, index) => (
            <div
              key={index}
              ref={(el) => (eventRefs.current[index] = el)}
              data-index={index}
              className={`mb-12 md:mb-16 flex md:items-center w-full transition-all duration-1000 ease-out ${visibleEvents.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="hidden md:flex w-1/2"></div> {/* Spacer for desktop layout */}
              <div className="relative w-full md:w-1/2">
                {/* Dot on the line */}
                <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 -translate-y-1/2 
                  group-hover:scale-125 transition-transform z-10"
                  style={index % 2 === 0 ? { right: 'calc(100% - 8px)', left: 'auto' } : { left: 'calc(0% - 8px)' }}>
                </div>

                <div className={`p-6 rounded-lg shadow-xl glassmorphic border-l-4 md:border-none ${index % 2 === 0 ? 'md:border-r-4 border-primary' : 'md:border-l-4 border-accent'} `}>
                  <div className="flex items-center mb-3">
                    <event.Icon className={`h-8 w-8 mr-3 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                    <span className={`text-2xl font-bold ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>{event.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-foreground/80">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

