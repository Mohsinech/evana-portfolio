"use client";

import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const [time, setTime] = useState<string>("00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 EDITION</p>
      <p>[ {time} ]</p>
    </footer>
  );
};

export default Footer;
