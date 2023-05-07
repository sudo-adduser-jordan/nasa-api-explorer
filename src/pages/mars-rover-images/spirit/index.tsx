import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

import { Root, Card } from './type';
import Layout from '../../../components/Layout/Layout';
import NestedLayout from '../../../components/NestedLayout/NestedLayout';

import styles from './Spirit.module.css';

const roverManifest = `https://api.nasa.gov/mars-photos/api/v1/manifests/spirit?api_key=${process.env.DATABASE_KEY}`;

async function getManifest() {
    const res = await fetch(roverManifest);
    const data: Root = await res.json();
    return data;
}

async function getFirstPage(max_sol: number) {
    const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?api_key=${process.env.DATABASE_KEY}&sol=${max_sol}`
    );
    const data: Root = await res.json();

    const array: Card[] = [];
    for (let i = 0; i < data.photos.length; i++) {
        array.push({
            href: data.photos[i].img_src,
            date: data.photos[i].earth_date,
        });
    }

    return array;
}

export const getStaticProps: GetStaticProps = async () => {
    const manifest = await getManifest();
    const max_sol = manifest.photo_manifest.max_sol;
    const status = manifest.photo_manifest.status;
    const array = await getFirstPage(max_sol);

    return {
        props: {
            status,
            array,
        },
    };
};

const SpiritPage = ({
    status,
    array,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
    const [cards, setCards] = useState<Card[]>(array);

    return (
        <>
            <section className={styles.container}>
                <div className={styles.gridContainer}>
                    <div className={styles.title}>Most Recent Images</div>
                    <div className={styles.status}>
                        Mission Status: {status}
                    </div>

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

SpiritPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};

export default SpiritPage;
