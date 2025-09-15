"use client";

import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ContactSection } from "@/components/contact-section";
import { ContactInfo } from "@/components/contact-info";
import { MountedClientOnly } from "@/components/mounted-client-only";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <HeroSection />
        <ServicesSection />
        <MountedClientOnly>
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <ContactInfo />
            <ContactSection />
          </div>
        </MountedClientOnly>
      </main>
      <Footer />
    </div>
  );
}
