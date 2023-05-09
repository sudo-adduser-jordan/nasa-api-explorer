import { Root, Card } from './types';

async function getMore(page: string) {
    const res = await fetch(page);
    if (!res.ok) throw new Error('Failed to fetch More Properties.');
    const data: Root = await res.json();

    const items = data.collection.items;

    const array: Card[] = [];
    for (let i = 0; i < items.length; i++) {
        array.push({
            href: items[i].links[0].href,
            date: items[i].data[0].date_created.slice(0, 10),
            title: items[i].data[0].title,
        });
    }

    return array;
}

export default getMore;
