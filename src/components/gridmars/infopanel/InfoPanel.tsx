import React from 'react';
import styles from './infopanel.module.css';
import { ManifestRoot } from '../../../lib/mars-rover-photos/types';

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

function InfoPanel({ data }: Data) {
    const { name, max_sol, status, max_date, total_photos, launch_date } =
        data.manifest.photo_manifest;
    return (
        <div className={styles.container}>
            <h5 className={styles.status}>Status: {status}</h5>
            <h5 className={styles.info}>Mars Days: {max_sol}</h5>
            <h5 className={styles.info}>Total Photos: {total_photos}</h5>
            <h5 className={styles.info}>Lanuch Date: {launch_date}</h5>
            <h5 className={styles.info}>Max Earth Date: {max_date}</h5>
        </div>
    );
}

export default InfoPanel;
