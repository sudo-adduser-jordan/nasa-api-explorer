const defaultEndpoint = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

export default async function getApod() {
    const res = await fetch(defaultEndpoint);
    if (!res.ok) throw new Error('Failed to fetch Image Properties.');
    return res.json();
}
