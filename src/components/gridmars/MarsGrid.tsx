"use client"
import { useEffect, useState } from "react"
import { ManifestRoot } from "../../lib/mars-rover-photos/types"
import getRoverMore from "@/lib/mars-rover-photos/getRoverMore"
import InfoPanel from "../gridmars/infopanel/InfoPanel"
import MarsCard from "./card/MarsCard"
import styles from "./marsgrid.module.css"

type Card = {
    key: number
    href: string
    date: string
    sol: number
}

type Data = {
    data: {
        rover_data: {
            array: Card[]
        }
        manifest: ManifestRoot
    }
}

function MarsGrid({ data }: Data) {
    const { name, max_sol } = data.manifest.photo_manifest

    const [showButton, setShowButton] = useState(false)
    const [rover, setRover] = useState<Card[]>(data.rover_data.array)
    const [sol, setSol] = useState(max_sol)

    useEffect(() => {
        if (sol != 0) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, [sol])

    async function loadMoreCards() {
        const res = await getRoverMore(name.toLowerCase(), sol)
        setRover(rover.concat(res.array))
        setSol(res.nextSol)
    }

    const content = (
        <div className={styles.container}>
            <InfoPanel data={data} />
            <div className={styles.grid}>
                {rover.map((rover, i) => (
                    <MarsCard
                        key={i}
                        href={rover.href}
                        date={rover.date}
                        sol={rover.sol}
                    />
                ))}
            </div>
            {showButton && (
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.button}
                        onClick={() => loadMoreCards()}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    )
    return content
}

export default MarsGrid
