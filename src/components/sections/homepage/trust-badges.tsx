
import { trustBadgesData } from "@/lib/data";
import { FloatingCard } from "@/components/common/floating-card";

export function TrustBadges() {
  if (!trustBadgesData || trustBadgesData.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {trustBadgesData.map((badge) => (
            <div key={badge.id} className="flex items-center gap-3 p-3 rounded-lg transition-transform hover:scale-105 float-animation"
                 style={{ animationDelay: `${badge.id.charCodeAt(1) * 100}ms` }}>
              <badge.Icon className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">{badge.text}</p>
                {badge.value && <p className="text-sm text-primary font-bold">{badge.value}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
