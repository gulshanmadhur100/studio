import Link from "next/link";

export function Header() {
  return (
    <header className="bg-card py-4 border-b sticky top-0 z-50 backdrop-blur-sm bg-card/80">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-headline tracking-tighter text-foreground">
          BigBul
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/#services" className="text-muted-foreground hover:text-accent transition-colors">
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
}
