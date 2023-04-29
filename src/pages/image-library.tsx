import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';

import styles from '../styles/pages/ImagePage.module.css';

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
    description: string;
};

type SearchInput = {
    searchInput: string;
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
            description: root.collection.items[i].data[0].title,
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
                description: root.collection.items[i].data[0].title,
            });
        }
        console.log('searchForCards');
        console.log('pageCount: ' + pageCount);
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
                description: root.collection.items[i].data[0].title,
            });
        }
        console.log('loadMoreCards');
        console.log('pageCount: ' + pageCount);
        console.log(array);
        setCards(cards.concat(array));
    };

    const [showButton, setShowButton] = useState(true);
    useEffect(() => {
        setShowButton(true);
    }, []);

    const loadButton = () => {
        if (total > 100) {
            setShowButton(true);
            // return (
            //     <div className={styles.buttonContainer}>
            //         <button className={styles.load} onClick={loadMoreCards}>
            //             Load More
            //         </button>
            //     </div>
            // );
            // }
        } else {
            setShowButton(false);
        }
    };

    return (
        <>
            <section className={styles.container}>
                <Search handleSubmit={handleSubmit} />
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {cards.map((card, i) => (
                            // <Card key={i} href={card.href} description={i} />
                            <Card
                                key={i}
                                href={card.href}
                                description={card.description}
                            />
                        ))}
                    </div>

                    {/* {loadButton()} */}
                    {showButton && (
                        <div className={styles.buttonContainer}>
                            <button
                                className={styles.load}
                                onClick={loadMoreCards}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

// card
const Card = ({ href, description }: Card) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={href} alt='' />
                </div>

                <div className={styles.description}>{description}</div>
            </div>
        </>
    );
};

// layout
ImagePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default ImagePage;
