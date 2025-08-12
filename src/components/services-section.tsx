import Link from "next/link";
import { services } from "@/lib/services";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug} className="block group">
            <Card className="h-full bg-secondary/30 hover:bg-secondary/60 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-lg group-hover:border-accent">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                 <CardTitle className="font-headline text-lg mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-sm text-accent font-medium group-hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}