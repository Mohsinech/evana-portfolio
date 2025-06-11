import React from "react";
import styles from "./cta.module.css";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";

const Cta = () => {
  return (
    <section className={styles.cta}>
      <ScrollFloat
        animationDuration={2}
        ease="back.inOut(2)"
        scrollStart="center bottom+=20%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.3}
        textClassName={styles.scrollText}
      >
        ⤷ evana@contact.me
      </ScrollFloat>
    </section>
  );
};

export default Cta;
