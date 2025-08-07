import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card py-8 mt-12 border-t">
      <div className="container mx-auto px-4 text-center text-card-foreground">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-accent" />
            <span>4th Main, Arekere, Bengaluru</span>
          </div>
          <a href="tel:8294924270" className="flex items-center gap-3 hover:text-accent transition-colors">
            <Phone className="h-5 w-5 text-accent" />
            <span>8294924270</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          © {new Date().getFullYear()} BigBul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
