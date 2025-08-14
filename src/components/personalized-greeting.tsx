
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs only on the client, after hydration.
    getPersonalizedGreeting({})
      .then((response) => {
        setGreeting(response.greeting);
      })
      .catch((error) => {
        console.error("Failed to fetch personalized greeting:", error);
        // Fallback greeting
        setGreeting("Welcome! Discover what we have to offer.");
      });
  }, []); // Empty dependency array ensures this runs once on mount.

  // Render a placeholder on the server and initial client render.
  // The actual greeting will be rendered in a subsequent client-side render.
  return (
    <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">
      {greeting ?? <>&nbsp;</>}
    </p>
  );
}
