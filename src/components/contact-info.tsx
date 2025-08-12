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
          <div className="flex items-center gap-4">
            <Link href="https://wa.me/8294924270" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="flex items-center gap-4">
              <WhatsappIcon className="h-6 w-6 text-green-500 hover:text-green-600 transition-colors" />
               <span className="hover:text-accent transition-colors">8294924270</span>
            </Link>
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
