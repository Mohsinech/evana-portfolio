import React from "react";
import styles from "./app.module.css";
import { About, Hero, Work } from "@/components/sections";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Work />
    </main>
  );
}
