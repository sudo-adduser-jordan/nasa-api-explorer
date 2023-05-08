// 'use-client';
import getRoverImages from '../../../lib/getRoverImages';
import getManifest from '../../../lib/getManifest';
import { Card, ManifestRoot, Params, PhotoRoot } from '../types';

import styles from '../mars.module.css';

async function Page({ params }: Params) {
    const manifest: ManifestRoot = await getManifest(params.slug);
    const max_sol = manifest.photo_manifest.max_sol;
    const rover: PhotoRoot = await getRoverImages(params.slug, max_sol);
    const photos = rover.photos;

    const content = (
        <main className={styles.container}>
            <h1 className={styles.title}>{params.slug}</h1>
            <h1 className={styles.status}>
                Status: {manifest.photo_manifest.status}
            </h1>
            <h1 className={styles.info}>
                Mars Days: {manifest.photo_manifest.max_sol}
            </h1>
            <h1 className={styles.info}>
                Total Photos: {manifest.photo_manifest.total_photos}
            </h1>
            <h1 className={styles.info}>
                Lanuch Date: {manifest.photo_manifest.launch_date}
            </h1>
            <h1 className={styles.info}>
                Max Earth Date: {manifest.photo_manifest.max_date}
            </h1>
            <h1 className={styles.info}>
                Number of photos from max_sol: {rover.photos.length}
            </h1>
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {photos.map((photo, i) => (
                        <Card
                            key={i}
                            href={photo.img_src}
                            sol={photo.sol}
                            date={photo.earth_date}
                            photo_number={photo.id}
                        />
                    ))}
                </div>
            </div>
        </main>
    );

    return content;
}

const Card = ({ href, sol, date, photo_number }: Card) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={href} alt='' />
                </div>
                <div className={styles.sol}>Sol: {sol}</div>
                <div className={styles.date}>Earth Date: {date}</div>
                <div className={styles.date}>Photo #: {photo_number}</div>
            </div>
        </>
    );
};

export default Page;
