
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState("Welcome! Discover what we have to offer.");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    getPersonalizedGreeting({})
      .then((response) => {
        setGreeting(response.greeting);
      })
      .catch((error) => {
        console.error("Failed to fetch personalized greeting:", error);
        // Fallback is already set in initial state
      });
  }, []);

  return (
    <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">
      {isClient ? greeting : "Welcome! Discover what we have to offer."}
    </p>
  );
}
