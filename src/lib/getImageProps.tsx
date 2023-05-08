const defaultEndpoint =
    'https://images-api.nasa.gov/search?q=black hole&media_type=image';

export default async function getImageProps() {
    const res = await fetch(defaultEndpoint);
    if (!res.ok) throw new Error('Failed to fetch Image Properties.');
    return res.json();
}
