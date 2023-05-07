import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Root, Card } from './type';
import Layout from '../../components/Layout/Layout';
import Search from '../../components/Search/Search';

import styles from './ImagePage.module.css';

const defaultEndpoint =
    'https://images-api.nasa.gov/search?q=black hole&media_type=image';

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(defaultEndpoint);
    const root: Root = await res.json();

    const array: Card[] = [];
    for (let i = 0; i < root.collection.items.length; i++) {
        array.push({
            href: root.collection.items[i].links[0].href,
            date: root.collection.items[i].data[0].date_created.slice(0, 10),
            title: root.collection.items[i].data[0].title,
        });
    }

    let hasNextPage = '';
    if (root.collection.links != undefined) {
        hasNextPage = root.collection.links[0].href;
    }

    return {
        props: {
            hasNextPage,
            array,
        },
    };
};

const ImagePage = ({
    hasNextPage,
    array,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
    const [cards, setCards] = useState<Card[]>(array);
    const [page, setPage] = useState(hasNextPage);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (page != '') {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [page]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        searchForCards(formData.get('searchInput'));
    };

    const searchForCards = async (input: FormDataEntryValue | null) => {
        let searchString = `https://images-api.nasa.gov/search?q=${input}&media_type=image`;

        const res = await fetch(searchString);
        const root: Root = await res.json();

        setPage('');
        if (root.collection.links != undefined) {
            setPage(root.collection.links[0].href);
        }

        const array: Card[] = [];
        for (let i = 0; i < root.collection.items.length; i++) {
            array.push({
                href: root.collection.items[i].links[0].href,
                date: root.collection.items[i].data[0].date_created.slice(
                    0,
                    10
                ),
                title: root.collection.items[i].data[0].title,
            });
        }

        console.log('searchForCards');
        console.log(searchString);
        console.log(array);
        setCards(array);
    };

    const loadMoreCards = async () => {
        const res = await fetch(page);
        const root: Root = await res.json();

        setPage('');
        if (root.collection.links.length > 1) {
            setPage(root.collection.links[1].href);
        }

        const array: Card[] = [];
        for (let i = 0; i < root.collection.items.length; i++) {
            array.push({
                href: root.collection.items[i].links[0].href,
                date: root.collection.items[i].data[0].date_created.slice(
                    0,
                    10
                ),
                title: root.collection.items[i].data[0].title,
            });
        }

        console.log('loadMoreCards');
        console.log(page);
        console.log(array);
        setCards(cards.concat(array));
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

ImagePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default ImagePage;
