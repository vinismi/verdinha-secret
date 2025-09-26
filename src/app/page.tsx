'use client';

import React, { useState, useEffect } from 'react';
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
  KeyRound,
  Unlock,
  Wand2,
  Salad,
  ChefHat,
  Clock4,
  ArrowRight
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
import { WistiaPlayer } from '@/components/WistiaPlayer';

const benefits = [
  {
    icon: Leaf,
    title: 'Do básico ao Mestre Verde',
    description: 'Segredos que transformam sua cozinha no palco da erva da alegria, do simples ao sofisticado.',
    image: 'https://i.imgur.com/IIrGwax.png',
    hint: 'gourmet recipe',
  },
  {
    icon: Martini,
    title: 'Drinks que ninguém mais conhece',
    description: 'Cansado da mesmice? Aprenda combinações que você não encontra em nenhum bar (e que ninguém terá coragem de copiar).',
    image: 'https://i.imgur.com/IpwK5eJ.png',
    hint: 'cocktail pairing',
  },
  {
    icon: Cookie,
    title: 'Snacks que desafiam o óbvio',
    description: 'Lanches rápidos, perfeitos para qualquer hora, com um toque secreto que vicia mais que o normal.',
    image: 'https://i.imgur.com/jt7kSFx.jpeg',
    hint: 'gourmet snack',
  },
  {
    icon: Lightbulb,
    title: 'O poder real da folha sagrada',
    description: 'Aprenda técnicas de infusão que separam os amadores dos mestres. Você está pronto para extrair o poder máximo?',
    image: 'https://i.imgur.com/QXKMzhJ.jpeg',
    hint: 'herbs infusion',
  },
  {
    icon: PartyPopper,
    title: 'Cardápios para noites lendárias',
    description: 'Experiências completas para impressionar qualquer rolê e deixar todo mundo perguntando seu segredo.',
    image: 'https://i.imgur.com/jhjap7M.png',
    hint: 'dinner party',
  },
  {
    icon: Bot,
    title: 'Tecnologia Gourmet Secreta',
    description: 'Uma chef-robô particular, 24h por dia, para sugerir ousadias, combinações e usos que você nunca imaginou.',
    image: 'https://i.imgur.com/QDzt8Rb.jpeg',
    hint: 'ai gourmet dish',
  },
];

const testimonials = [
  {
    image: 'https://i.imgur.com/n9vikdJ.png',
    hint: 'testimonial screenshot 1',
  },
  {
    image: 'https://i.imgur.com/Ef6zsCL.png',
    hint: 'testimonial screenshot 2',
  },
  {
    image: 'https://i.imgur.com/jW3CQeP.png',
    hint: 'testimonial screenshot 3',
  },
  {
    image: 'https://i.imgur.com/m3IB8eg.png',
    hint: 'testimonial screenshot 4',
  },
  {
    image: 'https://i.imgur.com/hnfumBA.png',
    hint: 'testimonial screenshot 5',
  },
  {
    image: 'https://i.imgur.com/0TF6w3S.png',
    hint: 'testimonial screenshot 6',
  }
];

const offerStack = [
    { icon: Leaf, title: 'Plataforma Secreta Gourmet', description: 'O seu laboratório secreto de criações culinárias, onde todo prato se transforma.' },
    { icon: Target, title: 'Cardápios Temáticos Exclusivos', description: 'Receitas perfeitas para qualquer ocasião, montadas para impressionar e encantar.' },
    { icon: Donut, title: 'Receitas Criativas e Exclusivas', description: 'Acesso a receitas únicas, que ninguém mais vai encontrar. Você vai criar como um verdadeiro chef.' },
    { icon: Bot, title: 'Tecnologia Gourmet da Verdinha', description: 'A chef-robô que sugere combinações, cria pratos personalizados e transforma sua cozinha com o toque secreto da folha sagrada.' },
    { icon: Flame, title: 'Desafios e Experiências Secretas', description: 'Prove suas habilidades e desafie-se para desbloquear novas receitas e conquistas secretas.' },
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

const techBenefits = [
  {
    icon: Wand2,
    title: "Sugestões Inusitadas",
    description: "Combinações que você nunca imaginou, para surpreender até os paladares mais exigentes."
  },
  {
    icon: ChefHat,
    title: "Pratos Personalizados",
    description: "Crie receitas únicas com os ingredientes que você já tem na sua geladeira ou despensa."
  },
  {
    icon: Salad,
    title: "Harmonizações Únicas",
    description: "Descubra os drinks e acompanhamentos perfeitos para cada uma das suas criações verdes."
  },
  {
    icon: Clock4,
    title: "Disponível 24/7",
    description: "Sua chef particular está sempre pronta para ajudar, a qualquer hora do dia ou da noite."
  }
];

const checkoutUrl = 'https://www.ggcheckout.com/checkout/v2/K5J4NJtPrnBk5uOAvcPp';

const CTAButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto ${className}`}>
    <Button
      size="lg"
      className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg py-6 sm:py-7 px-8 rounded-full shadow-lg shadow-accent/20 transition-transform transform hover:scale-105 w-full"
      {...props}
    >
      {children}
    </Button>
  </a>
);

export default function Home() {
  const [contentUnlocked, setContentUnlocked] = useState(false);

  useEffect(() => {
    const unlockTimeout = setTimeout(() => {
      setContentUnlocked(true);
    }, 180000); // 3 minutes

    return () => {
      clearTimeout(unlockTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center text-center text-white overflow-hidden py-20">
          <Image
            src="https://i.imgur.com/VOmiqBj.png"
            alt="Jantar gourmet sofisticado"
            fill
            className="object-cover"
            data-ai-hint="dark elegant texture"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
            <div className="max-w-3xl">
              <h1 className="font-headline uppercase text-4xl sm:text-6xl md:text-7xl font-normal leading-tight drop-shadow-lg">
                Você realmente acha que conhece o poder da verdinha? Pense de novo.
              </h1>
              <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-white/90">
                Prepare-se para destravar a arte da cozinha verde gourmet, uma experiência que transforma o prato em ritual, o drink em magia e o momento em uma celebração secreta. Você tem coragem?
              </p>
            </div>
            <div className="mt-12 w-full max-w-lg sm:max-w-2xl">
               <Image
                src="https://i.imgur.com/jbMButp.jpeg"
                alt="Mockup de pratos da plataforma"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl w-full h-auto"
                data-ai-hint="gourmet selection"
              />
            </div>
          </div>
        </section>

        {/* VSL Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline uppercase text-3xl sm:text-5xl md:text-6xl text-primary mb-8 sm:mb-12 leading-tight">
              Descubra em poucos minutos
            </h2>
            <div className="relative max-w-md mx-auto aspect-[9/16] rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border-2 border-primary/20 group">
              <WistiaPlayer />
            </div>
            {!contentUnlocked && (
              <div className="mt-8 text-center flex flex-col items-center gap-4 px-4">
                <Button
                  onClick={() => setContentUnlocked(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg py-4 px-8 rounded-full shadow-lg shadow-primary/20 enabled:animate-pulse w-full max-w-sm"
                >
                  Quero ver o resto do segredo 🍃
                </Button>
                <Button
                    onClick={() => setContentUnlocked(true)}
                    variant="link"
                    className="text-foreground/70"
                >
                    Pular vídeo
                </Button>
              </div>
            )}
          </div>
        </section>

        {contentUnlocked && (
          <>
            {/* Desire Section */}
            <section className="py-16 sm:py-24 bg-card">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 text-center md:text-left">
                    <p className="text-lg md:text-xl leading-relaxed mb-6">
                      Já cansou do mesmo brownie batido que todo mundo conhece? E se eu te dissesse que existe um portal gourmet da folha sagrada que vai muito além disso?
                    </p>
                    <div className="font-headline text-xl md:text-3xl leading-snug mb-8 normal-case space-y-4">
                      <p className='text-left'>👉 Você já se perguntou como seria transformar uma cozinha comum em um laboratório secreto, onde:</p>
                      <ul className="list-none space-y-2 text-lg md:text-xl font-body font-normal text-left pl-4">
                          <li>- Seus jantares provocam inveja (e espanto).</li>
                          <li>- Suas sobremesas viram lendas urbanas.</li>
                          <li>- Seus drinks definem o nível de qualquer encontro.</li>
                          <li>- E cada receita é uma passagem só de ida para o extraordinário.</li>
                      </ul>
                      <p className='text-left pt-4'>Esse é o poder que estamos escondendo de você. Até agora.</p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <Image
                      src="https://i.imgur.com/eHsnwjG.jpeg"
                      alt="Drink premium verde"
                      width={500}
                      height={700}
                      className="rounded-xl shadow-2xl mx-auto md:-rotate-2 w-full max-w-sm h-auto transition-transform duration-300 hover:scale-105 hover:rotate-0"
                      data-ai-hint="green cocktail"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-24">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl uppercase leading-tight">
                    Se até agora você só experimentou o básico, prepare-se para destravar o lado mais ousado da verdinha.
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <Card
                        key={index}
                        className="bg-card border-border/50 overflow-hidden group text-left flex flex-col transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
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
                        <CardHeader className="relative pt-4 flex-shrink-0">
                           <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                            <Icon className="w-7 h-7 text-accent-foreground" />
                          </div>
                          <CardTitle className="font-headline text-2xl normal-case leading-snug">
                            {benefit.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className='flex-grow'>
                          <p className='text-foreground/70 text-sm leading-relaxed'>{benefit.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Differentials Section */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl uppercase mb-12 leading-tight">
                      Não confunda: isto não é um livro de receitas.
                    </h2>
                    <div className="max-w-3xl mx-auto text-lg sm:text-xl text-left space-y-6">
                      <p>Isto é sobre <span className="text-primary font-semibold">evoluir e dominar</span>, do iniciante curioso ao Mestre Verde, desbloqueando rituais que ninguém fora do clube ousa conhecer.</p>
                      <p>É sobre ter acesso a um <span className="text-primary font-semibold">clube proibido</span>, onde membros trocam segredos que fariam qualquer chef tremer na base.</p>
                      <p>É sobre provar <span className="text-primary font-semibold">criações que desafiam a lógica</span> e que só existem aqui — transformando qualquer noite em um evento que ninguém vai esquecer.</p>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-16 sm:py-24 bg-card">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl uppercase leading-tight text-primary">
                    A voz do clube secreto
                  </h2>
                  <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                    Esses são prints de quem já atravessou o portal. Sem
                    filtros, sem edições.
                  </p>
                </div>
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
                >
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                          <Card className="overflow-hidden border-2 border-border/20 shadow-lg h-full bg-black/20 flex flex-col">
                            <CardContent className="p-2 sm:p-4 flex-grow flex items-center justify-center">
                              <Image
                                src={testimonial.image}
                                alt={`Depoimento ${index + 1}`}
                                width={450}
                                height={800}
                                className="object-contain w-full h-full"
                                data-ai-hint={testimonial.hint}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </Carousel>
              </div>
            </section>
            

            {/* AI Tech Section */}
            <section className="py-16 sm:py-24">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                  <div className="flex justify-center md:order-2">
                     <Image
                      src="https://i.imgur.com/lpWzA7Z.png"
                      alt="Tecnologia Gourmet Secreta - Chef Robô"
                      width={600}
                      height={700}
                      className="rounded-xl shadow-2xl w-full max-w-sm h-auto shadow-primary/20 border-2 border-primary/30"
                      data-ai-hint="ai chef assistant"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center md:items-start md:text-left md:order-1">
                    <div className="w-full">
                      <h2 className="font-headline text-3xl sm:text-5xl uppercase leading-tight mb-8">
                        A inteligência que muda tudo 🍃🤖
                      </h2>
                      <div className="text-lg space-y-4 max-w-xl mx-auto md:mx-0">
                        <p className='text-foreground/80'>Além de receitas, cardápios e experiências, o Verdinha’s Secret esconde um recurso que ninguém mais tem.</p>
                        <p>A <strong className="text-primary">Tecnologia Gourmet Secreta</strong> é a sua chef particular da folha sagrada:</p>
                      </div>
                    </div>
                    <div className="mt-8 space-y-4 w-full max-w-md mx-auto md:mx-0">
                      {techBenefits.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent flex-shrink-0 mt-1">
                                <Icon className="w-5 h-5 text-accent-foreground" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                                <p className="text-sm text-foreground/70">{item.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                     <p className='mt-8 max-w-xl mx-auto md:mx-0'>É como ter uma verdadeira chef-robô exclusiva, feita só para quem atravessa o portal.</p>
                     <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="link" className="mt-4 p-0 h-auto text-base text-accent hover:text-accent/90">
                        Quero experimentar a Tecnologia Gourmet Secreta <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                     </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Offer Stack Section */}
            <section className="relative py-20 sm:py-28 text-white overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black/80 -z-10" />
                  <Image
                    src="https://i.imgur.com/VOmiqBj.png"
                    alt="Offer Background"
                    fill
                    className="object-cover -z-20"
                    data-ai-hint="dark elegant texture"
                  />
                 <div className="container mx-auto px-4 text-center">
                    <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl uppercase mb-4 leading-tight">Acesso Vitalício ao Verdadeiro Segredo Verde 🌿✨</h2>
                     <p className="max-w-3xl mx-auto mb-12 text-base sm:text-lg text-white/80">
                        Hoje, você tem a chance de acessar o segredo mais verde e gourmet do mundo, um <strong>ecossistema exclusivo</strong>, feito para transformar qualquer prato simples em uma experiência única. Ao entrar, você começa a jornada rumo ao título de <strong>Mestre Verde</strong>, explorando segredos que poucos têm acesso.
                     </p>
                     
                    <div className="bg-card/50 backdrop-blur-sm border-2 border-accent/50 rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl shadow-accent/10">
                        <h3 className='font-headline text-2xl sm:text-3xl normal-case mb-8 text-white'>O que está incluído no seu acesso secreto:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-10 text-left">
                            {offerStack.map(item => {
                                const Icon = item.icon
                                return (
                                    <div key={item.title} className="flex items-start gap-4 text-white">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent flex-shrink-0 mt-1">
                                            <Icon className="w-5 h-5 text-accent-foreground" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold">{item.title}</h4>
                                            <p className="text-sm text-white/70">{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="bg-background/60 rounded-xl p-6 text-center">
                          <p className="text-lg sm:text-xl md:text-2xl font-headline normal-case text-white/70">
                             De <span className="line-through opacity-70">R$97,00</span> por
                          </p>
                          <p className="text-4xl sm:text-5xl md:text-6xl font-headline uppercase text-accent my-2 flex items-center justify-center gap-3">
                             <Sparkles className='w-8 h-8 sm:w-10 sm:h-10 opacity-80' /> Apenas R$21,99 <Sparkles className='w-8 h-8 sm:w-10 smh-10 opacity-80' />
                          </p>
                           <p className="text-sm sm:text-base text-white/80 not-italic">
                            Pagamento único, vitalício.{' '}
                            <strong className="text-accent font-semibold">
                              Mais barato que um correzinho ☕
                            </strong>{' '}
                            e você leva o segredo para sempre.
                          </p>
                          <CTAButton className="mt-8">Liberar meu Acesso Vitalício Agora 🌿✨</CTAButton>
                          <p className="mt-4 text-xs text-white/60">O portal está aberto, mas só quem se atreve pode atravessar.</p>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Urgency Section */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center border-2 border-accent rounded-2xl p-6 sm:p-10 bg-card shadow-2xl shadow-accent/10">
                        <div className="flex justify-center mb-4">
                          <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                        </div>
                        <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase mb-4 flex items-center justify-center flex-wrap gap-x-3 gap-y-2 leading-tight">
                          <span>⚠️ Oferta secreta</span> <span>por tempo limitado</span>
                        </h3>
                        <p className="text-base sm:text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">Esta é sua única chance. Acesso vitalício por apenas R$21,99. Quando o contador zerar, o preço sobe e o portal para o clube secreto da verdinha se fecha. Para sempre.</p>
                        <Countdown />
                        <div className="mt-8">
                            <CTAButton>Garantir meu acesso secreto agora</CTAButton>
                        </div>
                        <p className="mt-6 text-sm text-foreground/60">Depois que o tempo acabar, não adianta chorar. Você perdeu a chance.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-24 bg-card">
              <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl uppercase text-center mb-12 leading-tight">
                  Ainda com medo? Suas dúvidas respondidas.
                </h2>
                 <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-border/50">
                      <AccordionTrigger className="text-base sm:text-lg font-semibold text-left py-5 hover:text-primary">{item.question}</AccordionTrigger>                      <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 sm:py-24 relative overflow-hidden text-white text-center">
                <Image
                    src="https://picsum.photos/seed/finalcta/1920/1080"
                    alt="Jantar gourmet final"
                    fill
                    className="object-cover"
                    data-ai-hint="elegant gourmet dinner"
                />
                <div className="absolute inset-0 bg-black/75" />
                 <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                    <KeyRound className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-6 opacity-80" />
                   <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase mb-6 max-w-4xl leading-tight">
                     O Verdinha’s Secret não é só sobre cozinhar. É sobre dominar.
                   </h2>
                   <div className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 mb-10 space-y-4">
                      <p>É sobre acender uma experiência em cada prato, transformar sua mesa em um altar e viver o prazer de ser um dos poucos que conhece o segredo.</p>
                      <p className="font-bold text-accent pt-4">O portal está aberto. A decisão de entrar (ou ficar de fora para sempre) é sua.</p>
                   </div>
                   <CTAButton>Quero entrar no Verdinha’s Secret</CTAButton>
               </div>
            </section>
          </>
        )}
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
