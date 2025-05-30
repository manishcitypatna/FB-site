
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface FloatingCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export function FloatingCard({ children, className, interactive = false, ...props }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "glassmorphic rounded-xl p-6 shadow-lg",
        interactive && "transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
