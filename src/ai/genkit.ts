
import { config } from 'dotenv'; // Ensure .env variables are loaded
config(); // Call config() to load .env variables

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI({
    apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
  })],
  model: 'googleai/gemini-2.0-flash',
});
