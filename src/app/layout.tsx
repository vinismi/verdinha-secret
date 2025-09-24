import type { Metadata } from 'next';
import { Poppins, Lilita_One } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '600'],
});

const lilitaOne = Lilita_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lilita-one',
  weight: '400',
});

export const metadata: Metadata = {
  title: "Verdinha's Secret",
  description:
    'Descubra o segredo da cozinha com o tempero verde mais famoso do mundo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${lilitaOne.variable}`}
    >
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
