"use client";

import React from "react";
import styles from "./work.module.css";
import DecayCard from "../DecayCard/DecayCard";

interface WorkCardProps {
  image: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ image }) => {
  return (
    <div className={styles.work_card}>
      <DecayCard width={600} height={700} image={image}></DecayCard>
    </div>
  );
};

export default WorkCard;
