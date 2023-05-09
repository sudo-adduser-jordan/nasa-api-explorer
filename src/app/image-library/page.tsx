'use client';
import Link from 'next/link';
import getImages from '../../lib/getImages';
import getSearch from '../../lib/getSearch';
import getMore from '../../lib/getMore';
import Search from '../../components/search/Search';
import styles from './image.module.css';
import { Card } from './types';
import { useEffect, useState } from 'react';
import { Properties } from '@/lib/types';

export const metadata = {
    title: 'Image Library',
    description: 'Image Library Page',
};

function Page() {
    const [showButton, setShowButton] = useState(false);
    const [cards, setCards] = useState<Card[]>([]);
    const [page, setPage] = useState('');

    // load state with server component
    useEffect(() => {
        const getArray = async () => {
            const props: Properties = await getImages();
            setCards(props.array);
            setPage(props.nextPage);
        };
        // call the function
        getArray().catch(console.error);
    }, []);

    // load button & change on state
    useEffect(() => {
        if (page != '') {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [page]);

    // get search input
    async function handleSubmit(e: any) {
        e.preventDefault();
        setPage('');

        // search data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // response data
        const props: Properties = await getSearch('image', formJson['search']);

        // set state
        setCards(props.array);
        if (props.nextPage != undefined) {
            setPage(props.nextPage);
        }
    }

    async function loadMoreCards() {
        // response data
        const array = await getMore(page);
        setCards(cards.concat(array));
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
                {showButton && (
                    <div className={styles.buttonContainer}>
                        <button className={styles.load} onClick={loadMoreCards}>
                            Load More
                        </button>
                    </div>
                )}
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
