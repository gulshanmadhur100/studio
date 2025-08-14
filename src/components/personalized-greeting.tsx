
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
      let isSubscribed = true;
      getPersonalizedGreeting({})
        .then((response) => {
          if (isSubscribed) {
            setGreeting(response.greeting);
          }
        })
        .catch((error) => {
          console.error("Failed to fetch personalized greeting:", error);
          if (isSubscribed) {
            // Fallback greeting
            setGreeting("Welcome! Discover what we have to offer.");
          }
        });
      return () => {
        isSubscribed = false;
      };
    }
  }, [isMounted]);

  if (!isMounted) {
    return (
      <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">
        &nbsp;
      </p>
    );
  }

  return (
    <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">
      {greeting ?? <>&nbsp;</>}
    </p>
  );
}
