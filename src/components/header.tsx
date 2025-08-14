
"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
        <div className="hidden md:flex items-center gap-4">
          <Link href="/#contact">
            <Button variant="outline">Get in touch</Button>
          </Link>
          <Button>Log in</Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link href="/" className="text-lg font-medium hover:text-accent transition-colors" onClick={() => setIsSheetOpen(false)}>
                  Home
                </Link>
                <Link href="/#services" className="text-lg font-medium hover:text-accent transition-colors" onClick={() => setIsSheetOpen(false)}>
                  Services
                </Link>
                <Link href="/#contact" className="text-lg font-medium hover:text-accent transition-colors" onClick={() => setIsSheetOpen(false)}>
                  Contact
                </Link>
                <div className="flex flex-col gap-4 mt-4">
                    <Link href="/#contact" onClick={() => setIsSheetOpen(false)}>
                        <Button variant="outline" className="w-full">Get in touch</Button>
                    </Link>
                    <Button className="w-full">Log in</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
