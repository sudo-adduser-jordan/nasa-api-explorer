'use client';
import getVideos from '../../lib/video-library/getVideos';
import getMore from '../../lib/search/getMoreSearch';
import getSearch from '../../lib/search/getSearch';
import Search from './search/Search';
import styles from './grid.module.css';
import { useEffect, useState } from 'react';
import Card from './card/Card';
import getImages from '@/lib/image-library/getImages';

type Properties = {
    nextPage: string;
    array: Card[];
};

export type Card = {
    key: number;
    href: string;
    date: string;
    title: string;
};

function Grid({ media_type }: any) {
    const [showButton, setShowButton] = useState(false);
    const [cards, setCards] = useState<Card[]>([]);
    const [page, setPage] = useState('');

    // load state with server component
    useEffect(() => {
        const getArray = async () => {
            console.log('on mount media type: ' + media_type);
            if (media_type === 'image') {
                const data = await getImages();
                setPage(data.nextPage);
                setCards(data.array);
                console.log('image');
            }
            if (media_type === 'video') {
                const data = await getVideos();
                setPage(data.nextPage);
                setCards(data.array);
                console.log('video');
            }
        };
        // call the function
        getArray().catch(console.error);
    }, [media_type]);

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
        const props: Properties = await getSearch(
            media_type,
            formJson['search']
        );

        // set state
        setCards(props.array);
        if (props.nextPage != undefined) {
            setPage(props.nextPage);
        }
    }

    async function loadMoreCards() {
        const props: Properties = await getMore(page);
        setCards(cards.concat(props.array));
        setPage(props.nextPage);
    }

    const content = (
        <>
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
            ;
        </>
    );
    return content;
}

export default Grid;
