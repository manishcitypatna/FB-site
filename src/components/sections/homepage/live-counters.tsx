
"use client";

import { companyStatsData } from "@/lib/data";
import { FloatingCard } from "@/components/common/floating-card";
import React, { useEffect, useState } from 'react';

export function LiveCounters() {
  // Basic implementation, no actual "live" counting animation for simplicity
  // This can be enhanced with libraries like react-countup if needed
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render placeholders or nothing to avoid hydration mismatch if values are dynamic
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {companyStatsData.map((stat) => (
              <div key={stat.id} className="glassmorphic rounded-lg p-6 text-center">
                <div className="h-12 w-12 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                  <stat.Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 animate-pulse bg-muted h-8 w-20 mx-auto rounded"></div>
                <p className="text-sm text-foreground/70 animate-pulse bg-muted h-4 w-32 mx-auto mt-2 rounded"></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Impact by the Numbers
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Delivering tangible results and driving success for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {companyStatsData.map((stat, index) => (
            <FloatingCard 
              key={stat.id} 
              className="text-center"
              style={{ animation: `float 3s ease-in-out infinite ${index * 0.2}s` }}
            >
              <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
                <stat.Icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-foreground/80">{stat.label}</p>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
