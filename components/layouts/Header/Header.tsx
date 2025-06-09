import React from "react";
import styles from "./header.module.css";
import { Link } from "next-view-transitions";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Link href="/">
          <h1>Eva Martinez</h1>
        </Link>
      </div>

      {/* Navbar x Email*/}
      <div className={styles.nav}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Freelancer designer & developer</a>
          </li>
        </ul>

        {/*  time */}
        <h1 className={styles.time}>[ 00:00 ]</h1>
      </div>
    </header>
  );
};

export default Header;
