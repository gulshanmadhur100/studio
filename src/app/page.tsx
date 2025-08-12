import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ContactSection } from "@/components/contact-section";
import { ContactInfo } from "@/components/contact-info";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <HeroSection />
        <div className="grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <ServicesSection />
          </div>
          <div className="lg:col-span-1">
            <ContactSection />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
