
import {
  Leaf,
  Martini,
  Cookie,
  Lightbulb,
  PartyPopper,
  Bot,
  Wand2,
  ChefHat,
  Salad,
  Clock4,
  Target,
  Donut,
  Flame,
} from 'lucide-react';
import { placeholderImages } from './placeholder-images';

export const checkoutUrl = 'https://www.ggcheckout.com/checkout/v2/K5J4NJtPrnBk5uOAvcPp';

export const benefits = [
  {
    icon: Leaf,
    title: 'Do básico ao Mestre Verde',
    description:
      'Segredos que transformam sua cozinha no palco da erva da alegria, do simples ao sofisticado.',
    image: placeholderImages.benefitRecipes.imageUrl,
    hint: placeholderImages.benefitRecipes.imageHint,
  },
  {
    icon: Martini,
    title: 'Drinks que ninguém mais conhece',
    description:
      'Cansado da mesmice? Aprenda combinações que você não encontra em nenhum bar (e que ninguém terá coragem de copiar).',
    image: placeholderImages.benefitDrinks.imageUrl,
    hint: placeholderImages.benefitDrinks.imageHint,
  },
  {
    icon: Cookie,
    title: 'Snacks que desafiam o óbvio',
    description:
      'Lanches rápidos, perfeitos para qualquer hora, com um toque secreto que vicia mais que o normal.',
    image: placeholderImages.benefitSnacks.imageUrl,
    hint: placeholderImages.benefitSnacks.imageHint,
  },
  {
    icon: Lightbulb,
    title: 'O poder real da folha sagrada',
    description:
      'Aprenda técnicas de infusão que separam os amadores dos mestres. Você está pronto para extrair o poder máximo?',
    image: placeholderImages.benefitInfusion.imageUrl,
    hint: placeholderImages.benefitInfusion.imageHint,
  },
  {
    icon: PartyPopper,
    title: 'Cardápios para noites lendárias',
    description:
      'Experiências completas para impressionar qualquer rolê e deixar todo mundo perguntando seu segredo.',
    image: placeholderImages.benefitMenus.imageUrl,
    hint: placeholderImages.benefitMenus.imageHint,
  },
  {
    icon: Bot,
    title: 'Tecnologia Gourmet Secreta',
    description:
      'Uma chef-robô particular, 24h por dia, para sugerir ousadias, combinações e usos que você nunca imaginou.',
    image: placeholderImages.benefitAiTech.imageUrl,
    hint: placeholderImages.benefitAiTech.imageHint,
  },
];

export const testimonials = placeholderImages.testimonials;

export const portalImages = placeholderImages.portalPreviews;

export const communityCreations = placeholderImages.communityCreations;

export const offerStack = [
  {
    icon: Leaf,
    title: 'Plataforma Secreta Gourmet',
    description:
      'O seu laboratório secreto de criações culinárias, onde todo prato se transforma.',
  },
  {
    icon: Target,
    title: 'Cardápios Temáticos Exclusivos',
    description:
      'Receitas perfeitas para qualquer ocasião, montadas para impressionar e encantar.',
  },
  {
    icon: Donut,
    title: 'Receitas Criativas e Exclusivas',
    description:
      'Acesso a receitas únicas, que ninguém mais vai encontrar. Você vai criar como um verdadeiro chef.',
  },
  {
    icon: Bot,
    title: 'Tecnologia Gourmet da Verdinha',
    description:
      'A chef-robô que sugere combinações, cria pratos personalizados e transforma sua cozinha com o toque secreto da folha sagrada.',
  },
  {
    icon: Flame,
    title: 'Desafios e Experiências Secretas',
    description:
      'Prove suas habilidades e desafie-se para desbloquear novas receitas e conquistas secretas.',
  },
];

export const faqItems = [
  {
    question: 'Preciso ser bom na cozinha?',
    answer:
      "Não! O Verdinha's Secret foi desenhado para todos os níveis. Temos conteúdos que vão do zero absoluto até técnicas avançadas para quem já domina a arte do tempero secreto.",
  },
];

export const techBenefits = [
  {
    icon: Wand2,
    title: 'Sugestões Inusitadas',
    description:
      'Combinações que você nunca imaginou, para surpreender até os paladares mais exigentes.',
  },
  {
    icon: ChefHat,
    title: 'Pratos Personalizados',
    description:
      'Crie receitas únicas com os ingredientes que você já tem na sua geladeira ou despensa.',
  },
  {
    icon: Salad,
    title: 'Harmonizações Únicas',
    description:
      'Descubra os drinks e acompanhamentos perfeitos para cada uma das suas criações verdes.',
  },
  {
    icon: Clock4,
    title: 'Disponível 24/7',
    description:
      'Sua chef particular está sempre pronta para ajudar, a qualquer hora do dia ou da noite.',
  },
];
