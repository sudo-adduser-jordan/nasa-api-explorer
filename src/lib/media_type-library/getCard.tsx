export interface Root {
    collection: Collection;
}

export interface Collection {
    version: string;
    href: string;
    items: Item[];
    metadata: Metadata;
}

export interface Item {
    href: string;
    data: Daum[];
    links: Link[];
}

export interface Daum {
    center: string;
    title: string;
    keywords: string[];
    nasa_id: string;
    date_created: string;
    media_type: string;
    description_508: string;
    secondary_creator: string;
    description: string;
}

export interface Link {
    href: string;
    rel: string;
    render: string;
}

export interface Metadata {
    total_hits: number;
}

async function getCard(nasa_id: string) {
    const res = await fetch(`https://images-api.nasa.gov/search?q=${nasa_id}`);
    if (!res.ok) throw new Error('Failed to fetch Card Properties.');
    const data: Root = await res.json();

    return {
        href: data.collection.items[0].links[0].href,
        description: data.collection.items[0].data[0].description,
    };
}

export default getCard;
