'use client';
import styles from './search.module.css';

export default function Search({ handleSubmit }: any) {
    const content = (
        <section className={styles.container}>
            <form
                className={styles.search}
                method='post'
                onSubmit={handleSubmit}
            >
                <input
                    className={styles.entry}
                    name='search'
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
