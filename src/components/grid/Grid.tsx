'use client';
import { useEffect, useState } from 'react';
import getMoreSearch from '../../lib/search/getMoreSearch';
import getSearch from '../../lib/search/getSearch';
import Search from './search/Search';
import styles from './grid.module.css';
import Card from './card/Card';

type SearchData = {
    nextPage: string;
    array: Card[];
};

type Card = {
    key: number;
    href: string;
    date: string;
    title: string;
};

type Data = {
    data: {
        media_type: string;
        nextPage: string;
        array: Card[];
    };
};

function Grid({ data }: Data) {
    const [showButton, setShowButton] = useState(false);
    const [cards, setCards] = useState<Card[]>(data.array);
    const [page, setPage] = useState('');

    // load button change on state
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
        const search_data: SearchData = await getSearch(
            data.media_type,
            formJson['search']
        );

        // set state
        setCards(search_data.array);
        if (search_data.nextPage != undefined) {
            setPage(search_data.nextPage);
        }
    }

    async function loadMoreCards() {
        const search_data: SearchData = await getMoreSearch(page);
        setCards(cards.concat(search_data.array));
        setPage(search_data.nextPage);
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
        </>
    );
    return content;
}

export default Grid;
