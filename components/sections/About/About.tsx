"use client";

import styles from "./about.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";

const About = () => {
  return (
    <section className={styles.about}>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=20%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.02}
        textClassName={styles.scrollText}
      >
        (01) About
      </ScrollFloat>
      <div className={styles.content}>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1}
          blurStrength={15}
        >
          I&apos;m Evana Martiniez — a portrait photographer based in Barcelona,
          capturing timeless moments with light, soul, and intention. My passion
          lies in revealing the beauty of raw expression. Whether it’s a quiet
          gaze or a fleeting smile, I aim to freeze emotion in its most honest
          form. With over 7 years behind the lens, I’ve worked with artists,
          families, and individuals seeking more than just a photograph — they
          want a story, a feeling, a memory. Let’s create something
          unforgettable together.
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
