import Image from 'next/image';
import {
  UtensilsCrossed,
  Martini,
  Cookie,
  Lightbulb,
  PartyPopper,
  Leaf,
  Trophy,
  PlayCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AIRecipeForm } from '@/components/ai-recipe-form';

const benefits = [
  {
    icon: UtensilsCrossed,
    title: 'Receitas do básico ao gourmet 🌿',
    image: 'https://picsum.photos/seed/vsecret4/400/300',
    hint: 'gourmet recipe',
  },
  {
    icon: Martini,
    title: 'Drinks e harmonizações criativas 🍸',
    image: 'https://picsum.photos/seed/vsecret5/400/300',
    hint: 'cocktail pairing',
  },
  {
    icon: Cookie,
    title: 'Snacks rápidos e fáceis 🍪',
    image: 'https://picsum.photos/seed/vsecret6/400/300',
    hint: 'gourmet snack',
  },
  {
    icon: Lightbulb,
    title: 'Técnicas secretas de infusão 💡',
    image: 'https://picsum.photos/seed/vsecret7/400/300',
    hint: 'herbs infusion',
  },
  {
    icon: PartyPopper,
    title: 'Cardápios temáticos prontos 🎉',
    image: 'https://picsum.photos/seed/vsecret8/400/300',
    hint: 'dinner party',
  },
  {
    icon: Leaf,
    title: 'Consumo leve e consciente ✨',
    image: 'https://picsum.photos/seed/vsecret9/400/300',
    hint: 'healthy food',
  },
  {
    icon: Trophy,
    title: 'Desafios criativos e experiências 🏆',
    image: 'https://picsum.photos/seed/vsecret10/400/300',
    hint: 'celebration food',
  },
];

const CTAButton = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <Button
    size="lg"
    className={`bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg py-7 px-8 rounded-full shadow-lg shadow-accent/20 transition-transform transform hover:scale-105 ${className}`}
  >
    {children}
  </Button>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <Image
            src="https://picsum.photos/seed/vsecret1/1920/1080"
            alt="Jantar gourmet sofisticado"
            fill
            className="object-cover"
            data-ai-hint="gourmet dinner"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="lg:w-1/2 lg:text-left">
              <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
                Descubra o segredo da cozinha com o tempero verde mais famoso do
                mundo 🌿✨
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                Uma experiência interativa onde você aprende receitas, cria
                pratos únicos e ainda conta com uma inteligência artificial da
                verdinha para personalizar tudo com os ingredientes que você já
                tem em casa.
              </p>
              <div className="mt-10">
                <CTAButton>Liberar meu acesso por apenas R$14,99</CTAButton>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/3">
              <Image
                src="https://picsum.photos/seed/vsecret2/600/800"
                alt="Mockup de pratos da plataforma"
                width={400}
                height={600}
                className="rounded-xl shadow-2xl rotate-3"
                data-ai-hint="gourmet plate"
              />
            </div>
          </div>
        </section>

        {/* VSL Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">
              Veja como funciona o Verdinha’s Secret 🍃
            </h2>
            <div className="relative max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border-2 border-primary/20 group">
              <Image
                src="https://picsum.photos/seed/vsvideo/1280/720"
                alt="Video Sales Letter Thumbnail"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="recipe video"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <PlayCircle className="w-24 h-24 text-white/80 group-hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
            <div className="mt-12">
              <CTAButton>Quero fazer parte agora</CTAButton>
            </div>
          </div>
        </section>

        {/* Problem & Desire Section */}
        <section className="py-20 sm:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  Todo mundo já conhece o docinho clássico da verdinha… mas você
                  pode ir{' '}
                  <span className="text-primary font-semibold">
                    muito além
                  </span>
                  .
                </p>
                <p className="font-headline text-3xl md:text-4xl leading-snug mb-8">
                  Imagine transformar sua cozinha em um laboratório secreto de
                  experiências: jantares temáticos, sobremesas irresistíveis,
                  drinks exclusivos e snacks rápidos, tudo com o toque verde da
                  folha sagrada.
                </p>
                <Button variant="link" className="text-accent text-lg p-0 h-auto">
                  Começar agora &rarr;
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://picsum.photos/seed/vsecret3/600/800"
                  alt="Drink premium verde"
                  width={500}
                  height={700}
                  className="rounded-xl shadow-2xl mx-auto -rotate-2"
                  data-ai-hint="green cocktail"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                O que você desbloqueia no{' '}
                <span className="text-primary">Verdinha’s Secret:</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/50 overflow-hidden group"
                  >
                     <div className="relative h-40">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={benefit.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <CardHeader className="relative -mt-12 z-10">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                        <Icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <CardTitle className="font-headline text-2xl">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="bg-black rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/50 to-transparent opacity-30 animate-pulse"></div>
              <div className="relative">
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
                  Sua Chef Particular da Folha Sagrada 🤖
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
                  Você terá acesso a uma inteligência artificial exclusiva que
                  responde dúvidas, sugere combinações e cria receitas
                  personalizadas com base no que você já tem em casa. É como ter
                  uma chef secreta disponível 24/7.
                </p>
                <AIRecipeForm />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 text-center">
             <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
                Pronto para desvendar o segredo?
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-10">
                Junte-se a uma comunidade exclusiva de exploradores da culinária verde e eleve suas experiências a um novo patamar. O segredo está a um clique de distância.
              </p>
              <CTAButton>Liberar meu acesso por apenas R$14,99</CTAButton>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-card/50">
          <div className="container mx-auto px-4 text-center text-foreground/50">
            <p>&copy; {new Date().getFullYear()} Verdinha's Secret. Todos os direitos reservados.</p>
          </div>
      </footer>
    </div>
  );
}
