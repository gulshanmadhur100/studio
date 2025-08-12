import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-background/80 py-4 border-b sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-headline tracking-tighter text-foreground">
          BigBul
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-muted-foreground hover:text-accent transition-colors font-medium">
            Home
          </Link>
          <Link href="/#services" className="text-muted-foreground hover:text-accent transition-colors font-medium">
            Services
          </Link>
           <Link href="/#contact" className="text-muted-foreground hover:text-accent transition-colors font-medium">
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:flex">Get in touch</Button>
      </div>
    </header>
  );
}