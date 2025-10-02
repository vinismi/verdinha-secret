'use client';

import React, { useState, useEffect, Suspense, useRef, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  Leaf,
  ChevronRight,
  KeyRound,
  ArrowRight,
  Lock,
  Sparkles,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Card, CardContent } from '@/components/ui/card';
import { WistiaPlayer } from '@/components/WistiaPlayer';
import {
  benefits,
  testimonials,
  portalImages,
  communityCreations,
  offerStack,
  faqItems,
  techBenefits,
  checkoutUrl,
} from '@/lib/landing-page-data';
import { placeholderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';

const Countdown = dynamic(() => import('@/components/countdown').then(mod => mod.Countdown), {
  ssr: false,
  loading: () => <div className="flex justify-center gap-4 sm:gap-8 my-6 h-[60px]"><Skeleton className="w-16 h-16" /><Skeleton className="w-16 h-16" /><Skeleton className="w-16 h-16" /><Skeleton className="w-16 h-16" /></div>
});

const Carousel = dynamic(() => import('@/components/ui/carousel').then((mod) => mod.Carousel), { ssr: false, loading: () => <Skeleton className="w-full h-[400px] rounded-2xl" /> });
const CarouselContent = dynamic(() => import('@/components/ui/carousel').then((mod) => mod.CarouselContent), { ssr: false });
const CarouselItem = dynamic(() => import('@/components/ui/carousel').then((mod) => mod.CarouselItem), { ssr: false });
const CarouselNext = dynamic(() => import('@/components/ui/carousel').then((mod) => mod.CarouselNext), { ssr: false });
const CarouselPrevious = dynamic(() => import('@/components/ui/carousel').then((mod) => mod.CarouselPrevious), { ssr: false });
const CarouselDots = dynamic(() => import('@/components/ui/carousel').then((mod) => mod.CarouselDots), { ssr: false });


const CTAButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <a
    href={checkoutUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full sm:w-auto ${className}`}
  >
    <Button
      size="lg"
      className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base sm:text-lg py-8 sm:py-7 px-8 rounded-full shadow-lg shadow-accent/30 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/40 w-full border-2 border-amber-300/50"
      {...props}
    >
      {children}
    </Button>
  </a>
);

const UnlockSection = ({ onUnlock }: { onUnlock: () => void }) => {
  const WAIT_TIME_SECONDS = 80;
  const AUTO_UNLOCK_SECONDS = 105;

  const [progress, setProgress] = useState(0);
  const [canUnlock, setCanUnlock] = useState(false);
  
  const animationFrameId = useRef<number>();
  const startTime = useRef<number>();

  const animateProgress = useCallback((timestamp: number) => {
    if (startTime.current === undefined) {
      startTime.current = timestamp;
    }

    const elapsed = (timestamp - startTime.current) / 1000;
    const currentProgress = Math.min((elapsed / WAIT_TIME_SECONDS) * 100, 100);
    setProgress(currentProgress);

    if (elapsed < WAIT_TIME_SECONDS) {
      animationFrameId.current = requestAnimationFrame(animateProgress);
    }
  }, []);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animateProgress);

    const enableButtonTimer = setTimeout(() => {
      setCanUnlock(true);
    }, WAIT_TIME_SECONDS * 1000);

    const autoUnlockTimer = setTimeout(() => {
      onUnlock();
    }, AUTO_UNLOCK_SECONDS * 1000);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      clearTimeout(enableButtonTimer);
      clearTimeout(autoUnlockTimer);
    };
  }, [onUnlock, animateProgress]);

  const isWaiting = progress < 100;

  return (
    <div className="mt-12 flex flex-col items-center gap-6">
      {isWaiting ? (
        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <Progress value={progress} className="w-full h-2 bg-primary/20 [&>div]:bg-accent" />
          <p className="text-sm text-foreground/60 animate-pulse">
            Aguarde enquanto preparamos seu acesso...
          </p>
        </div>
      ) : (
        <Button
          size="lg"
          disabled={!canUnlock}
          onClick={onUnlock}
          className={cn(
            "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg py-7 px-8 rounded-full shadow-lg shadow-accent/30 transition-all transform hover:scale-105 w-full max-w-xs",
            !canUnlock && "opacity-50 cursor-not-allowed"
          )}
        >
          {'Quero ver o resto do segredo 🍃'}
        </Button>
      )}
      {canUnlock && isWaiting && (
        <p className="text-sm text-foreground/60">
          Quase pronto! Liberando o botão...
        </p>
      )}
    </div>
  );
};

export default function Home() {
  const [contentUnlocked, setContentUnlocked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleUnlock = () => setContentUnlocked(true);

  return (
    <div className="flex flex-col min-h-screen bg-transparent overflow-x-hidden">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center text-center text-white overflow-hidden py-20">
          <Image
            src={placeholderImages.heroGourmetDinner.imageUrl}
            alt="Jantar gourmet sofisticado"
            fill
            className="object-cover"
            data-ai-hint={placeholderImages.heroGourmetDinner.imageHint}
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
            <div className="max-w-3xl">
              <h1 className="font-headline uppercase text-4xl sm:text-6xl md:text-7xl font-normal leading-tight drop-shadow-lg">
                Você realmente acha que conhece o poder da verdinha? Pense de
                novo.
              </h1>
              <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-white/90">
                Prepare-se para destravar a arte da cozinha verde gourmet, uma
                experiência que transforma o prato em ritual, o drink em magia
                e o momento em uma celebração secreta. Você tem coragem?
              </p>
            </div>
            <div className="mt-12 w-full max-w-lg sm:max-w-2xl">
              <Image
                src={placeholderImages.platformMockup.imageUrl}
                alt="Mockup de pratos da plataforma"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl w-full h-auto"
                data-ai-hint={placeholderImages.platformMockup.imageHint}
              />
            </div>
          </div>
        </section>

        {/* VSL Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline uppercase text-3xl sm:text-5xl md:text-6xl text-primary mb-8 sm:mb-12 leading-tight">
              Assista ao vídeo secreto antes que saia do ar ⏳
            </h2>
            <div className="relative max-w-md mx-auto aspect-[9/16] rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border-2 border-primary/20 group">
              <WistiaPlayer />
            </div>
             {isClient && !contentUnlocked && <UnlockSection onUnlock={handleUnlock} />}
          </div>
        </section>
        
        {contentUnlocked && (
        <div className={cn('animate-in fade-in duration-700')}>
          {/* Desire Section */}
          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 text-center md:text-left">
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Já cansou do mesmo brownie batido que todo mundo conhece?
                    E se eu te dissesse que existe um portal gourmet da folha
                    sagrada que vai muito além disso?
                  </p>
                  <div className="font-headline text-xl md:text-3xl leading-snug mb-8 normal-case space-y-4">
                    <p className="text-left">
                      👉 Você já se perguntou como seria transformar uma
                      cozinha comum em um laboratório secreto, onde:
                    </p>
                    <ul className="list-none space-y-2 text-lg md:text-xl font-body font-normal text-left pl-4">
                      <li>- Seus jantares provocam inveja (e espanto).</li>
                      <li>- Seus sobremesas viram lendas urbanas.</li>
                      <li>
                        - Seus drinks definem o nível de qualquer encontro.
                      </li>
                      <li>
                        - E cada receita é uma passagem só de ida para o
                        extraordinário.
                      </li>
                    </ul>
                    <p className="text-left pt-4">
                      Esse é o poder que estamos escondendo de você. Até
                      agora.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src={placeholderImages.premiumGreenDrink.imageUrl}
                    alt="Drink premium verde"
                    width={500}
                    height={700}
                    className="rounded-xl shadow-2xl mx-auto md:-rotate-2 w-full max-w-sm h-auto transition-transform duration-300 hover:scale-105 hover:rotate-0"
                    data-ai-hint={placeholderImages.premiumGreenDrink.imageHint}
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
                  Se até agora você só experimentou o básico, prepare-se para
                  destravar o lado mais ousado da verdinha.
                </h2>
              </div>
              <div className="space-y-16 sm:space-y-24">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                    >
                      <div
                        className={`relative aspect-[4/3] w-full max-w-lg mx-auto ${
                          isEven ? 'md:order-1' : 'md:order-2'
                        }`}
                      >
                        <Image
                          src={benefit.image}
                          alt={benefit.title}
                          fill
                          className="object-cover rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
                          data-ai-hint={benefit.hint}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30">
                          <Icon className="w-8 h-8 text-accent-foreground" />
                        </div>
                      </div>
                      <div
                        className={`text-center md:text-left ${
                          isEven ? 'md:order-2' : 'md:order-1'
                        }`}
                      >
                        <h3 className="font-headline text-3xl sm:text-4xl normal-case leading-snug mb-4">
                          {benefit.title}
                        </h3>
                        <p className="text-foreground/80 text-lg leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
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
                <p>
                  Isto é sobre{' '}
                  <span className="text-primary font-semibold">
                    evoluir e dominar
                  </span>
                  , do iniciante curioso ao Mestre Verde, desbloqueando
                  rituais que ninguém fora do clube ousa conhecer.
                </p>
                <p>
                  É sobre ter acesso a um{' '}
                  <span className="text-primary font-semibold">
                    clube proibido
                  </span>
                  , onde membros trocam segredos que fariam qualquer chef
                  tremer na base.
                </p>
                <p>
                  É sobre provar{' '}
                  <span className="text-primary font-semibold">
                    criações que desafiam a lógica
                  </span>{' '}
                  e que só existem aqui — transformando qualquer noite em um
                  evento que ninguém vai esquecer.
                </p>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="py-16 sm:py-24">
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
              <Suspense fallback={<Skeleton className="w-full h-[400px] rounded-2xl" />}>
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
                >
                  <CarouselContent>
                    {testimonials.images.map((testimonial, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1 h-full">
                          <Card className="aurora-glass overflow-hidden shadow-lg h-full flex flex-col justify-center rounded-2xl">
                            <CardContent className="p-2 sm:p-4 flex flex-col justify-center items-center">
                              <Image
                                src={testimonial.image}
                                alt={`Depoimento ${index + 1}`}
                                width={450}
                                height={800}
                                className="object-contain w-auto h-auto max-h-[70vh]"
                                data-ai-hint={testimonial.hint}
                                loading="lazy"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                  <CarouselDots className="mt-4" />
                </Carousel>
              </Suspense>
            </div>
          </section>

          {/* Community Creations Section */}
          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 text-center">
              <div className="flex flex-col items-center mb-12 sm:mb-16">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl uppercase leading-tight">
                  Compartilhe Suas Criações 🌱✨
                </h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                  Veja como outros chefs estão usando o Verdinha’s Secret para
                  criar pratos incríveis. Compartilhe suas próprias
                  receitas, inspire-se e descubra novas combinações. Sua
                  criatividade gourmet agora faz parte da comunidade!
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {communityCreations.creations.map((creation, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border-2 border-border/20 shadow-lg aspect-square"
                  >
                    <Image
                      src={creation.image}
                      alt={creation.hint}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={creation.hint}
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-semibold drop-shadow-md">
                        {creation.user}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Tech Section */}
          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
              <div className="flex justify-center md:order-2">
                <Image
                  src={placeholderImages.aiChefMockup.imageUrl}
                  alt="Tecnologia Gourmet Secreta - Chef Robô"
                  width={280}
                  height={609}
                  className="rounded-xl shadow-2xl w-full max-w-[280px] h-auto shadow-primary/20 border-2 border-primary/30"
                  data-ai-hint={placeholderImages.aiChefMockup.imageHint}
                  loading="lazy"
                />
              </div>
              <div className="mt-8 md:mt-0 md:order-1">
                <h2 className="font-headline text-2xl sm:text-4xl uppercase leading-tight mb-8">
                  A inteligência que muda tudo 🍃🤖
                </h2>
                <div className="text-sm space-y-4 text-foreground/80">
                  <p>
                    Além de receitas, cardápios e experiências, o Verdinha’s
                    Secret esconde um recurso que ninguém mais tem.
                  </p>
                  <p>
                    A{' '}
                    <strong className="text-primary">
                      Tecnologia Gourmet Secreta
                    </strong>{' '}
                    é a sua chef particular da folha sagrada:
                  </p>
                </div>
                <div className="mt-8 space-y-4 w-full max-w-md mx-auto">
                  {techBenefits.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent flex-shrink-0 mt-1">
                          <Icon className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground text-left">
                            {item.title}
                          </h4>
                          <p className="text-xs text-foreground/70 text-left">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-8 text-sm">
                  É como ter uma verdadeira chef-robô exclusiva, feita só
                  para quem atravessa o portal.
                </p>
                <div className="flex justify-center">
                  <a
                    href={checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="link"
                      className="mt-4 p-0 h-auto text-accent hover:text-accent/90 text-sm"
                    >
                      Quero experimentar a Tecnologia Gourmet Secreta{' '}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Portal Inside Section */}
          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-headline text-4xl sm-5xl md:text-6xl uppercase leading-tight">
                  O portal por dentro
                </h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                  Espie como é o nosso ecossistema secreto de receitas e
                  técnicas.
                </p>
              </div>
              <Suspense fallback={<Skeleton className="w-full h-[400px] rounded-2xl" />}>
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
                >
                  <CarouselContent>
                    {portalImages.images.map((item, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                          <div className="aurora-glass overflow-hidden shadow-lg rounded-2xl p-2 h-[480px]">
                            <Image
                              src={item.image}
                              alt={`Portal por dentro ${index + 1}`}
                              width={360}
                              height={640}
                              className="object-cover w-full h-full rounded-xl"
                              data-ai-hint={item.hint}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                  <CarouselDots className="mt-4" />
                </Carousel>
              </Suspense>
            </div>
          </section>

          {/* Offer Stack Section */}
          <section className="relative py-20 sm:py-28 text-white overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl uppercase mb-4 leading-tight">
                Acesso Vitalício ao Verdadeiro Segredo Verde 🌿✨
              </h2>
              <p className="max-w-3xl mx-auto mb-12 text-sm sm:text-base text-white/80">
                Hoje, você tem a chance de acessar o segredo mais verde e
                gourmet do mundo, um{' '}
                <strong className="font-semibold text-white">
                  ecossistema exclusivo
                </strong>
                , feito para transformar qualquer prato simples em uma
                experiência única. Ao entrar, você começa a jornada rumo ao
                título de{' '}
                <strong className="font-semibold text-white">
                  Mestre Verde
                </strong>
                , explorando segredos que poucos têm acesso.
              </p>

              <div className="aurora-glass-dark rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl shadow-accent/10">
                <h3 className="font-headline text-xl sm:text-2xl normal-case mb-8 text-white">
                  O que está incluído no seu acesso secreto:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-10 text-left">
                  {offerStack.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 text-white"
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-accent flex-shrink-0 mt-1">
                          <Icon className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-xs text-white/70">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-background/60 rounded-xl p-6 text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-headline normal-case text-white/70">
                    De <span className="line-through opacity-70">R$97,00</span>{' '}
                    por
                  </p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-headline uppercase text-accent my-2 flex items-center justify-center gap-3">
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 opacity-80" />{' '}
                    Apenas R$21,99{' '}
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 opacity-80" />
                  </p>
                  <p className="text-sm sm:text-base text-white/80 not-italic">
                    Pagamento único, vitalício.{' '}
                    <strong className="text-accent font-semibold">
                      Mais barato que um correzinho ☕
                    </strong>{' '}
                    e você leva o segredo para sempre.
                  </p>
                  <CTAButton className="mt-8">
                    Quero o Acesso Vitalício 🌿
                  </CTAButton>
                  <p className="mt-4 text-xs text-white/60">
                    O portal está aberto, mas só quem se atreve pode
                    atravessar.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Urgency Section */}
          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center aurora-glass rounded-2xl p-6 sm:p-10 shadow-2xl shadow-accent/10">
                <div className="flex justify-center mb-4">
                  <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                </div>
                <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase mb-4 flex items-center justify-center flex-wrap gap-x-3 gap-y-2 leading-tight">
                  <span>⚠️ Oferta secreta</span>{' '}
                  <span>por tempo limitado</span>
                </h3>
                <p className="text-base sm:text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
                  Esta é sua única chance. Acesso vitalício por apenas
                  R$21,99. Quando o contador zerar, o preço sobe e o portal
                  para o clube secreto da verdinha se fecha. Para sempre.
                </p>
                <Suspense fallback={<div className="flex justify-center gap-4 sm:gap-8 my-6 h-[60px]"><Skeleton className="w-16 h-16" /><Skeleton className="w-16 h-16" /><Skeleton className="w-16 h-16" /><Skeleton className="w-16 h-16" /></div>}>
                  <Countdown />
                </Suspense>
                <div className="mt-8">
                  <CTAButton>Quero o Acesso Vitalício 🌿</CTAButton>
                </div>
                <p className="mt-6 text-sm text-foreground/60">
                  Depois que o tempo acabar, não adianta chorar. Você perdeu a
                  chance.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl uppercase text-center mb-12 leading-tight">
                Ainda com medo? Suas dúvidas respondidas.
              </h2>
              <div className="aurora-glass p-4 sm:p-6 rounded-2xl">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      value={`item-${index}`}
                      key={index}
                      className="border-border/50"
                    >
                      <AccordionTrigger className="text-base sm:text-lg font-semibold text-left py-5 hover:text-primary">
                        {item.question}
                      </AccordionTrigger>{' '}
                      <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 sm:py-24 relative overflow-hidden text-white text-center">
            <Image
              src={placeholderImages.finalCtaBackground.imageUrl}
              alt="Jantar gourmet final"
              fill
              className="object-cover"
              data-ai-hint={placeholderImages.finalCtaBackground.imageHint}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
              <KeyRound className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-6 opacity-80" />
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase mb-6 max-w-4xl leading-tight">
                O Verdinha’s Secret não é só sobre cozinhar. É sobre dominar.
              </h2>
              <div className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 mb-10 space-y-4">
                <p>
                  É sobre acender uma experiência em cada prato, transformar
                  sua mesa em um altar e viver o prazer de ser um dos poucos
                  que conhece o segredo.
                </p>
                <p className="font-bold text-accent pt-4">
                  O portal está aberto. A decisão de entrar (ou ficar de fora
                  para sempre) é sua.
                </p>
              </div>
              <CTAButton>Quero o Acesso Vitalício 🌿</CTAButton>
            </div>
          </section>
        </div>
        )}
      </main>

      <footer className="py-8 bg-black/50">
        <div className="container mx-auto px-4 text-center text-foreground/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Verdinha's Secret. Todos os
            direitos reservados.
          </p>
          <p className="mt-2 text-xs">
            Este produto não garante a obtenção de resultados. Qualquer
            referência ao desempenho de uma estratégia não deve ser interpretada
            como uma garantia de resultados.
          </p>
        </div>
      </footer>
    </div>
  );
}
