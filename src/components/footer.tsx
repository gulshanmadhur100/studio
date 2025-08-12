"use client";

import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { WhatsappIcon } from "./whatsapp-icon";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    return null; // Don't render on the server
  }

  return (
    <footer className="bg-card py-10 mt-10 border-t">
      <div className="container mx-auto px-4 text-center text-card-foreground">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold font-headline mb-4">BigBul</h3>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Your partner in technology, training, and trading success.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold font-headline mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-muted-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-bold font-headline mb-4">Contact Us</h3>
            <div className="flex flex-col items-center md:items-end gap-2 text-sm">
                <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>4th Main, Arekere, Bengaluru</span>
                </div>
                <a href="tel:8294924270" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Phone className="h-4 w-4 text-accent" />
                    <span>8294924270</span>
                </a>
                 <a href="https://wa.me/8294924270" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <WhatsappIcon className="h-4 w-4 text-accent" />
                    <span>WhatsApp</span>
                  </a>
                <a href="mailto:corp@bigbul.in" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>corp@bigbul.in</span>
                </a>
                 <a href="https://www.facebook.com/bigbul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Facebook className="h-4 w-4 text-accent" />
                    <span>Facebook</span>
                  </a>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-8 pt-8 border-t border-border/50">
          © {year} BigBul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
