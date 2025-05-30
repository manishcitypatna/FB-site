
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Subtle animated shapes */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/30 rounded-full filter blur-3xl animate-pulse animation-delay-2000"
          style={{ animationDuration: '8s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent/30 rounded-full filter blur-3xl animate-pulse animation-delay-4000"
          style={{ animationDuration: '10s' }}
        ></div>
         {/* New subtle background element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
            <Zap className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] text-primary/30 animate-spin-slow" style={{ animationDuration: '60s' }} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6">
            <span className="block">Future-Proof Your Business</span>
            <span className="block text-primary">with AI-Powered IT Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            GSMA Technologies pioneers cutting-edge AI and IT innovations to propel your business into the future. Let's build smarter, faster, and more efficient solutions together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
              <Link href="/contact">
                Book Free Strategy Call
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group text-lg px-8 py-6 rounded-full shadow-md hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105">
              <Link href="/portfolio">
                Explore Our Work
                <Zap className="ml-2 h-5 w-5 group-hover:fill-accent group-hover:text-accent transition-colors" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Optional: subtle scroll down indicator or more elaborate animation */}
      <style jsx global>{`
        .animate-pulse {
          animation-timing-function: ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
