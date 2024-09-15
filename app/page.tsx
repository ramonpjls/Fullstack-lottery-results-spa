import React from 'react';
import LotteryResultsList from './components/LotteryResultsList';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Resultados de Lotería</h1>
      <LotteryResultsList />
    </main>
  );
}