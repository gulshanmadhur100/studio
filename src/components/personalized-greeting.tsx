
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string>("Welcome! Discover what we have to offer.");

  useEffect(() => {
    getPersonalizedGreeting({})
      .then((response) => {
        if (response.greetings && response.greetings.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.greetings.length);
          setGreeting(response.greetings[randomIndex]);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch personalized greeting:", error);
        // Fallback greeting is already set
      });
  }, []);

  return <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">{greeting}</p>;
}

