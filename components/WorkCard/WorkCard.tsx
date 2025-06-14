import React, { useEffect, useState } from "react";
import styles from "./work.module.css";
import DecayCard from "../DecayCard/DecayCard";

interface WorkCardProps {
  image: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ image }) => {
  const [dimensions, setDimensions] = useState({ width: 600, height: 700 });

  useEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width < 620) {
        setDimensions({ width: 400, height: 500 });
      } else {
        setDimensions({ width: 600, height: 700 });
      }

      if (width < 400) setDimensions({ width: 250, height: 300 });
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className={styles.work_card}>
      <DecayCard
        width={dimensions.width}
        height={dimensions.height}
        image={image}
      />
    </div>
  );
};

export default WorkCard;
