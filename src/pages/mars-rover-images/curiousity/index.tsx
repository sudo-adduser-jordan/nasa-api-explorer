import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

import Layout from '../../../components/Layout/Layout';
import NestedLayout from '../../../components/NestedLayout/NestedLayout';
import styles from './Curiousity.module.css';

export interface Root {
    latest_photos: LatestPhoto[];
}

export interface LatestPhoto {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

export interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

type Card = {
    href: string;
    date: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY'
    );
    const root: Root = await res.json();

    const array: Card[] = [];
    for (let i = 0; i < root.latest_photos.length; i++) {
        array.push({
            href: root.latest_photos[i].img_src,
            date: root.latest_photos[i].earth_date,
        });
    }

    return {
        props: {
            array,
        },
    };
};

const CuriousityPage = ({
    array,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
    const [cards, setCards] = useState<Card[]>(array);

    return (
        <>
            <section className={styles.container}>
                <div className={styles.gridContainer}>
                    <div className={styles.title}>Most Recent Images</div>
                    <div className={styles.grid}>
                        {cards.map((card, i) => (
                            <Card key={i} href={card.href} date={card.date} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

const Card = ({ href, date }: Card) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={href} alt='' />
                </div>
                <div className={styles.date}>{date}</div>
            </div>
        </>
    );
};

CuriousityPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};

export default CuriousityPage;
