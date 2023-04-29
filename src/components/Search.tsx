import styles from './Search.module.css';

const Search = ({ handleSubmit }: any) => {
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
};

export default Search;
