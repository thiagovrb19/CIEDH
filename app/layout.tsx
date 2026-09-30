import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: '3 Aulas Gratuitas | Cuidados com o Idoso — CIEDH',
  description: 'Participe gratuitamente de 3 aulas especiais da CIEDH e conheça fundamentos importantes para cuidar de pessoas idosas com segurança e preparo.',
  keywords: ['cuidador de idosos', 'curso cuidador de idosos', 'aulas gratuitas cuidador', 'CIEDH', 'saúde do idoso', 'capacitação profissional'],
  authors: [{ name: 'CIEDH' }],
  metadataBase: new URL('https://ciedh.edu.br'),
  openGraph: {
    title: '3 Aulas Gratuitas | Cuidados com o Idoso — CIEDH',
    description: 'Aprenda os primeiros passos para cuidar de pessoas idosas com mais segurança e preparo. Evento online gratuito.',
    images: [
      {
        url: '/images/hero-caregiver.jpg',
        width: 1200,
        height: 630,
        alt: 'Cuidados com o Idoso CIEDH',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/images/logo-ciedh.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased text-ciedh-dark bg-white">
        {children}
      </body>
    </html>
  );
}
