"use client";

import React, { useEffect, useRef } from "react";
import styles from "./app.module.css";
import { About, Hero, Work, Cta } from "@/components/sections";
import Lenis from "lenis";
import { Footer, Header } from "@/components/index";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current && lenisRef.current) {
      lenisRef.current.scrollTo(ref.current, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  return (
    <>
      <Header
        onScrollToAbout={() => scrollTo(aboutRef)}
        onScrollToWork={() => scrollTo(workRef)}
      />
      <main className={styles.main}>
        <Hero />
        <About aboutRef={aboutRef} />
        <Work workRef={workRef} />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
