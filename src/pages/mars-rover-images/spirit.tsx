import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';

import styles from './Spirit.module.css';

const SpiritPage = () => {
    return (
        <>
            <section className={styles.container}>Spirit</section>
        </>
    );
};

SpiritPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};

export default SpiritPage;
