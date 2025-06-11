// Header.tsx
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link } from "next-view-transitions";

const Header = ({
  onScrollToAbout,
  onScrollToWork,
}: {
  onScrollToAbout: () => void;
  onScrollToWork: () => void;
}) => {
  const [time, setTime] = useState<string>("00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>Evana </h1>
        </Link>
      </div>

      <div className={styles.nav}>
        <ul>
          <li>
            <a onClick={onScrollToAbout}>About</a>
          </li>
          <li>
            <a onClick={onScrollToWork}>Work</a>
          </li>
          <li>
            <a href="#">Barcelona &bull; Spain</a>
          </li>
        </ul>
        <h1 className={styles.time}>[ {time} ]</h1>
      </div>
    </header>
  );
};

export default Header;
