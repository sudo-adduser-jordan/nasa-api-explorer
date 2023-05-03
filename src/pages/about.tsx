import Layout from '../components/Layout';
import styles from '../styles/pages/AboutPage.module.css';

const AboutPage = () => {
    return (
        <>
            <section className={styles.container}>
                <div>About</div>
                <div>What is an Api?</div>
                <div>Astronomy Picture of the Day</div>
                <div>Image Library</div>
                <div>Video Library</div>
                <div>Earth</div>
                <div>EPIC</div>
                <div>Mars Rover Photos</div>
            </section>
        </>
    );
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default AboutPage;
