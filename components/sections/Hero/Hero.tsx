"use client";

import styles from "./hero.module.css";
import TextPressure from "@/components/TextPressure/TextPressure";
import DecayCard from "@/components/DecayCard/DecayCard";
import React, { useEffect, useRef } from "react";

const Hero = () => {
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
    <section className={styles.hero}>
      <div
        style={{
          position: "relative",
          padding: "3rem 0",
          height: "800px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextPressure
          text="Evana."
          flex={true}
          alpha={false}
          stroke={true}
          width={true}
          weight={true}
          italic={true}
          textColor="#171717"
          strokeColor="#171717"
          minFontSize={120}
        />
      </div>
      {/* Image */}
      <div className={styles.profileImage} ref={imageRef}>
        <DecayCard
          width={500}
          height={600}
          image="/assets/images/profile.jpeg"
        ></DecayCard>
      </div>
    </section>
  );
};

export default Hero;
