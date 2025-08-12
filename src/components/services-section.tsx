import Link from "next/link";
import { services } from "@/lib/services";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="py-10 md:py-12" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug} className="block group">
            <Card className="h-full hover:shadow-lg transition-shadow rounded-lg group-hover:border-accent">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                 <CardTitle className="font-headline text-lg mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">
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
