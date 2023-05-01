import { GetStaticProps, InferGetServerSidePropsType } from 'next';

import Layout from '../../../components/Layout';

import styles from '../../../styles/pages/ImagePage.module.css';
import Link from 'next/link';

// json to typescript converter
export interface Root {
    collection: Collection;
}

export interface Collection {
    version: string;
    href: string;
    items: Item[];
    metadata: Metadata;
    links: Link2[];
}

export interface Item {
    href: string;
    data: Daum[];
    links: Link[];
}

export interface Daum {
    center: string;
    title: string;
    keywords?: string[];
    location?: string;
    nasa_id: string;
    date_created: string;
    media_type: string;
    description_508?: string;
    description?: string;
    album?: string[];
    photographer?: string;
    secondary_creator?: string;
}

export interface Link {
    href: string;
    rel: string;
    render: string;
}

export interface Metadata {
    total_hits: number;
}

export interface Link2 {
    rel: string;
    prompt: string;
    href: string;
}

type Cards = {
    key: number;
    href: string;
    title: string;
};

type Card = {
    href: string;
    title: string;
};

const ImagePage = ({}) => {
    return (
        <>
            <main className={styles.container}>
                {/* TITLE */}
                <div className={styles.title}>NASA Image Library</div>
            </main>
        </>
    );
};

// card
const Card = ({ href, title }: Card) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={href} alt='' />
                </div>

                <div className={styles.description}>Title</div>
            </div>
        </>
    );
};

// layout
ImagePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default ImagePage;

//    {cards.map((card) => (
//         <Card
//             key={card.key}
//             href={card.href}
//             title={card.title}
//         />
//     ))
