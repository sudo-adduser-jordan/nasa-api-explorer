"use client";
import Link from "next/link";
import styles from "./navigation.module.css";
import { VscGithubInverted } from "react-icons/vsc";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Menu from "@/components/navigation/Menu";

export default function Navigation() {
  const [active, setActive] = useState(false);

  const pathname = usePathname();
  const array = pathname.split("/");
  let tab = array[array.length - 1];
  console.log(active);

  return (
    <>
      <Menu active={active} setActive={setActive} />
      <section className={styles.container}>
        <div className={styles.left}>
          <Link className={styles.logo} href={"/"}>
            <h1>NASA Api Explorer</h1>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link
            href={"/apod"}
            className={tab === "apod" ? styles.linkActive : styles.link}
          >
            Picture of The Day
          </Link>
          <Link
            href={"/image-library"}
            className={
              tab === "image-library" ? styles.linkActive : styles.link
            }
          >
            Images
          </Link>
          <Link
            href={"/video-library"}
            className={
              tab === "video-library" ? styles.linkActive : styles.link
            }
          >
            Videos
          </Link>
          <Link
            href={"/mars-rover-photos/spirit"}
            className={tab === "spirit" ? styles.linkActive : styles.link}
          >
            Mars
          </Link>
        </div>
        <Link
          href={"https://github.com/sudo-adduser-jordan/Nasa-Api-Explorer"}
          className={styles.github}
        >
          <VscGithubInverted size={30} />
        </Link>
        <button
          className={styles.toggleMenu}
          onClick={() => {
            setActive(!active);
          }}
        >
          <Link href={"/"}>Menu</Link>
        </button>
      </section>
    </>
  );
}
