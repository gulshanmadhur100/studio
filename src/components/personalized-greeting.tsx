
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    getPersonalizedGreeting({})
      .then((response) => {
        if (isMounted && response.greetings && response.greetings.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.greetings.length);
          setGreeting(response.greetings[randomIndex]);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch personalized greeting:", error);
        if (isMounted) {
          setGreeting("Welcome! Discover what we have to offer.");
        }
      });

      return () => {
        isMounted = false;
      }
  }, []);

  if (!greeting) {
     return <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">Welcome! Discover what we have to offer.</p>;
  }
  
  return <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">{greeting}</p>;
}
