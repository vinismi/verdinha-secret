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
    icon: Leaf,
    title: 'Do básico ao Mestre Verde',
    description: 'Segredos que transformam sua cozinha no palco da erva da alegria, do simples ao sofisticado.',
    image: 'https://picsum.photos/seed/vsecret4/400/300',
    hint: 'gourmet recipe',
  },
  {
    icon: Martini,
    title: 'Drinks que ninguém mais conhece',
    description: 'Cansado da mesmice? Aprenda combinações que você não encontra em nenhum bar (e que ninguém terá coragem de copiar).',
    image: 'https://picsum.photos/seed/vsecret5/400/300',
    hint: 'cocktail pairing',
  },
  {
    icon: Cookie,
    title: 'Snacks que desafiam o óbvio',
    description: 'Lanches rápidos, perfeitos para qualquer hora, com um toque secreto que vicia mais que o normal.',
    image: 'https://picsum.photos/seed/vsecret6/400/300',
    hint: 'gourmet snack',
  },
  {
    icon: Lightbulb,
    title: 'O poder real da folha sagrada',
    description: 'Aprenda técnicas de infusão que separam os amadores dos mestres. Você está pronto para extrair o poder máximo?',
    image: 'https://picsum.photos/seed/vsecret7/400/300',
    hint: 'herbs infusion',
  },
  {
    icon: PartyPopper,
    title: 'Cardápios para noites lendárias',
    description: 'Experiências completas para impressionar qualquer rolê e deixar todo mundo perguntando seu segredo.',
    image: 'https://picsum.photos/seed/vsecret8/400/300',
    hint: 'dinner party',
  },
  {
    icon: Bot,
    title: 'Tecnologia Gourmet Secreta',
    description: 'Uma chef-robô particular, 24h por dia, para sugerir ousadias, combinações e usos que você nunca imaginou.',
    image: 'https://picsum.photos/seed/ai-gourmet/500/500',
    hint: 'ai gourmet dish',
  },
];

const differentials = [
  {
    icon: Award,
    title: 'Evolução por Níveis',
    description: 'Do iniciante curioso ao Mestre Verde, você desbloqueia conquistas e avança em sua jornada gastronômica secreta.',
  },
  {
    icon: Users,
    title: 'Clube Fechado',
    description: 'Participe de um clube fechado, onde os membros compartilham segredos, descobertas e experiências que você não encontra em nenhum livro, curso ou restaurante.',
  },
  {
    icon: Martini,
    title: 'Receitas Inéditas',
    description: 'Drinks e pratos que você nunca encontrará em lugar nenhum. Criações exclusivas que transformam qualquer ocasião em experiência gourmet.',
  },
  {
    icon: Lock,
    title: 'O Diferencial Oculto',
    description: 'Aqui não é só sobre aprender receitas. É sobre evoluir por níveis e participar de uma comunidade que compartilha segredos que ninguém mais conhece.',
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
    quote: 'Vale muito mais que o preço. Cada semana descubro um segredo novo.',
    author: 'Marcos L.',
    image: 'https://picsum.photos/seed/test2/200/200',
    hint: 'man portrait',
  },
  {
    quote: 'Transformei meus jantares com amigos. Todo mundo fica chocado com os sabores.',
    author: 'Beatriz S.',
    image: 'https://picsum.photos/seed/test3/200/200',
    hint: 'woman smiling',
  },
    {
    quote: 'A IA é genial. Cria pratos incríveis com o que tenho na geladeira.',
    author: 'Lucas P.',
    image: 'https://picsum.photos/seed/test4/200/200',
    hint: 'happy man',
  },
];

const offerStack = [
    { icon: Leaf, title: 'Plataforma secreta gourmet', description: 'Seu laboratório culinário exclusivo, sempre à sua disposição.' },
    { icon: Target, title: 'Cardápios temáticos completos', description: 'Experiências prontas para impressionar em qualquer ocasião.' },
    { icon: Donut, title: 'Receitas criativas e exclusivas', description: 'Do clássico ao sofisticado, tudo com o tempero verde da folha sagrada.' },
    { icon: Bot, title: 'Tecnologia gourmet da verdinha', description: 'Recursos inteligentes que elevam sua cozinha a outro patamar.' },
    { icon: Flame, title: 'Experiências e desafios secretos', description: 'Prove sua criatividade e conquiste seu lugar como Mestre Verde.' },
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
    <div className="flex flex-col min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen h-auto w-full flex items-center justify-center text-center text-white overflow-hidden py-20">
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
              <h1 className="font-headline uppercase text-5xl sm:text-6xl md:text-7xl font-normal leading-tight drop-shadow-lg">
                Você realmente acha que conhece o poder da verdinha? Pense de novo.
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Prepare-se para destravar a arte da cozinha verde gourmet — uma experiência que transforma o prato em ritual, o drink em magia e o momento em uma celebração secreta. Você tem coragem?
              </p>
            </div>
            <div className="mt-12 w-full max-w-2xl sm:max-w-3xl md:max-w-4xl px-4 md:px-0">
               <Image
                src="https://picsum.photos/seed/vsecret2/800/600"
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
            <h2 className="font-headline uppercase text-4xl sm:text-5xl md:text-6xl text-primary mb-8 leading-tight">
              Assista ao convite secreto 🍃
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
                <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </section>

        {/* Desire Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 text-center md:text-left">
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  Já cansou do mesmo brownie batido que todo mundo conhece? E se eu te dissesse que existe um portal gourmet da folha sagrada que vai muito além disso?
                </p>
                <div className="font-headline text-2xl md:text-3xl leading-snug mb-8 normal-case space-y-4">
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
                  src="https://picsum.photos/seed/vsecret3/600/800"
                  alt="Drink premium verde"
                  width={500}
                  height={700}
                  className="rounded-xl shadow-2xl mx-auto md:-rotate-2 w-full max-w-sm h-auto"
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
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl uppercase leading-tight">
                Se até agora você só experimentou o básico, prepare-se para destravar o lado mais ousado da verdinha.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/50 overflow-hidden group text-left flex flex-col transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10"
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
                <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl uppercase mb-12 leading-tight">
                  Não confunda: isto não é um livro de receitas.
                </h2>
                <div className="max-w-3xl mx-auto text-lg text-left space-y-6">
                  <p>Isto é sobre <span className="text-primary font-semibold">evoluir e dominar</span>, do iniciante curioso ao Mestre Verde, desbloqueando rituais que ninguém fora do clube ousa conhecer.</p>
                  <p>É sobre ter acesso a um <span className="text-primary font-semibold">clube proibido</span>, onde membros trocam segredos que fariam qualquer chef tremer na base.</p>
                  <p>É sobre provar <span className="text-primary font-semibold">criações que desafiam a lógica</span> e que só existem aqui — transformando qualquer noite em um evento que ninguém vai esquecer.</p>
                </div>
            </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl uppercase text-center mb-12 leading-tight">
              O que os corajosos <span className="text-primary">estão dizendo</span>:
            </h2>
            <Carousel opts={{ align: "start", loop: true, }} className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full bg-background/50 border border-accent/20 p-6 rounded-lg flex flex-col justify-between">
                        <CardContent className="p-0">
                          <p className="text-base italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border/20">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                            className="rounded-full"
                            data-ai-hint={testimonial.hint}
                          />
                          <div>
                            <p className="font-bold text-sm">{testimonial.author}</p>
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
        <section className="py-16 sm:py-24" style={{ backgroundColor: '#0B1F14' }}>
             <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl uppercase mb-6 leading-tight text-white">Acesso vitalício ao segredo mais verde e gourmet do mundo</h2>
                 <p className="max-w-3xl mx-auto mb-12 text-base sm:text-lg text-white/80">
                    Ao entrar hoje, você libera um ecossistema secreto completo, feito para transformar qualquer prato em uma experiência única — e colocar você na jornada até se tornar um verdadeiro Mestre Verde.
                 </p>
                 <h3 className='font-headline text-3xl normal-case mb-8 text-white'>O que está incluído no seu acesso:</h3>

                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {offerStack.map(item => {
                        const Icon = item.icon
                        return (
                            <div key={item.title} className="bg-background/20 backdrop-blur-sm p-6 rounded-xl border border-accent/20 flex flex-col items-start text-left gap-4 text-white">
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent flex-shrink-0">
                                    <Icon className="w-6 h-6 text-accent-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-headline normal-case">{item.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                 <div className="max-w-xl mx-auto mb-10 text-center">
                     <p className="text-xl sm:text-2xl md:text-3xl font-headline normal-case text-white/70">
                         De <span className="line-through opacity-70">R$97,00</span> por
                     </p>
                      <p className="text-4xl sm:text-5xl md:text-6xl font-headline uppercase text-accent mb-2 flex items-center justify-center gap-3">
                         <Flame className='w-10 h-10' /> Apenas R$14,99 <Flame className='w-10 h-10' />
                     </p>
                     <p className="text-base sm:text-lg text-white/80">
                        Pagamento único e vitalício (mais barato que um correzinho ☕, e você leva o segredo pra sempre).
                     </p>
                 </div>
                <CTAButton>Liberar meu acesso vitalício agora</CTAButton>
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
                    <p className="text-base sm:text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">Esta é sua única chance. Acesso vitalício por apenas R$14,99. Quando o contador zerar, o preço sobe e o portal para o clube secreto da verdinha se fecha. Para sempre.</p>
                    <Countdown />
                    <div className="mt-8">
                        <CTAButton className="w-full sm:w-auto">Garantir meu acesso secreto agora</CTAButton>
                    </div>
                    <p className="mt-6 text-sm text-foreground/60">Depois que o tempo acabar, não adianta chorar. Você perdeu a chance.</p>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl uppercase text-center mb-12 leading-tight">
              Ainda com medo? Suas dúvidas respondidas.
            </h2>
             <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-border/50">
                  <AccordionTrigger className="text-base sm:text-lg font-semibold text-left py-5 hover:text-primary">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80 leading-relaxed">
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
               <div className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 mb-10 space-y-4">
                  <p>É sobre acender uma experiência em cada prato, transformar sua mesa em um altar e viver o prazer de ser um dos poucos que conhece o segredo.</p>
                  <p className="font-bold text-accent pt-4">O portal está aberto. A decisão de entrar (ou ficar de fora para sempre) é sua.</p>
               </div>
               <CTAButton>Quero entrar no Verdinha’s Secret</CTAButton>
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
