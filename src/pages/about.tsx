import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import styles from '../styles/pages/AboutPage.module.css';

const AboutPage = () => {
    return (
        <>
            <section className={styles.container}>
                <div>About</div>
            </section>
        </>
    );
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default AboutPage;
