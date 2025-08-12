
"use client";

import { useEffect, useState } from "react";
import { getPersonalizedGreeting } from "@/ai/flows/personalized-greeting-flow";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs only on the client, after the component has mounted.
    getPersonalizedGreeting({})
      .then((response) => {
        if (response.greeting) {
          setGreeting(response.greeting);
        } else {
          // Set a default greeting if the flow returns nothing.
          setGreeting("Welcome! Discover what we have to offer.");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch personalized greeting:", error);
        // Fallback to a default greeting on error.
        setGreeting("Welcome! We have a wide range of services to explore.");
      });
  }, []); // The empty dependency array ensures this runs only once.

  // On the server, and during the initial client render, this will return null,
  // preventing a hydration mismatch. The greeting is only rendered on the
  // client after the useEffect hook has run.
  if (!greeting) {
    return <p className="text-xl md:text-2xl text-muted-foreground h-8"></p>;
  }

  return <p className="text-xl md:text-2xl text-muted-foreground">{greeting}</p>;
}
