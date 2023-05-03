import Search from '@/components/Search';
import Layout from '../components/Layout';
import styles from '../styles/pages/EarthPage.module.css';

const EarthPage = () => {
    return (
        <>
            <section className={styles.container}>
                <Search />
                Earth
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div>Image</div>
                        <div>Location</div>
                        <div>Date</div>
                        <div>Placeholder</div>
                    </div>
                </div>
            </section>
        </>
    );
};

EarthPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default EarthPage;
