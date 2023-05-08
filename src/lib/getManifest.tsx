export default async function getApod(slug: string) {
    const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${slug}?api_key=${process.env.DATABASE_KEY}`
    );
    if (!res.ok) throw new Error('Failed to fetch Image Properties.');
    return res.json();
}
