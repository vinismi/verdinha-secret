'use server';
/**
 * @fileOverview An AI recipe customization tool that suggests recipes based on user-provided ingredients.
 *
 * - generatePersonalizedRecipe - A function that takes a list of ingredients and returns a personalized recipe.
 * - AIRecipeCustomizationInput - The input type for the generatePersonalizedRecipe function.
 * - AIRecipeCustomizationOutput - The return type for the generatePersonalizedRecipe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const AIRecipeCustomizationInputSchema = z.object({
  ingredients: z
    .string()
    .describe(
      'A comma-separated list of ingredients the user has available.'
    ),
});
export type AIRecipeCustomizationInput = z.infer<typeof AIRecipeCustomizationInputSchema>;

const AIRecipeCustomizationOutputSchema = z.object({
  recipeName: z.string().describe('The name of the suggested recipe.'),
  ingredients: z.string().describe('The ingredients required for the recipe.'),
  instructions: z.string().describe('Step-by-step instructions for preparing the recipe.'),
});
export type AIRecipeCustomizationOutput = z.infer<typeof AIRecipeCustomizationOutputSchema>;

export async function generatePersonalizedRecipe(
  input: AIRecipeCustomizationInput
): Promise<AIRecipeCustomizationOutput> {
  return aiRecipeCustomizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiRecipeCustomizationPrompt',
  input: {schema: AIRecipeCustomizationInputSchema},
  output: {schema: AIRecipeCustomizationOutputSchema},
  prompt: `You are a world-class chef specializing in creating delicious recipes based on available ingredients.

  A user will provide a list of ingredients they have on hand. Your task is to generate a unique recipe using those ingredients.
  The recipe should be easy to follow and result in a tasty dish.
  Return the recipe in a JSON format.
  
  Available Ingredients: {{{ingredients}}}
  `,
});

const aiRecipeCustomizationFlow = ai.defineFlow(
  {
    name: 'aiRecipeCustomizationFlow',
    inputSchema: AIRecipeCustomizationInputSchema,
    outputSchema: AIRecipeCustomizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
