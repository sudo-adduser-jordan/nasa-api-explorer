import Layout from '../components/Layout';
import styles from '../styles/pages/HomePage.module.css';

const HomePage = () => {
    return (
        <section className={styles.container}>
            This website is under construction.
        </section>
    );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default HomePage;
