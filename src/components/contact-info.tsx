import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Facebook } from "lucide-react";

export function ContactInfo() {
  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
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
  );
}
