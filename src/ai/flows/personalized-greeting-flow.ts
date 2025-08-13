/**
 * @fileOverview A personalized greeting utility.
 *
 * - getPersonalizedGreeting - A function that returns a personalized greeting.
 * - PersonalizedGreetingInput - The input type for the getPersonalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the getPersonalizedGreeting function.
 */

import { z } from 'zod';

const PersonalizedGreetingInputSchema = z.object({
  // In a real app, you'd pass user history here.
  // For now, we'll just use a placeholder.
  userId: z.string().optional(),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('The personalized greeting message.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;


const greetings = [
  "Welcome back! We've missed you. Check out our new services.",
  "Good to see you again! We have some special offers for you.",
  "Hello there! Your next opportunity is just a click away.",
  "Welcome! Ready to take the next step in your career?",
  "Hey! We've got the tools and training to help you succeed."
];

/**
 * Selects a random greeting from a predefined list.
 * This function is now a simple utility and does not use AI.
 * @param _input - The input object (currently unused).
 * @returns A promise that resolves to the personalized greeting output.
 */
export async function getPersonalizedGreeting(_input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[randomIndex];
  return { greeting };
}
