import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';

import styles from '../styles/pages/ImagePage.module.css';

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

type Card = {
    href: string;
    date: string;
    title: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(
        'https://images-api.nasa.gov/search?q=black hole&media_type=image'
    );
    const root: Root = await res.json();
    total = root.collection.metadata.total_hits;

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

// page
const ImagePage = ({
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
        let searchString = `https://images-api.nasa.gov/search?q=${input}&media_type=image`;

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
        let searchString = `https://images-api.nasa.gov/search?q=${input}&media_type=image&page=${pageCount}`;
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
            <section className={styles.container}>
                <div className={styles.title}>NASA Image Library</div>
                <Search handleSubmit={handleSubmit} />
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {cards.map((card, i) => (
                            <Card
                                key={i}
                                href={card.href}
                                date={card.date}
                                title={card.title}
                            />
                        ))}
                    </div>
                    {/* {loadButton()} */}
                    {showButton && loadButton()}
                </div>
            </section>
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
                    href={`/image-library/${title}`}
                >
                    Details
                </Link>
            </div>
        </>
    );
};

// layout
ImagePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default ImagePage;
