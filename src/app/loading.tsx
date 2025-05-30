'use client';

import { Zap } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-[100]">
      <div className="relative flex items-center justify-center">
        <Zap className="h-20 w-20 text-primary animate-ping absolute opacity-50" />
        <Zap className="h-16 w-16 text-primary" />
      </div>
      <p className="mt-6 text-lg font-semibold text-foreground animate-pulse">
        Loading Innovationscape...
      </p>
      <div className="mt-3 w-32 h-2 bg-primary/20 rounded-full overflow-hidden">
        <div className="h-full bg-primary animate-loading-bar"></div>
      </div>
      <style jsx>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
}
