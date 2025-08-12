
'use server';
/**
 * @fileOverview A personalized greeting AI agent.
 *
 * - getPersonalizedGreeting - A function that handles the personalized greeting process.
 * - PersonalizedGreetingInput - The input type for the getPersonalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the getPersonalizedGreeting function.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/googleai';
import {z} from 'zod';

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


const prompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
  input: {schema: PersonalizedGreetingInputSchema},
  output: {schema: PersonalizedGreetingOutputSchema},
  model: googleAI('gemini-pro'),
  prompt: `You are a helpful assistant for BigBul Services. Your goal is to provide a warm, personalized greeting to returning users.

Based on the user's (optional) ID, select one of the following greetings. Choose randomly if no user information is provided.

Available Greetings:
${greetings.map(g => `- ${g}`).join('\n')}

Select one greeting.`,
});

const personalizedGreetingFlow = ai.defineFlow(
  {
    name: 'personalizedGreetingFlow',
    inputSchema: PersonalizedGreetingInputSchema,
    outputSchema: PersonalizedGreetingOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);


export async function getPersonalizedGreeting(input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
    return await personalizedGreetingFlow(input);
}
