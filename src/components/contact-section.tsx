
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import React from "react";

export function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = `Contact from ${name} - ${email}`;
    const mailtoLink = `mailto:corp@bigbul.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    // This is a client-side only action, so we can safely use it inside an event handler
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
        Contact Us
      </h2>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Enter your message" className="min-h-[120px]" required />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
