import React, { useEffect, useState } from "react";
import styles from "./preloader.module.css";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time or hook this to your actual loading logic
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return <div className={styles.preloader}></div>;
};

export default Preloader;
