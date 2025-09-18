'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  generatePersonalizedRecipe,
  type AIRecipeCustomizationOutput,
} from '@/ai/flows/ai-recipe-customization';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  ingredients: z
    .string()
    .min(10, { message: 'Por favor, insira pelo menos 10 caracteres.' })
    .describe(
      'A comma-separated list of ingredients the user has available.'
    ),
});

export function AIRecipeForm() {
  const [recipe, setRecipe] = useState<AIRecipeCustomizationOutput | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecipe(null);
    try {
      const result = await generatePersonalizedRecipe(values);
      setRecipe(result);
    } catch (error) {
      console.error('Error generating recipe:', error);
      toast({
        variant: 'destructive',
        title: 'Ops! Algo deu errado.',
        description:
          'Não foi possível gerar sua receita. Tente novamente em alguns instantes.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-card/50 border-border/70">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-left">
                      Quais ingredientes você tem na sua cozinha?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: tomate, queijo, manjericão, macarrão..."
                        className="min-h-[120px] text-base resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Criando sua receita...
                  </>
                ) : (
                  'Gerar Receita Mágica'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {recipe && (
        <div className="mt-8">
          <Card className="border-primary/50 text-left animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">
                {recipe.recipeName}
              </CardTitle>
              <CardDescription>Sua receita personalizada está pronta!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">Ingredientes:</h3>
                <p className="whitespace-pre-line text-foreground/80">{recipe.ingredients}</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Instruções:</h3>
                <p className="whitespace-pre-line text-foreground/80">{recipe.instructions}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
