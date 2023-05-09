'use client';
import Link from 'next/link';
import getImages from '../../lib/getImages';
import getSearch from '../../lib/getSearch';
import Search from '../../components/search/Search';
import styles from './image.module.css';
import { Card } from './types';
import { useEffect, useState } from 'react';

export const metadata = {
    title: 'Image Library',
    description: 'Image Library Page',
};

function Page() {
    const [cards, setCards] = useState<Card[]>([]);

    // load state with server component
    useEffect(() => {
        const getArray = async () => {
            const array = await getImages();
            setCards(array);
        };
        // call the function
        getArray().catch(console.error);
    }, []);

    // get search input
    async function handleSubmit(e: any) {
        e.preventDefault();

        // search data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // response data
        const array = await getSearch('image', formJson['search']);
        setCards(array);
    }

    const content = (
        <section className={styles.container}>
            <div className={styles.title}>Image Library</div>
            <Search handleSubmit={handleSubmit} />
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {cards.map((card, i) => (
                        <Card
                            key={i}
                            href={card.href}
                            date={card.date.slice(0, 10)}
                            title={card.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );

    return content;
}

const Card = ({ href, date, title }: Card) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={href} alt='' />
                </div>
                <div className={styles.date}>{date}</div>
                <div className={styles.cardTitle}>{title}</div>
                <Link
                    className={styles.details}
                    href={`/image-library/${title}`}
                >
                    Details &rarr;
                </Link>
            </div>
        </>
    );
};

export default Page;
