'use server';

/**
 * @fileOverview A personalized greeting AI agent.
 *
 * - personalizedGreeting - A function that handles the personalized greeting process.
 * - PersonalizedGreetingInput - The input type for the personalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the personalizedGreeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGreetingInputSchema = z.object({
  userBrowsingHistory: z.string().describe('The user browsing history.'),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('The personalized greeting message.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;

export async function personalizedGreeting(input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
  return personalizedGreetingFlow(input);
}

const curatedMessages = [
  'Welcome back! We are excited to help you further your goals.',
  'Hello again! Discover new opportunities with our services.',
  'Glad to see you! Explore our latest offerings and training courses.',
  'Welcome! We have personalized recommendations based on your previous interests.',
];

const chooseGreetingTool = ai.defineTool(
  {
    name: 'chooseGreeting',
    description: 'Chooses a personalized welcome message based on user browsing history.',
    inputSchema: z.object({
      userBrowsingHistory: z.string().describe('The user browsing history.'),
      messages: z.array(z.string()).describe('An array of curated greeting messages.'),
    }),
    outputSchema: z.string().describe('The chosen personalized greeting message.'),
  },
  async (input) => {
    // This can call any typescript function.
    // Use a deterministic method to choose a message to avoid hydration errors.
    const index = input.userBrowsingHistory.length % input.messages.length;
    return input.messages[index];
  }
);


const personalizedGreetingPrompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
  tools: [chooseGreetingTool],
  input: {schema: PersonalizedGreetingInputSchema},
  output: {schema: PersonalizedGreetingOutputSchema},
  prompt: `Based on the user's browsing history, choose an appropriate personalized greeting message using the chooseGreeting tool.

User Browsing History: {{{userBrowsingHistory}}}

Make sure to use the chooseGreeting tool to select the best greeting.
`
});

const personalizedGreetingFlow = ai.defineFlow(
  {
    name: 'personalizedGreetingFlow',
    inputSchema: PersonalizedGreetingInputSchema,
    outputSchema: PersonalizedGreetingOutputSchema,
  },
  async input => {
    const {output} = await personalizedGreetingPrompt({
      ...input,
    });
    return output!;
  }
);
