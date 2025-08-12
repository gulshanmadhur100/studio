import Link from "next/link";
import { services } from "@/lib/services";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="py-10 md:py-12" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug} className="block group">
            <Card className="h-full hover:shadow-lg transition-shadow rounded-lg group-hover:border-accent">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mt-2 text-base">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
