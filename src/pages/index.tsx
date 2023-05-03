import Layout from '../components/Layout';
import styles from '../styles/pages/HomePage.module.css';

const HomePage = () => {
    return (
        <section className={styles.container}>
            This website is under construction.
            <div className={styles.heading}>
                <h1>Explore NASAs Imagery and Data</h1>
                <h3>
                    A free and open source project, built with public APIs
                    provided by api.nasa.gov
                </h3>
                <button>Explore</button>
            </div>
            <div className={styles.about}>
                <h1>About this website</h1>
                <h3>
                    This website was created as a hobby project to provide a
                    front-end visiualition of the data provided by NASAs public
                    API catalog.
                </h3>
            </div>
            <div className={styles.details}>
                <h1>Technical Details</h1>
                <h3>
                    The NASA API Explorer Website consists of a Next.js React
                    application. It is written in Typescript and hosted by
                    Vercel.
                </h3>
            </div>
            <div className={styles.tech}>
                <h1>Technologies</h1>
                <div>Node.js React Next.js Typescript Vercel Jetbrains </div>
            </div>
        </section>
    );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default HomePage;
