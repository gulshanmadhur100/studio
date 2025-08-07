import { Badge } from "@/components/ui/badge";
import { PersonalizedGreeting } from "@/components/personalized-greeting";

export function HeroSection() {
  return (
    <section className="text-center py-12 md:py-16">
      <div className="flex justify-center items-center gap-4 mb-4">
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-foreground">
          BigBul
        </h1>
        <Badge variant="outline" className="text-sm md:text-base border-accent text-accent-foreground bg-accent hover:bg-accent/90 py-1 px-3 rounded-full">
          Government Certified
        </Badge>
      </div>
      <PersonalizedGreeting />
    </section>
  );
}
