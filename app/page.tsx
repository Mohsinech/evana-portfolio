import React from "react";
import styles from "./app.module.css";
import { About, Hero, Work, Cta } from "@/components/sections";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Work />
      <Cta />
    </main>
  );
}
