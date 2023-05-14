'use client';
import { SyntheticEvent, useEffect, useState } from 'react';
import getMore from '../../lib/search/getMore';
import getSearch from '../../lib/search/getSearch';
import Search from './search/Search';
import styles from './grid.module.css';
import Card from './card/Card';
// import LoadButton from '../button/LoadMore';
import { Root } from '../../lib/search/types';

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
        const data = await getMore(page);
        setCards(cards.concat(data.array));
        setPage(data.nextPage);
    }

    // async function loadMoreCards() {
    //     console.log(page);
    //     const res = await fetch(page);
    //     if (!res.ok) throw new Error('Failed to fetch More Properties.');
    //     const root: Root = await res.json();

    //     const items = root.collection.items;

    //     let nextPage = '';
    //     if (root.collection.links != undefined) {
    //         nextPage = root.collection.links[1].href;
    //     }

    //     const array: Card[] = [];
    //     for (let i = 0; i < items.length; i++) {
    //         array.push({
    //             key: i,
    //             href: items[i].links[0].href,
    //             date: items[i].data[0].date_created.slice(0, 10),
    //             title: items[i].data[0].title,
    //         });
    //     }

    //     setCards(cards.concat(array));
    //     setPage(nextPage);
    // }

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
                {showButton && (
                    <button
                        type='button'
                        // style={{ cursor: 'pointer' }}
                        // className={styles.button}
                        onClick={(e) => loadMoreCards()}
                        onTouchStart={(e) => loadMoreCards()}
                    >
                        Load More
                    </button>
                )}
            </div>
        </>
    );
    return content;
}

export default Grid;
