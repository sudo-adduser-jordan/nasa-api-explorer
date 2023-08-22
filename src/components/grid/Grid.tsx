"use client"
import { useEffect, useState } from "react"
import getMore from "../../lib/search/getMore"
import getSearch from "../../lib/search/getSearch"
import Search from "./search/Search"
import styles from "./grid.module.css"
import Card from "./card/Card"

type Card = {
    key: number
    href: string
    date: string
    title: string
    nasa_id: string
}

type Data = {
    data: {
        media_type: string
        nextPage: string
        array: Card[]
    }
}

export default function Grid({ data }: Data) {
    const [showButton, setShowButton] = useState(false)
    const [cards, setCards] = useState<Card[]>(data.array)
    const [page, setPage] = useState(data.nextPage)

    useEffect(() => {
        if (page != "") {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, [page])

    async function handleSubmit(e: any) {
        e.preventDefault()
        setPage("")

        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        const search_data = await getSearch(data.media_type, formJson["search"])

        setCards(search_data.array)
        if (search_data.nextPage != undefined) {
            setPage(search_data.nextPage)
        }
    }

    async function loadMoreCards() {
        const data = await getMore(page)
        setCards(cards.concat(data.array))
        setPage(data.nextPage)
    }

    return (
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
                            nasa_id={card.nasa_id}
                            media_type={data.media_type}
                        />
                    ))}
                </div>
                {showButton && (
                    <button
                        className={styles.button}
                        onClick={() => loadMoreCards()}
                    >
                        Load More
                    </button>
                )}
            </div>
        </>
    )
}
