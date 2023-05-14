// 'use client';
import styles from './loadmore.module.css';

function LoadButton({ loadMoreCards }: { loadMoreCards: () => Promise<void> }) {
    return (
        <div className={styles.container}>
            <button
                type='button'
                className={styles.button}
                onClick={(e) => loadMoreCards()}
            >
                Load More
            </button>
        </div>
    );
}

export default LoadButton;
