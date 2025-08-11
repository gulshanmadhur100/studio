import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="items-center text-center">
            <div className="p-4 bg-accent/10 rounded-full mb-4">
              {service.icon}
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl">{service.title}</CardTitle>
            <p className="text-muted-foreground pt-2">{service.description}</p>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none mx-auto text-foreground/90">
              <p>{service.details}</p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
