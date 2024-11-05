import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { Anek_Telugu } from 'next/font/google';

const AnekTelugu = Anek_Telugu({
  subsets: ['latin'],
  variable: '--font-catpion',
});

export const metadata: Metadata = {
  title: 'Luc Saint Pol - Developpeur Web',
  description: 'Developpeur JS - React & NodeJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, AnekTelugu.variable)}>
        {children}
      </body>
    </html>
  );
}
