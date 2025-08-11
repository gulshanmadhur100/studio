import { services } from "@/lib/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="py-10 md:py-12" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
        Our Services
      </h2>
      <div className="max-w-5xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {services.map((service) => (
            <AccordionItem value={service.slug} key={service.slug} className="border-b-0">
                <Card className="hover:shadow-lg transition-shadow rounded-lg">
                  <AccordionTrigger className="w-full p-6 text-left hover:no-underline">
                    <CardHeader className="flex-row items-center gap-4 p-0 w-full">
                      <div className="p-3 bg-accent/10 rounded-full">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                        <p className="text-muted-foreground mt-2 text-base font-normal whitespace-normal">{service.description}</p>
                      </div>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <div className="prose prose-lg max-w-none text-foreground/90">
                      {service.details}
                    </div>
                  </AccordionContent>
                </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
