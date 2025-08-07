import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Cpu, GraduationCap, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Cpu className="h-8 w-8 text-accent" />,
    title: "Technology Services",
    description: "Cutting-edge tech solutions to drive your business forward.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: "Training Courses",
    description: "Upskill with our expert-led courses and certification programs.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    title: "Trading Support",
    description: "Comprehensive support and insights for your trading activities.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-accent" />,
    title: "Placement/Internship",
    description: "Launch your career with our placement and internship opportunities.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-10 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.title} className="text-center bg-card/50 backdrop-blur-sm shadow-md hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 rounded-xl">
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
        ))}
      </div>
    </section>
  );
}
