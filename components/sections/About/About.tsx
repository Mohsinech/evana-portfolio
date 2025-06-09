"use client";

import React, { useEffect, useRef } from "react";
import styles from "./about.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import DecayCard from "@/components/DecayCard/DecayCard";

const About = () => {
  // Image Scroll Effect
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(-50%, -50%) translateY(${
          -scrollY * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {/* Image */}
        <div className={styles.profileImage} ref={imageRef}>
          <DecayCard
            width={500}
            height={600}
            image="/assets/images/profile.jpeg"
          ></DecayCard>
        </div>
      </div>
    </section>
  );
};

export default About;
