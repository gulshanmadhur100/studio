import { services } from "@/lib/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="py-10 md:py-12" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <Card key={service.slug} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                   <p className="text-sm text-muted-foreground pt-1">{service.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/90">{service.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
