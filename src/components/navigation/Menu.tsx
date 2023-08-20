import Link from "next/link";
import React from "react";
import styles from "./menu.module.css";
import { GrClose } from "react-icons/gr";

GrClose;

export default function Menu() {
  return (
    <section className={styles.container}>
      <div className={styles.iconContainer}>
        <GrClose className={styles.icon} />
      </div>
      <Link href={"/"} className={styles.link}>
        Home
      </Link>
      <Link href={"/"} className={styles.link}>
        Picture of the Day
      </Link>
      <Link href={"/"} className={styles.link}>
        Images
      </Link>
      <Link href={"/"} className={styles.link}>
        Videos
      </Link>
      <Link href={"/"} className={styles.link}>
        Mars
      </Link>
    </section>
  );
}
