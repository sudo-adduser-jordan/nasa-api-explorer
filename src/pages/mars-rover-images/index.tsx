import { GetStaticProps, InferGetServerSidePropsType } from 'next';

import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';

import styles from '../../styles/pages/MarsPage.module.css';

const MarsPage = () => {
    return (
        <>
            <section className={styles.container}>
                <div>index</div>
            </section>
        </>
    );
};

MarsPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};

export default MarsPage;
