
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState("\u00A0"); // Default to a non-breaking space to prevent layout shift
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      getPersonalizedGreeting({})
        .then((response) => {
          setGreeting(response.greeting);
        })
        .catch((error) => {
          console.error("Failed to fetch personalized greeting:", error);
          setGreeting("Welcome! Discover what we have to offer."); // Fallback greeting
        });
    }
  }, [isClient]);

  return (
    <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">
      {isClient ? greeting : "\u00A0"}
    </p>
  );
}
