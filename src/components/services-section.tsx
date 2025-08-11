import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services.tsx";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="py-10 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group">
            <Card className="text-center h-full bg-card/50 backdrop-blur-sm shadow-md group-hover:shadow-primary/20 group-hover:-translate-y-1 transition-all duration-300 rounded-xl">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
