import { services } from "@/lib/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServicesSection() {
  return (
    <section className="py-10 md:py-12" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
        Our Services
      </h2>
      <div className="max-w-5xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {services.map((service) => (
            <AccordionItem value={service.slug} key={service.slug} asChild>
              <Card>
                <AccordionTrigger className="hover:no-underline">
                  <CardHeader className="w-full text-left">
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
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-foreground/90">{service.details}</p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
