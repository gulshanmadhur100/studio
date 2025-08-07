"use client";

export function PersonalizedGreeting() {
  const greeting = "Welcome to BigBul! We're glad to see you.";
  return <p className="text-xl md:text-2xl text-muted-foreground">{greeting}</p>;
}
