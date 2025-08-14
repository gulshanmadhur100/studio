import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-foreground mb-4">
          BigBul Services
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Your partner in technology, training, and trading success.
        </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button asChild size="lg">
          <Link href="#services">
            Explore Services
            <ArrowRight />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#contact">
            Contact Us
          </Link>
        </Button>
      </div>
    </section>
  );
}
