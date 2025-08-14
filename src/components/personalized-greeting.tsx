
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    getPersonalizedGreeting({})
      .then((response) => {
        setGreeting(response.greeting);
      })
      .catch((error) => {
        console.error("Failed to fetch personalized greeting:", error);
        // Fallback greeting
        setGreeting("Welcome! Discover what we have to offer.");
      });
  }, []);

  return (
    <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">
      {greeting ?? <>&nbsp;</>}
    </p>
  );
}
