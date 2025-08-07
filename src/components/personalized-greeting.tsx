"use client";

import { personalizedGreeting } from "@/ai/flows/personalized-greeting";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getGreeting() {
      try {
        const history = "User is visiting the homepage.";
        const result = await personalizedGreeting({ userBrowsingHistory: history });
        setGreeting(result.greeting);
      } catch (error) {
        console.error("Failed to get personalized greeting:", error);
        setGreeting("Welcome to BigBul! We're glad to see you.");
      } finally {
        setIsLoading(false);
      }
    }

    getGreeting();
  }, []);

  if (isLoading) {
    return (
        <div className="flex justify-center">
            <Skeleton className="h-8 w-3/4 max-w-md mt-1" />
        </div>
    );
  }

  return <p className="text-xl md:text-2xl text-muted-foreground">{greeting}</p>;
}
