'use client';
import { useEffect, useState } from 'react';
import getMoreSearch from '../../lib/search/getMoreSearch';
import getSearch from '../../lib/search/getSearch';
import Search from './search/Search';
import styles from './grid.module.css';
import Card from './card/Card';
import LoadButton from '../button/LoadMore';

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
    const [page, setPage] = useState(data.nextPage);

    // init button
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
        const search_data = await getSearch(
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
        const data = await getMoreSearch(page);
        setCards(cards.concat(data.array));
        setPage(data.nextPage);
    }

    const content = (
        <>
            <Search handleSubmit={handleSubmit} />
            <div className={styles.container}>
                <div className={styles.grid}>
                    {cards.map((card, i) => (
                        <Card
                            key={i}
                            href={card.href}
                            date={card.date.slice(0, 10)}
                            title={card.title}
                            media_type={data.media_type}
                        />
                    ))}
                </div>
                {
                    showButton && (
                        <button
                            type='button'
                            // onClick={loadMoreCards}
                            className={styles.button}
                        >
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={loadMoreCards}
                            >
                                Load More
                            </span>
                        </button>
                    )
                    // <LoadButton loadMoreCards={loadMoreCards}
                }
            </div>
        </>
    );
    return content;
}

export default Grid;
