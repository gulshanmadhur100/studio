import { PersonalizedGreeting } from "@/components/personalized-greeting";

export function HeroSection() {
  return (
    <section className="text-center py-16 md:py-24">
      <div className="flex justify-center items-center gap-4 mb-4">
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-foreground">
          BigBul
        </h1>
      </div>
      <PersonalizedGreeting />
    </section>
  );
}
