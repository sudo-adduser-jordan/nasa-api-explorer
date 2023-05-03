import Layout from '../components/Layout';
import styles from '../styles/pages/HomePage.module.css';

const HomePage = () => {
    return (
        <section className={styles.container}>
            <div>This website is under construction.</div>
            <div>About this website</div>
            <div>Technical Details</div>
            <div>Technologies</div>
        </section>
    );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default HomePage;
