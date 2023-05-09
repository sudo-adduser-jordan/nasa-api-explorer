'use client';
import { useEffect, useState } from 'react';

import getRover from '../../../lib/mars-rover-photos/getRover';
import getManifest from '../../../lib/mars-rover-photos/getManifest';
import { Card, ManifestRoot, Params, PhotoRoot } from '../types';

import styles from '../mars.module.css';
import { Metadata } from 'next';

// metadata
export async function generateMetadata({
    params: { slug },
}: Params): Promise<Metadata> {
    const manifest: ManifestRoot = await getManifest(slug);

    if (!slug) {
        return {
            title: 'Slug Not Found',
        };
    }

    return {
        title: slug.charAt(0).toUpperCase() + slug.slice(1),
        description: `This is the page of ${slug}`,
    };
}

// SSG
export async function generateStaticParams() {
    const paths = ['curiosity', 'spirit', 'opportunity'];
    return paths;
}

// page
function Page({ params }: Params) {
    const [showButton, setShowButton] = useState(false);
    const [manifest, setManifest] = useState<ManifestRoot>();
    const [rover, setRover] = useState<Card[]>([]);
    const [sol, setSol] = useState(0);

    // load state with server component SSG
    useEffect(() => {
        const loadState = async () => {
            const manifest = await getManifest(params.slug);
            setManifest(manifest);

            const max_sol = manifest?.photo_manifest.max_sol;
            setSol(max_sol);

            const rover: PhotoRoot = await getRover(params.slug, max_sol);

            const array: Card[] = [];
            for (let i = 0; i < rover.photos.length; i++) {
                array.push({
                    id: rover.photos[i].id,
                    href: rover.photos[i].img_src,
                    date: rover.photos[i].earth_date,
                    sol: rover.photos[i].sol,
                });
            }

            setRover(array);
        };
        // call the function
        loadState().catch(console.error);
    }, []);

    // load button & change on state SSR?
    useEffect(() => {
        if (sol != 0) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [sol]);

    // SSR
    async function loadMoreCards() {}

    const content = (
        <main className={styles.container}>
            <h1 className={styles.title}>{params.slug}</h1>
            <h5 className={styles.status}>
                Status: {manifest?.photo_manifest.status}
            </h5>
            <h5 className={styles.info}>
                Mars Days: {manifest?.photo_manifest.max_sol}
            </h5>
            <h5 className={styles.info}>
                Total Photos: {manifest?.photo_manifest.total_photos}
            </h5>
            <h5 className={styles.info}>
                Lanuch Date: {manifest?.photo_manifest.launch_date}
            </h5>
            <h5 className={styles.info}>
                Max Earth Date: {manifest?.photo_manifest.max_date}
            </h5>
            <h5 className={styles.info}>
                Number of photos from sol {manifest?.photo_manifest.max_sol}:{' '}
                {rover.length}
            </h5>
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {rover.map((card, i) => (
                        <Card
                            key={i}
                            id={card.id}
                            href={card.href}
                            date={card.date}
                            sol={card.sol}
                        />
                    ))}
                </div>
            </div>
            {showButton && (
                <div className={styles.buttonContainer}>
                    {/* <button className={styles.load} onClick={loadMoreCards}> */}
                    <button className={styles.load}>Load More</button>
                </div>
            )}
        </main>
    );

    return content;
}

// local component
const Card = ({ id, href, date, sol }: Card) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={href} alt='' />
                </div>
                <div className={styles.date}>Photo #: {id}</div>
                <div className={styles.date}>Earth Date: {date}</div>
                <div className={styles.sol}>Sol: {sol}</div>
            </div>
        </>
    );
};

// default export
export default Page;
