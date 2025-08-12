import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Facebook } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="py-10 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
        Contact Information
      </h2>
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Phone className="h-6 w-6 text-accent" />
          <a href="tel:8294924270" className="hover:text-accent transition-colors">
            8294924270
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Mail className="h-6 w-6 text-accent" />
          <a href="mailto:corp@bigbul.in" className="hover:text-accent transition-colors">
            corp@bigbul.in
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Facebook className="h-6 w-6 text-accent" />
          <a href="https://www.facebook.com/bigbul" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Follow us on Facebook
          </a>
        </div>
      </CardContent>
    </Card>
    </section>
  );
}
