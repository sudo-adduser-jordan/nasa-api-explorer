import Layout from '../components/Layout';
import styles from '../styles/pages/EarthPage.module.css';

const EarthPage = () => {
    return (
        <>
            <section className={styles.container}>earth</section>
        </>
    );
};

EarthPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default EarthPage;
