import styles from './loadmore.module.css';

function LoadButton({ loadMoreCards }: any) {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onTouchStart={loadMoreCards}
                onClick={loadMoreCards}
            >
                Load More
            </button>
        </div>
    );
}

export default LoadButton;
