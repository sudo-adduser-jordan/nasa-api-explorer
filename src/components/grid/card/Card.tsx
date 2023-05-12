import styles from './card.module.css';
import Link from 'next/link';
import Image from 'next/image';

export type Card = {
    href: string;
    date: string;
    title: string;
    media_type: string;
};

function VideoCard({ href, date, title, media_type }: Card) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={href} width={250} height={250} alt='' />
                </div>
                <div className={styles.date}>{date}</div>
                <div className={styles.cardTitle}>{title}</div>
                <Link
                    className={styles.details}
                    href={`${media_type}-library/${title}`}
                >
                    Details &rarr;
                </Link>
            </div>
        </>
    );
}

export default VideoCard;
