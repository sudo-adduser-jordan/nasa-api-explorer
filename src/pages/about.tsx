import Layout from '../components/Layout';
import styles from '../styles/pages/AboutPage.module.css';

const AboutPage = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.title}>
                    <h1>About</h1>
                </div>
                <div className={styles.explanation}>
                    <h1>What is an Api?</h1>
                    <h4>
                        API stands for application programming interface, which
                        is a set of definitions and protocols for building and
                        integrating application software.
                    </h4>
                </div>
                <div className={styles.apod}>
                    <h1>Astronomy Picture of the Day</h1>
                    <h4>
                        Discover the cosmos! Each day a different image or
                        photograph of our fascinating universe is featured,
                        along with a brief explanation written by a professional
                        astronomer.
                    </h4>
                </div>
                <div className={styles.image}>
                    <h1>Image Library</h1>{' '}
                    <h4>Search NASAs official image database.</h4>
                </div>
                <div className={styles.video}>
                    <h1>Video Library</h1>{' '}
                    <h4>Search NASAs official video database.</h4>
                </div>
                <div className={styles.earth}>
                    <h1>Earth</h1>
                    <h4>
                        Landsat imagery is provided to the public as a joint
                        project between NASA and USGS.
                    </h4>
                </div>
                <div className={styles.epic}>
                    <h1>EPIC</h1>
                    <h4>
                        The EPIC API provides information on the daily imagery
                        collected by DSCOVRs Earth Polychromatic Imaging Camera
                        (EPIC) instrument. Uniquely positioned at the Earth-Sun
                        Lagrange point, EPIC provides full disc imagery of the
                        Earth and captures unique perspectives of certain
                        astronomical events such as lunar transits using a
                        2048x2048 pixel CCD (Charge Coupled Device) detector
                        coupled to a 30-cm aperture Cassegrain telescope.
                    </h4>
                </div>
                <div className={styles.mars}>
                    <h1>Mars Rover Photos</h1>{' '}
                    <h4>
                        View the most recent image data gathered by NASAs
                        Curiosity, Opportunity, and Spirit rovers on Mars.
                    </h4>
                </div>
            </section>
        </>
    );
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default AboutPage;
