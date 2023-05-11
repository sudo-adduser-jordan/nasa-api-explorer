'use client';
import { useEffect, useState } from 'react';
import styles from './marsgrid.module.css';
import { ManifestRoot } from '../../lib/mars-rover-photos/types';
import MarsCard from './card/MarsCard';
import getRoverMore from '@/lib/mars-rover-photos/getRoverMore';
import LoadButton from './button/LoadMore';

type Card = {
    key: number;
    href: string;
    date: string;
    sol: number;
};

type Data = {
    data: {
        rover_data: {
            array: Card[];
        };
        manifest: ManifestRoot;
    };
};

function MarsGrid({ data }: Data) {
    const [showButton, setShowButton] = useState(false);
    const [manifest, setManifest] = useState<ManifestRoot>(data.manifest);
    const [rover, setRover] = useState<Card[]>(data.rover_data.array);
    const [sol, setSol] = useState(data.manifest.photo_manifest.max_sol);

    useEffect(() => {
        if (sol != 0) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [sol]);

    async function loadMoreCards() {
        const res = await getRoverMore(
            manifest.photo_manifest.name.toLowerCase(),
            sol
        );
        setRover(rover.concat(res.array));
        setSol(res.nextSol);
    }

    const content = (
        <>
            <h1 className={styles.title}>{}</h1>
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
                    {rover.map((rover, i) => (
                        <MarsCard
                            key={i}
                            href={rover.href}
                            date={rover.date}
                            sol={rover.sol}
                        />
                    ))}
                </div>
                {showButton && (
                    <LoadButton
                        className={styles.buttonContainer}
                        loadMoreCards={loadMoreCards}
                    />
                )}
            </div>
        </>
    );
    return content;
}

export default MarsGrid;
