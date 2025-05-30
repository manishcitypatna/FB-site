// src/ai/flows/ai-team-visuals.ts
'use server';
/**
 * @fileOverview Generates futuristic team visuals using AI for the 'About Us' page.
 *
 * - generateTeamVisuals - A function that generates AI-based team visuals.
 * - GenerateTeamVisualsInput - The input type for the generateTeamVisuals function.
 * - GenerateTeamVisualsOutput - The return type for the generateTeamVisuals function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTeamVisualsInputSchema = z.object({
  teamDescription: z
    .string()
    .describe(
      'A description of the team, including their roles, expertise, and the overall vibe to convey.'
    ),
});
export type GenerateTeamVisualsInput = z.infer<typeof GenerateTeamVisualsInputSchema>;

const GenerateTeamVisualsOutputSchema = z.object({
  teamVisualDataUri: z
    .string()
    .describe(
      'A data URI containing the generated team visual, in a format suitable for direct display in an HTML img tag.'
    ),
  prompt: z.string().describe('The prompt used to generate the image.'),
});
export type GenerateTeamVisualsOutput = z.infer<typeof GenerateTeamVisualsOutputSchema>;

export async function generateTeamVisuals(
  input: GenerateTeamVisualsInput
): Promise<GenerateTeamVisualsOutput> {
  return generateTeamVisualsFlow(input);
}

const generateTeamVisualsPrompt = ai.definePrompt({
  name: 'generateTeamVisualsPrompt',
  input: {schema: GenerateTeamVisualsInputSchema},
  output: {schema: GenerateTeamVisualsOutputSchema},
  prompt: `Generate a futuristic and visually appealing team visual based on the following description:

Team Description: {{{teamDescription}}}

Specifically, create an image that reflects a cutting-edge IT & AI-based business solutions team, suitable for the 'About Us' page of GSMA Technologies. The image should convey innovation, expertise, and a forward-thinking approach.

Output the image as a data URI.

Ensure the output conforms to the GenerateTeamVisualsOutputSchema, providing both the image data URI and the prompt used.
`,
});

const generateTeamVisualsFlow = ai.defineFlow(
  {
    name: 'generateTeamVisualsFlow',
    inputSchema: GenerateTeamVisualsInputSchema,
    outputSchema: GenerateTeamVisualsOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      // IMPORTANT: ONLY the googleai/gemini-2.0-flash-exp model is able to generate images. You MUST use exactly this model to generate images.
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: [
        {
          text: `Generate a futuristic and visually appealing team visual based on the following description:\n\nTeam Description: ${input.teamDescription}\n\nSpecifically, create an image that reflects a cutting-edge IT & AI-based business solutions team, suitable for the 'About Us' page of GSMA Technologies. The image should convey innovation, expertise, and a forward-thinking approach.\n\nOutput the image as a data URI.`,
        },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
      },
    });

    if (!media?.url) {
      throw new Error('Failed to generate team visual.');
    }

    const output: GenerateTeamVisualsOutput = {
      teamVisualDataUri: media.url,
      prompt: input.teamDescription,
    };

    return output;
  }
);
