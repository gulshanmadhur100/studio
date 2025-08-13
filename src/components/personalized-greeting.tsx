
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string>("Welcome! Discover what we have to offer.");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      getPersonalizedGreeting({})
        .then((response) => {
          setGreeting(response.greeting);
        })
        .catch((error) => {
          console.error("Failed to fetch personalized greeting:", error);
          // Fallback greeting is already set in useState
        });
    }
  }, [isMounted]);

  if (!isMounted) {
    // Render a placeholder on the server and initial client render to prevent layout shift.
    // The initial state for greeting is used as a placeholder.
    return <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">{greeting}</p>;
  }

  return (
    <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">
      {greeting}
    </p>
  );
}
