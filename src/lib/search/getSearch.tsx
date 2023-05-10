import { Root, Card } from './types';

async function getSearch(type: string, input: FormDataEntryValue) {
    const res = await fetch(
        `https://images-api.nasa.gov/search?q=${input}&media_type=${type}`
    );
    if (!res.ok) throw new Error('Failed to fetch Search Properties.');
    const data: Root = await res.json();

    const items = data.collection.items;

    let nextPage = '';
    if (data.collection.links != undefined) {
        nextPage = data.collection.links[0].href;
    }

    const array: Card[] = [];
    for (let i = 0; i < items.length; i++) {
        array.push({
            key: i,
            href: items[i].links[0].href,
            date: items[i].data[0].date_created.slice(0, 10),
            title: items[i].data[0].title,
        });
    }

    return {
        nextPage,
        array,
    };
}

export default getSearch;
