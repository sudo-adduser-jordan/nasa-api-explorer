import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';

import styles from '../styles/pages/VideoPage.module.css';
import Link from 'next/link';

// global variables
let input: FormDataEntryValue | null = '';
let componentKey = 100;
let pageCount = 1;
let total = 0;

// json to typescript converter
export interface Root {
    collection: Collection;
}

export interface Collection {
    version: string;
    href: string;
    items: Item[];
    metadata: Metadata;
    links: Link2[];
}

export interface Item {
    href: string;
    data: Daum[];
    links: Link[];
}

export interface Daum {
    center: string;
    title: string;
    keywords?: string[];
    location?: string;
    nasa_id: string;
    date_created: string;
    media_type: string;
    description_508?: string;
    description?: string;
    album?: string[];
    photographer?: string;
    secondary_creator?: string;
}

export interface Link {
    href: string;
    rel: string;
    render: string;
}

export interface Metadata {
    total_hits: number;
}

export interface Link2 {
    rel: string;
    prompt: string;
    href: string;
}

type Cards = {
    key: number;
    href: string;
    title: string;
};

type Card = {
    // key: number;
    href: string;
    date: string;
    title: string;
};

const defaultEndpoint =
    'https://images-api.nasa.gov/search?q=black hole&media_type=video';

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(defaultEndpoint);
    const root: Root = await res.json();

    const array: Card[] = [];
    for (let i = 0; i < root.collection.items.length; i++) {
        array.push({
            href: root.collection.items[i].links[0].href,
            date: root.collection.items[i].data[0].date_created,
            title: root.collection.items[i].data[0].title,
        });
    }

    return {
        props: {
            array,
        },
    };
};

const VideoPage = ({
    array,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
    const [cards, setCards] = useState<Card[]>(array);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        input = formData.get('searchInput');
        searchForCards();
    };

    const searchForCards = async () => {
        let searchString = `https://images-api.nasa.gov/search?q=${input}&media_type=video`;

        const res = await fetch(searchString);
        const root: Root = await res.json();
        total = root.collection.metadata.total_hits;

        if (root.collection.items.length === 100) {
            pageCount += 1;
        }

        const array: Card[] = [];

        for (let i = 0; i < root.collection.items.length; i++) {
            array.push({
                href: root.collection.items[i].links[0].href,
                date: root.collection.items[i].data[0].date_created,
                title: root.collection.items[i].data[0].title,
            });
        }
        console.log('searchForCards');
        console.log(searchString);
        console.log(array);
        setCards(array);
    };

    const loadMoreCards = async () => {
        let searchString = `https://images-api.nasa.gov/search?q=${input}&media_type=video&page=${pageCount}`;
        const res = await fetch(searchString);
        const root: Root = await res.json();
        total = root.collection.metadata.total_hits;

        if (root.collection.items.length === 100) {
            pageCount++;
        }

        const array: Card[] = [];

        for (let i = 0; i < root.collection.items.length; i++) {
            array.push({
                href: root.collection.items[i].links[0].href,
                date: root.collection.items[i].data[0].date_created,
                title: root.collection.items[i].data[0].title,
            });
        }
        console.log('loadMoreCards');
        console.log(searchString);
        console.log(array);
        setCards(cards.concat(array));
    };

    // #TODO button doesnt render on first load but will redner after search
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        setShowButton(true);
    }, []);

    const loadButton = () => {
        if (total > 100) {
            return (
                <div className={styles.buttonContainer}>
                    <button className={styles.load} onClick={loadMoreCards}>
                        Load More
                    </button>
                </div>
            );
        }
    };

    return (
        <>
            <main className={styles.container}>
                <div className={styles.title}>NASA Video Library</div>
                <Search handleSubmit={handleSubmit} />
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {cards.map((card, i) => {
                            return (
                                <Card
                                    key={i}
                                    href={card.href}
                                    date={card.date}
                                    title={card.title}
                                />
                            );
                        })}
                    </div>
                    {/* {loadButton()} */}
                    {showButton && loadButton()}
                </div>
            </main>
        </>
    );
};

// card
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
                    href={`/video-library/${title}`}
                >
                    Details
                </Link>
            </div>
        </>
    );
};

// layout
VideoPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default VideoPage;

//    {cards.map((card) => (
//         <Card
//             key={card.key}
//             href={card.href}
//             title={card.title}
//         />
//     ))
