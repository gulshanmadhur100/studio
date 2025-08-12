import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Facebook } from "lucide-react";
import { WhatsappIcon } from "./whatsapp-icon";
import Link from "next/link";

export function ContactInfo() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
        Contact Information
      </h2>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Get in touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Link href="https://wa.me/8294924270" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <WhatsappIcon className="h-6 w-6 text-green-500 group-hover:text-green-600 transition-colors" />
            <span className="group-hover:text-accent transition-colors">8294924270</span>
          </Link>
          <a href="mailto:corp@bigbul.in" className="flex items-center gap-4 group">
            <Mail className="h-6 w-6 text-accent" />
            <span className="group-hover:text-accent transition-colors">
              corp@bigbul.in
            </span>
          </a>
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
