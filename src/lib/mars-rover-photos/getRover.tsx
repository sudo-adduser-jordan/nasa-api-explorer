import { PhotoRoot, MarsCard } from './types';

async function getRover(slug: string, max_sol: number) {
    const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${slug}/photos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&sol=${max_sol}`
        // `https://api.nasa.gov/mars-photos/api/v1/rovers/${slug}/photos?api_key=${process.env.API_KEY}&sol=${max_sol}`
    );
    if (!res.ok) throw new Error('Failed to fetch Rover Properties.');
    const data: PhotoRoot = await res.json();

    const array: MarsCard[] = [];
    for (let i = 0; i < data.photos.length; i++) {
        array.push({
            key: data.photos[i].id,
            href: data.photos[i].img_src,
            date: data.photos[i].earth_date,
            sol: data.photos[i].sol,
        });
    }
    // to do next sol
    let nextSold = 0;

    return { array };
}

export default getRover;
