
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      getPersonalizedGreeting({})
        .then((response) => {
          if (response.greeting) {
            setGreeting(response.greeting);
          } else {
            // Fallback greeting if the flow returns nothing
            setGreeting("Welcome! Discover what we have to offer.");
          }
        })
        .catch((error) => {
          console.error("Failed to fetch personalized greeting:", error);
          // Fallback greeting on error
          setGreeting("Welcome! We have a wide range of services to explore.");
        });
    }
  }, [isMounted]);

  // Render a placeholder on the server and during initial client render to avoid hydration mismatch
  if (!isMounted) {
    return <p className="text-xl md:text-2xl text-muted-foreground h-8"></p>; // Placeholder with fixed height
  }
  
  return <p className="text-xl md:text-2xl text-muted-foreground">{greeting || "\u00A0"}</p>;
}
