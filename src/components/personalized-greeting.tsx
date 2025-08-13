
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
          if (response.greetings && response.greetings.length > 0) {
            const randomIndex = Math.floor(Math.random() * response.greetings.length);
            setGreeting(response.greetings[randomIndex]);
          } else {
            setGreeting("Welcome! Discover what we have to offer.");
          }
        })
        .catch((error) => {
          console.error("Failed to fetch personalized greeting:", error);
          setGreeting("Welcome! Discover what we have to offer.");
        });
    }
  }, [isMounted]);

  if (!isMounted) {
    return <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">&nbsp;</p>;
  }

  return (
    <p className="text-xl md:text-2xl text-muted-foreground h-[32px]">
      {greeting ?? <>&nbsp;</>}
    </p>
  );
}
