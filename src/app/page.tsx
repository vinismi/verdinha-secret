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
  Sparkles,
  Award,
  Users,
  ChevronRight,
  Plus,
  Minus,
  Bot,
  Crown,
  Donut,
  Flame,
  Target,
  Lock,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Countdown } from '@/components/countdown';

const benefits = [
  {
    icon: UtensilsCrossed,
    title: 'Receitas do básico ao gourmet',
    image: 'https://picsum.photos/seed/vsecret4/400/300',
    hint: 'gourmet recipe',
  },
  {
    icon: Martini,
    title: 'Drinks e harmonizações criativas',
    image: 'https://picsum.photos/seed/vsecret5/400/300',
    hint: 'cocktail pairing',
  },
  {
    icon: Cookie,
    title: 'Snacks rápidos e fáceis',
    image: 'https://picsum.photos/seed/vsecret6/400/300',
    hint: 'gourmet snack',
  },
  {
    icon: Lightbulb,
    title: 'Técnicas secretas de infusão',
    image: 'https://picsum.photos/seed/vsecret7/400/300',
    hint: 'herbs infusion',
  },
  {
    icon: PartyPopper,
    title: 'Cardápios temáticos prontos',
    image: 'https://picsum.photos/seed/vsecret8/400/300',
    hint: 'dinner party',
  },
  {
    icon: Sparkles,
    title: 'Consumo leve e consciente',
    image: 'https://picsum.photos/seed/vsecret9/400/300',
    hint: 'healthy food',
  },
  {
    icon: Trophy,
    title: 'Desafios criativos e experiências',
    image: 'https://picsum.photos/seed/vsecret10/400/300',
    hint: 'celebration food',
  },
];

const differentials = [
  {
    icon: Bot,
    title: 'Tecnologia Gourmet Secreta',
    description: 'Uma inteligência artificial exclusiva que sugere combinações, ideias criativas e novas formas de usar o tempero secreto. Um toque futurista que leva sua cozinha a outro nível.',
  },
  {
    icon: Award,
    title: 'Evolução por Níveis',
    description: 'Do iniciante curioso ao Mestre Verde, você desbloqueia conquistas e avança em sua jornada gastronômica secreta.',
  },
  {
    icon: Martini,
    title: 'Receitas Inéditas',
    description: 'Drinks e pratos que você nunca encontrará em lugar nenhum. Criações exclusivas que transformam qualquer ocasião em experiência gourmet.',
  },
  {
    icon: Lock,
    title: 'Clube Secreto',
    description: 'Desafios, novidades e acesso a uma comunidade exclusiva que compartilha o mesmo gosto pelo lado verde da vida.',
  },
];

const testimonials = [
  {
    quote: 'Achei que era só sobre receitinhas… mas virou minha forma favorita de cozinhar.',
    author: 'Juliana R.',
    image: 'https://picsum.photos/seed/test1/200/200',
    hint: 'woman portrait',
  },
  {
    quote: 'Vale muito mais que o preço. Experiência única e viciante, cada semana descubro um segredo novo.',
    author: 'Marcos L.',
    image: 'https://picsum.photos/seed/test2/200/200',
    hint: 'man portrait',
  },
  {
    quote: 'Transformei meus jantares com amigos. Todo mundo fica chocado com os sabores. O segredo está bem guardado!',
    author: 'Beatriz S.',
    image: 'https://picsum.photos/seed/test3/200/200',
    hint: 'woman smiling',
  },
    {
    quote: 'A IA é genial! Peço ideias com o que tenho na geladeira e ela cria pratos incríveis na hora. Sensacional.',
    author: 'Lucas P.',
    image: 'https://picsum.photos/seed/test4/200/200',
    hint: 'happy man',
  },
];

const offerStack = [
    { icon: Leaf, title: 'Plataforma secreta gourmet', description: 'Seu laboratório culinário exclusivo.' },
    { icon: Target, title: 'Cardápios temáticos completos', description: 'Experiências prontas para impressionar.' },
    { icon: Donut, title: 'Receitas criativas e exclusivas', description: 'Do básico ao sofisticado.' },
    { icon: Bot, title: 'Tecnologia gourmet da verdinha', description: 'Recursos inteligentes que elevam sua cozinha.' },
    { icon: Flame, title: 'Experiências e desafios secretos', description: 'Torne-se um verdadeiro Mestre Verde.' },
]

const faqItems = [
  {
    question: 'Preciso ser bom na cozinha?',
    answer: 'Não! O Verdinha\'s Secret foi desenhado para todos os níveis. Temos conteúdos que vão do zero absoluto até técnicas avançadas para quem já domina a arte do tempero secreto.',
  },
  {
    question: 'Preciso de utensílios caros?',
    answer: 'De forma alguma. Ensinamos você a criar experiências incríveis com o que você já tem em casa. O segredo não está no equipamento, mas na técnica e na criatividade.',
  },
  {
    question: 'O conteúdo é atualizado sempre?',
    answer: 'Sim! Nossa comunidade secreta está sempre em movimento. Lançamos novas receitas, desafios e técnicas exclusivas regularmente para que sua jornada nunca perca a graça.',
  },
  {
    question: 'Existem opções leves (sem exagerar)?',
    answer: 'Com certeza. Um dos nossos pilares é o consumo consciente. Você encontrará diversas receitas e dicas para criar pratos e drinks mais leves, focados no sabor e bem-estar.',
  },
  {
    question: 'O acesso é imediato?',
    answer: 'Sim! Após a confirmação do pagamento, você recebe seu acesso secreto imediatamente no seu e-mail e já pode começar a desvendar os segredos da verdinha.',
  },
];


const CTAButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Button
    size="lg"
    className={`bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base sm:text-lg py-6 sm:py-7 px-8 rounded-full shadow-lg shadow-accent/20 transition-transform transform hover:scale-105 ${className}`}
  >
    {children}
  </Button>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen h-auto w-full flex items-center justify-center text-center text-white overflow-hidden py-16 pt-24 sm:pt-16">
          <Image
            src="https://picsum.photos/seed/vsecret1/1920/1080"
            alt="Jantar gourmet sofisticado"
            fill
            className="object-cover"
            data-ai-hint="gourmet dinner"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
            <div className="max-w-3xl">
              <h1 className="font-headline uppercase text-5xl sm:text-6xl md:text-8xl font-normal leading-tight drop-shadow-lg">
                Descubra o segredo da cozinha com o tempero verde mais famoso do
                mundo
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Aprenda, crie e desbloqueie experiências únicas com a plataforma que vai transformar sua cozinha.
              </p>
            </div>
            <div className="mt-12 w-full max-w-4xl px-4 md:px-0">
               <Image
                src="https://picsum.photos/seed/vsecret2/800/600"
                alt="Mockup de pratos da plataforma"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
                data-ai-hint="gourmet selection"
              />
            </div>
          </div>
        </section>

        {/* VSL Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline uppercase text-4xl md:text-6xl text-primary mb-8">
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
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer">
                <PlayCircle className="w-20 h-20 sm:w-24 sm:h-24 text-white/80 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="mt-10">
              <CTAButton>Quero entrar agora</CTAButton>
            </div>
          </div>
        </section>

        {/* Desire Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1 text-center md:text-left">
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  Todo mundo já conhece o docinho clássico da verdinha… mas você
                  pode ir{' '}
                  <span className="text-primary font-semibold">
                    muito além
                  </span>
                  .
                </p>
                <p className="font-headline text-3xl md:text-4xl leading-snug mb-8 normal-case">
                  Imagine sua cozinha como um laboratório secreto: jantares temáticos, sobremesas irresistíveis, drinks exclusivos e snacks rápidos, todos com o toque verde da folha sagrada.
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
                  className="rounded-xl shadow-2xl mx-auto md:-rotate-2"
                  data-ai-hint="green cocktail"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-6xl uppercase">
                O que você vai destravar no{' '}
                <span className="text-primary">Verdinha’s Secret:</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/50 overflow-hidden group text-left"
                  >
                     <div className="relative h-48">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={benefit.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <CardHeader className="relative -mt-16 z-10">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                        <Icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <CardTitle className="font-headline text-3xl normal-case">
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
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-black rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 grid md:grid-cols-2 gap-12 items-center">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/50 to-transparent opacity-30 animate-pulse"></div>
              <div className="relative text-center md:text-left">
                <h2 className="font-headline text-4xl md:text-6xl uppercase mb-4">
                  Tecnologia Gourmet Secreta 🤖🌿
                </h2>
                <p className="max-w-3xl mx-auto text-base sm:text-lg text-foreground/80">
                  Dentro da plataforma você também terá acesso a uma Inteligência Artificial exclusiva, que ajuda com ideias criativas e sugestões personalizadas. Um recurso extra para deixar sua experiência ainda mais completa.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <Bot className="w-24 h-24 sm:w-32 sm:h-32 text-primary opacity-20 -rotate-12"/>
                <Image
                  src="https://picsum.photos/seed/ai-gourmet/500/500"
                  alt="Prato gourmet com toque de IA"
                  width={250}
                  height={250}
                  className="rounded-full shadow-2xl rotate-6 border-4 border-accent/50"
                  data-ai-hint="ai gourmet dish"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-4xl md:text-6xl uppercase mb-12">
                  Segredos que tornam sua experiência única 🌿✨
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentials.map((item, index) => {
                        const Icon = item.icon;
                        return (
                             <Card key={index} className="bg-card border border-accent/20 p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                                    <Icon className="w-8 h-8 text-accent-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 font-headline normal-case">{item.title}</h3>
                                    <p className="text-foreground/70 text-sm">{item.description}</p>
                                </div>
                             </Card>
                        )
                    })}
                </div>
            </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-6xl uppercase text-center mb-12">
              O que os membros <span className="text-primary">estão dizendo</span>:
            </h2>
            <Carousel opts={{ align: "start", loop: true, }} className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full bg-background/50 border-border/30 flex flex-col justify-between p-6">
                        <CardContent className="p-0">
                          <p className="text-base sm:text-lg italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <div className="flex items-center gap-4 mt-6">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={50}
                            height={50}
                            className="rounded-full"
                            data-ai-hint={testimonial.hint}
                          />
                          <div>
                            <p className="font-bold">{testimonial.author}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex"/>
            </Carousel>
          </div>
        </section>


        {/* Offer Stack Section */}
        <section className="py-16 sm:py-24 bg-primary/90 text-primary-foreground" style={{ backgroundColor: '#0F1E0F' }}>
             <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-4xl md:text-5xl uppercase mb-6">Acesso vitalício ao segredo verde mais gourmet do mundo 🌿✨</h2>
                 <p className="max-w-2xl mx-auto mb-12 text-base sm:text-lg text-primary-foreground/80">
                    Ao entrar hoje, você desbloqueia o ecossistema completo para se tornar um Mestre Verde.
                 </p>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {offerStack.map(item => {
                        const Icon = item.icon
                        return (
                            <div key={item.title} className="bg-background/20 backdrop-blur-sm p-6 rounded-xl border border-accent/20 flex flex-col items-start text-left gap-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent flex-shrink-0">
                                    <Icon className="w-7 h-7 text-accent-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-headline normal-case">{item.title}</h3>
                                    <p className="text-primary-foreground/70">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                 <div className="max-w-xl mx-auto mb-10 text-center">
                     <p className="text-xl sm:text-2xl md:text-3xl font-headline normal-case text-white/70">
                         De <span className="line-through opacity-70">R$97,00</span> por
                     </p>
                      <p className="text-4xl sm:text-5xl md:text-6xl font-headline uppercase text-accent mb-2">
                         Apenas R$14,99
                     </p>
                     <p className="text-base sm:text-lg text-white/80">
                         Um pagamento único, vitalício (mais barato que um correzinho ☕).
                     </p>
                 </div>
                <CTAButton>Quero meu acesso vitalício agora</CTAButton>
             </div>
        </section>


        {/* Urgency Section */}
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center border-2 border-accent rounded-2xl p-6 sm:p-12 bg-card shadow-2xl shadow-accent/10">
                    <div className="flex justify-center mb-4">
                      <Lock className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="font-headline text-4xl md:text-5xl uppercase mb-4 flex items-center justify-center gap-3">
                      Oferta secreta por tempo limitado <Leaf className="hidden sm:inline-block text-primary w-8 h-8"/> <Clock className="hidden sm:inline-block text-primary w-8 h-8"/>
                    </h3>
                    <p className="text-base sm:text-lg text-foreground/80 mb-6">Hoje você pode liberar o segredo verde mais exclusivo da cozinha por apenas R$14,99 — um pagamento único e vitalício. Quando o contador zerar, o preço sobe e o acesso ao clube secreto da verdinha desaparece para sempre.</p>
                    <Countdown />
                    <div className="mt-8">
                        <CTAButton className="w-full sm:w-auto">Garantir meu acesso secreto agora</CTAButton>
                    </div>
                    <p className="mt-6 text-sm text-foreground/60">Depois que o tempo acabar, o portal se fecha e você perde essa chance única.</p>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-headline text-4xl md:text-6xl uppercase text-center mb-12">
              Perguntas Frequentes
            </h2>
             <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-base sm:text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-24 relative overflow-hidden text-white text-center">
            <Image
                src="https://picsum.photos/seed/finalcta/1920/1080"
                alt="Jantar gourmet final"
                fill
                className="object-cover"
                data-ai-hint="elegant gourmet dinner"
            />
            <div className="absolute inset-0 bg-black/75" />
             <div className="container mx-auto px-4 relative z-10">
               <h2 className="font-headline text-4xl md:text-6xl uppercase mb-6">
                 O Verdinha’s Secret não é um curso comum.
               </h2>
               <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/90 mb-10">
                  É uma experiência secreta que transforma pratos simples em momentos únicos. Liberte agora o poder do tempero verde na sua cozinha.
               </p>
           </div>
        </section>
      </main>

      <footer className="py-8 bg-black">
        <div className="container mx-auto px-4 text-center text-foreground/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Verdinha's Secret. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
