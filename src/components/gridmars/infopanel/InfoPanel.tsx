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

    const status_style = '';

    return (
        <div
            className={
                status === 'active' ? `${styles.active}` : `${styles.container}`
            }
        >
            <h5 className={styles.info}>
                <span className={styles.purple}>Status: </span>
                <span
                    className={
                        status === 'active'
                            ? `${styles.green}`
                            : `${styles.red}`
                    }
                >
                    {status}
                </span>
            </h5>
            <h5 className={styles.info}>
                <span className={styles.purple}>Lanuch Date:</span>{' '}
                {launch_date}
            </h5>
            <h5 className={styles.info}>
                <span className={styles.purple}>Max Earth Date:</span>{' '}
                {max_date}
            </h5>
            <h5 className={styles.info}>
                <span className={styles.purple}>Mars Days:</span> {max_sol}
            </h5>
            <h5 className={styles.info}>
                <span className={styles.purple}>Total Photos:</span>{' '}
                {total_photos}
            </h5>
        </div>
    );
}

export default InfoPanel;
