import { services } from "@/lib/services";
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
      <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
        {services.map((service) => (
          <AccordionItem value={service.slug} key={service.slug}>
            <AccordionTrigger>
              <div className="flex items-center gap-4 text-left">
                <div className="p-2 bg-accent/10 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-headline text-lg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-foreground/90 pl-12">
                <p>{service.details}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
