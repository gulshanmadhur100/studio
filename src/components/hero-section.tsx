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
        <Link href="#services">
          <Button size="lg">
            Explore Services
            <ArrowRight />
          </Button>
        </Link>
        <Link href="#contact">
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
