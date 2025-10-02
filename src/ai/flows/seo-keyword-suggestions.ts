'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting SEO keywords based on portfolio content.
 *
 * The flow takes portfolio content as input and returns a list of suggested SEO keywords.
 * It exports:
 *   - `suggestSeoKeywords`: The main function to trigger the flow.
 *   - `SeoKeywordSuggestionsInput`: The input type for the flow.
 *   - `SeoKeywordSuggestionsOutput`: The output type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SeoKeywordSuggestionsInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The content of the portfolio to generate keywords for.'),
});
export type SeoKeywordSuggestionsInput = z.infer<typeof SeoKeywordSuggestionsInputSchema>;

const SeoKeywordSuggestionsOutputSchema = z.object({
  keywords: z.array(z.string()).describe('A list of suggested SEO keywords.'),
});
export type SeoKeywordSuggestionsOutput = z.infer<typeof SeoKeywordSuggestionsOutputSchema>;

export async function suggestSeoKeywords(
  input: SeoKeywordSuggestionsInput
): Promise<SeoKeywordSuggestionsOutput> {
  return seoKeywordSuggestionsFlow(input);
}

const seoKeywordSuggestionsPrompt = ai.definePrompt({
  name: 'seoKeywordSuggestionsPrompt',
  input: {schema: SeoKeywordSuggestionsInputSchema},
  output: {schema: SeoKeywordSuggestionsOutputSchema},
  prompt: `You are an SEO expert. Based on the following portfolio content, suggest a list of relevant SEO keywords. The keywords should be specific to the web development domain and should help the portfolio rank higher in search engine results.

Portfolio Content: {{{portfolioContent}}}

Keywords:`,
});

const seoKeywordSuggestionsFlow = ai.defineFlow(
  {
    name: 'seoKeywordSuggestionsFlow',
    inputSchema: SeoKeywordSuggestionsInputSchema,
    outputSchema: SeoKeywordSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await seoKeywordSuggestionsPrompt(input);
    return output!;
  }
);
