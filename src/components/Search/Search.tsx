import React from 'react';
import styles from './Search.module.css';

export default function Search({
    handleSubmit,
}: {
    handleSubmit: (event: any) => void;
}) {
    return (
        <>
            <form className={styles.search} onSubmit={handleSubmit}>
                <input
                    className={styles.entry}
                    name='searchInput'
                    defaultValue='black hole'
                />

                <button className={styles.icon} type='submit'>
                    Search
                </button>
            </form>
        </>
    );
}
