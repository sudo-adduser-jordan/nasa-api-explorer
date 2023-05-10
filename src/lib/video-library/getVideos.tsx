import { Root, Card } from './types';

const defaultEndpoint =
    'https://images-api.nasa.gov/search?q=star&media_type=video';

async function getVideos() {
    const res = await fetch(defaultEndpoint);
    if (!res.ok) throw new Error('Failed to fetch Video Properties.');
    const data: Root = await res.json();

    const items = data.collection.items;

    const array: Card[] = [];
    for (let i = 0; i < items.length; i++) {
        array.push({
            key: i,
            href: items[i].links[0].href,
            date: items[i].data[0].date_created.slice(0, 10),
            title: items[i].data[0].title,
        });
    }

    let nextPage = '';
    if (data.collection.links != undefined) {
        nextPage = data.collection.links[0].href;
    }

    return {
        nextPage,
        array,
    };
}

export default getVideos;
