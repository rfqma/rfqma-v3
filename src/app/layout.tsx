import type { Metadata } from 'next';
import { Ubuntu_Mono } from 'next/font/google';
// import {
//   Inter,
//   Abel,
//   Rajdhani,
//   Space_Mono,
// } from 'next/font/google';
import './globals.css';
import { NextUIProviders } from '@/utils/providers/next-ui-providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

// const inter = Inter({ subsets: ['latin'] });
// const abel = Abel({
//   weight: '400',
//   subsets: ['latin'],
// });
// const rajdhani = Rajdhani({
//   weight: '600',
//   subsets: ['latin'],
// });
// const spaceMono = Space_Mono({
//   subsets: ['latin'],
//   weight: '700',
// });
const ubuntuMono = Ubuntu_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rfqma.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
  title: {
    template: 'rfqma | %s',
    default: 'rfqma',
  },
  description: 'fullstack developer, photography and videography enthusiast.',
  applicationName: 'rfqma-v3',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'rfqma',
    'rifqi maulana',
    'fullstack',
    'developer',
    'photography',
    'videography',
  ],
  authors: [{ name: 'Rifqi Maulana', url: 'https://github.com/rfqma' }],
  creator: 'Rifqi Maulana',
  publisher: 'Rifqi Maulana',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={ubuntuMono.className}>
        <NextUIProviders>
          <Header />
          {children}
          <Footer />
        </NextUIProviders>
      </body>
    </html>
  );
}
