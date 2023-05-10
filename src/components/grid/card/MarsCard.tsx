import styles from './card.module.css';
import Link from 'next/link';
import Image from 'next/image';

export type Card = {
    key: number;
    href: string;
    date: string;
    sol: number;
};

function MarsCard({ key, href, date, sol }: Card) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={href} width={250} height={250} alt='' />
                </div>
                <div className={styles.date}>{date}</div>
                <Link className={styles.details} href={`/${key}`}>
                    Details &rarr;
                </Link>
            </div>
        </>
    );
}

export default MarsCard;
