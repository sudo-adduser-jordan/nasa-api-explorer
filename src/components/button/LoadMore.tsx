import styles from './loadmore.module.css';

function LoadButton({ loadMoreCards }: { loadMoreCards: () => Promise<void> }) {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                // onTouchStart={loadMoreCards}
                onClick={loadMoreCards}
            >
                Load More
            </button>
        </div>
    );
}

export default LoadButton;
