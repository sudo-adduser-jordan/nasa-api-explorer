import styles from './loadmore.module.css';

function LoadButton({ loadMoreCards }: { loadMoreCards: () => Promise<void> }) {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                // onTouchStart={loadMoreCards}
                // onFocus={loadMoreCards}
                // onTouchStartCapture={loadMoreCards}
                // onChange={loadMoreCards}
                // onClickCapture={loadMoreCards}
                // onFocusCapture={loadMoreCards}
                // onInput={loadMoreCards}
                onSubmit={loadMoreCards}
                // onSelect={loadMoreCards}
                // onTouchEnd={loadMoreCards}
                onClick={loadMoreCards}
            >
                Load More
            </button>
        </div>
    );
}

export default LoadButton;
