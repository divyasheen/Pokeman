'use client';

import ClientPokedex from '@/app/components/ClientPokedex';
import styles from './components/PokemonDisplay.module.scss';
import { usePokemonData } from '@/app/hooks/usePokemonData';import Image from "next/image";

export default function Home() {
  const { isQuizMode } = usePokemonData();

  return (
    <main className={styles.main}>
      <ClientPokedex isQuizMode={isQuizMode} />
    </main>
  );
}
