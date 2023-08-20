import Link from "next/link";
import styles from "./navigation.module.css";

import { VscGithubInverted } from "react-icons/vsc";

export default function Navigation() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <Link className={styles.logo} href={"/"}>
          <h1>NASA Api Explorer</h1>
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link href={"/apod"} className={styles.link}>
          Picture of The Day
        </Link>
        <Link href={"/image-library"} className={styles.link}>
          Images
        </Link>
        <Link href={"/video-library"} className={styles.link}>
          Videos
        </Link>
        <Link href={"/mars-rover-photos/spirit"} className={styles.link}>
          Mars
        </Link>
      </div>
      <Link
        href={"https://github.com/sudo-adduser-jordan/Nasa-Api-Explorer"}
        className={styles.github}
      >
        <VscGithubInverted size={30} />
      </Link>
    </section>
  );
}
