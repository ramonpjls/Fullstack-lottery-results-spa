import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from './components/ui/toaster';
import QueryProvider from './lib/QueryProvider';  // Importa el nuevo QueryProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lottery Results',
  description: 'View and manage lottery results',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
