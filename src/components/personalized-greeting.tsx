
"use client";

import { useEffect, useState } from "react";
import { personalizedGreeting } from "@/ai/flows/personalized-greeting";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // A mock user browsing history. In a real application, this would be
    // based on actual user data.
    const userBrowsingHistory = "viewed technology services, read about training courses";

    const fetchGreeting = async () => {
      try {
        const response = await personalizedGreeting({ userBrowsingHistory });
        setGreeting(response.greeting);
      } catch (error) {
        console.error("Error fetching personalized greeting:", error);
        // Fallback to a default greeting in case of an error
        setGreeting("Welcome! We have a wide range of services to explore.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchGreeting();
  }, []);

  if (isLoading) {
    return <p className="text-xl md:text-2xl text-muted-foreground animate-pulse">Loading personalized greeting...</p>;
  }

  return <p className="text-xl md:text-2xl text-muted-foreground">{greeting}</p>;
}
