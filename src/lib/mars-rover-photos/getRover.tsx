async function getRover(slug: string, max_sol: number) {
    const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${slug}/photos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&sol=${max_sol}`
        // `https://api.nasa.gov/mars-photos/api/v1/rovers/${slug}/photos?api_key=${process.env.API_KEY}&sol=${max_sol}`
    );
    if (!res.ok) throw new Error('Failed to fetch Rover Properties.');
    return res.json();
}

export default getRover;
