import React from "react";
import styles from "./work.module.css";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import { workCardData } from "@/components/WorkCard/data";
import WorkCard from "@/components/WorkCard/WorkCard";

export const Work = ({
  workRef,
}: {
  workRef: React.RefObject<HTMLElement | null>;
}) => {
  return (
    <section className={styles.work} ref={workRef}>
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

      {/* Work Section */}
      <div className={styles.work_content}>
        {workCardData.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Work;
