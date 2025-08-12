"use client";

import { useEffect, useState } from "react";
import { personalizedGreeting } from "@/ai/flows/personalized-greeting";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState("Welcome to BigBul! We're glad to see you.");
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the component has mounted.
    setIsClient(true);
  }, []);

  useEffect(() => {
    // This effect runs only on the client, and only after isClient is true.
    if (isClient) {
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
    }
  }, [isClient]);

  if (!isClient) {
    // Render nothing on the server. The component will be rendered on the client.
    // This is the key to preventing the hydration error.
    return null;
  }

  if (isLoading) {
    return <p className="text-xl md:text-2xl text-muted-foreground animate-pulse">Loading personalized greeting...</p>;
  }

  return <p className="text-xl md:text-2xl text-muted-foreground">{greeting}</p>;
}
