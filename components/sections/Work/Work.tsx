import React from "react";
import styles from "./work.module.css";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";

const Work = () => {
  return (
    <section className={styles.work}>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=20%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.23}
        textClassName={styles.scrollText}
      >
        (02) Work
      </ScrollFloat>
    </section>
  );
};

export default Work;
