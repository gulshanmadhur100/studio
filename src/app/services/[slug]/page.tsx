import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateStaticParams() {
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
    <div className="py-12 md:py-16">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex-row items-center gap-4">
          <div className="p-4 bg-accent/10 rounded-full">
            {service.icon}
          </div>
          <CardTitle className="font-headline text-3xl md:text-4xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
          <div className="prose prose-lg max-w-none text-foreground/90">
            {service.details}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
