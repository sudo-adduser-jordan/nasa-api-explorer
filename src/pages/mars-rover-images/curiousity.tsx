import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';
import styles from './Curiousity.module.css';

const CuriousityPage = () => {
    return (
        <>
            <section className={styles.container}>Curiousity</section>
        </>
    );
};

CuriousityPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};

export default CuriousityPage;
