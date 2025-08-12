import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <HeroSection />
        <div className="grid lg:grid-cols-2 lg:gap-16">
          <ServicesSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
