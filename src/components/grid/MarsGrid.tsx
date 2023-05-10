'use client';
import styles from './marsgrid.module.css';
import { useEffect, useState } from 'react';
import getRover from '@/lib/mars-rover-photos/getRover';
import getManifest from '@/lib/mars-rover-photos/getManifest';
import { ManifestRoot, PhotoRoot } from '../../lib/mars-rover-photos/types';
import MarsCard from './card/MarsCard';

export type MarsCard = {
    key: number;
    href: string;
    date: string;
    sol: number;
};

function MarsGrid({ rover_name }: any) {
    const [showButton, setShowButton] = useState(false);
    const [manifest, setManifest] = useState<ManifestRoot>();
    const [rover, setRover] = useState<MarsCard[]>([]);
    const [sol, setSol] = useState(0);

    useEffect(() => {
        const loadState = async () => {
            const manifest = await getManifest(rover_name);
            setManifest(manifest);

            const max_sol = manifest?.photo_manifest.max_sol;
            setSol(max_sol);

            const rover: PhotoRoot = await getRover(rover_name, max_sol);

            const array: MarsCard[] = [];
            for (let i = 0; i < rover.photos.length; i++) {
                array.push({
                    key: rover.photos[i].id,
                    href: rover.photos[i].img_src,
                    date: rover.photos[i].earth_date,
                    sol: rover.photos[i].sol,
                });
            }

            setRover(array);
        };
        // call the function
        loadState().catch(console.error);
    }, [rover_name]);

    useEffect(() => {
        if (sol != 0) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [sol]);

    async function loadMoreCards() {}

    const content = (
        <>
            <h1 className={styles.title}>{rover_name}</h1>
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
                    {rover.map((card) => (
                        <MarsCard
                            key={card.key}
                            href={card.href}
                            date={card.date}
                            sol={card.sol}
                        />
                    ))}
                </div>
                {showButton && (
                    <div className={styles.buttonContainer}>
                        {/* <button className={styles.load} onClick={loadMoreCards}> */}
                        <button className={styles.load}>Load More</button>
                    </div>
                )}
            </div>
        </>
    );
    return content;
}

export default MarsGrid;
