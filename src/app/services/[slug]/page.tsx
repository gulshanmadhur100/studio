import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
       <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Services</span>
      </Link>
      <Card>
        <CardHeader className="flex-row items-center gap-6 space-y-0">
           <div className="p-4 bg-accent/10 rounded-full flex-shrink-0">
            {service.icon}
          </div>
          <CardTitle className="font-headline text-3xl md:text-4xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose prose-lg max-w-none text-foreground/90">
            {service.details}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
