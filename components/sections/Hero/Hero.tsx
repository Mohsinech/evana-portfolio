import React from "react";
import styles from "./hero.module.css";
import TextPressure from "@/components/TextPressure/TextPressure";

const Hero = () => {
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
          text="Evanaa."
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
    </section>
  );
};

export default Hero;
