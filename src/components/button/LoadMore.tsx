// 'use client';
import styles from './loadmore.module.css';

function LoadButton({ loadMoreCards }: { loadMoreCards: () => Promise<void> }) {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={loadMoreCards}
                onTouchStart={loadMoreCards}
                // onFocus={loadMoreCards}
                // onTouchStartCapture={loadMoreCards}
                // onChange={loadMoreCards}
                // onClickCapture={loadMoreCards}
                // onFocusCapture={loadMoreCards}
                // onInput={loadMoreCards}
                // onSubmit={loadMoreCards}
                // onSelect={loadMoreCards}
                // onTouchEnd={loadMoreCards}
            >
                Load More
            </button>
        </div>
    );
}

export default LoadButton;
