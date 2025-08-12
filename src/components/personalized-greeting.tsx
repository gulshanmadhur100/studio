
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState("Welcome! We have a wide range of services to explore.");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        setIsLoading(true);
        const response = await getPersonalizedGreeting({});
        if (response.greeting) {
          setGreeting(response.greeting);
        }
      } catch (error) {
        console.error("Failed to fetch personalized greeting:", error);
        // Fallback to a default greeting
        setGreeting("Welcome! Discover what we have to offer.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGreeting();
  }, []);
  
  if (isLoading) {
    return <p className="text-xl md:text-2xl text-muted-foreground h-8 w-1/2 mx-auto animate-pulse bg-muted-foreground/30 rounded-md"></p>;
  }

  return <p className="text-xl md:text-2xl text-muted-foreground">{greeting}</p>;
}
