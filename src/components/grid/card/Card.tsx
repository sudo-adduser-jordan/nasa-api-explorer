import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

export type Data = {
  href: string;
  date: string;
  title: string;
  nasa_id: string;
  media_type: string;
};

function VideoCard({ href, date, title, nasa_id, media_type }: Data) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={href} width={250} height={250} alt="" />
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.title}>{title}</div>
      <button className={styles.button}>
        <Link href={`${media_type}-library/${title}/${nasa_id}`}>
          Details &rarr;
        </Link>
      </button>
    </div>
  );
}

export default VideoCard;
