// 'use client';
import styles from './search.module.css';

export default function Search() {
    const content = (
        <section className={styles.container}>
            <form className={styles.search}>
                <input
                    className={styles.entry}
                    name='searchInput'
                    defaultValue='star'
                />

                <button className={styles.button} type='submit'>
                    Search
                </button>
            </form>
        </section>
    );
    return content;
}
