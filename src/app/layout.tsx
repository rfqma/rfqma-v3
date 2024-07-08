import type { Metadata } from 'next';
import {
  Inter,
  Abel,
  Rajdhani,
  Ubuntu_Mono,
  Space_Mono,
} from 'next/font/google';
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
  title: 'rfqma',
  description: 'fullstack developer, photography and videography enthusiast.',
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
