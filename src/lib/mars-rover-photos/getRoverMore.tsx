import { PhotoRoot, Card } from "./types"

async function getRoverMore(slug: string, sol: number) {
    const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${slug}/photos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&sol=${sol}`
    )

    if (!res.ok) throw new Error("Failed to fetch Rover More.")
    const data: PhotoRoot = await res.json()
    const nextSol = sol - 1
    const array: Card[] = []

    for (let i = 0; i < data.photos.length; i++) {
        array.push({
            key: data.photos[i].id,
            href: data.photos[i].img_src,
            date: data.photos[i].earth_date,
            sol: data.photos[i].sol,
        })
    }

    return { nextSol, array }
}

export default getRoverMore
