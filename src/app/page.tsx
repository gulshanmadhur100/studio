import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4">
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
