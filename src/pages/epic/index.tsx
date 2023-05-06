import Layout from '../../components/Layout/Layout';
import styles from './EpicPage.module.css';

const EpicPage = () => {
    return (
        <>
            <section className={styles.container}>
                <div>Epic</div>
                <div className={styles.grid}>
                    <div className={styles.imageCard}>Image Container</div>
                    <div className={styles.dataCard}>Data Container</div>
                </div>
            </section>
        </>
    );
};

EpicPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default EpicPage;
