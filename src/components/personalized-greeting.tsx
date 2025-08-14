
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs only on the client, after the initial render.
    let isMounted = true;
    getPersonalizedGreeting({})
      .then((response) => {
        if (isMounted) {
          setGreeting(response.greeting);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch personalized greeting:", error);
        if (isMounted) {
          // Fallback greeting
          setGreeting("Welcome! Discover what we have to offer.");
        }
      });
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">
      {greeting ?? <>&nbsp;</>}
    </p>
  );
}
