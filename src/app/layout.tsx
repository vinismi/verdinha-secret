import type { Metadata } from 'next';
import { Poppins, Lilita_One } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
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
        {/* Meta Pixel Code */}
        <Script id="fb-pixel-script" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '817922931179070');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=817922931179070&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        {children}
        <Toaster />
      </body>
    </html>
  );
}
