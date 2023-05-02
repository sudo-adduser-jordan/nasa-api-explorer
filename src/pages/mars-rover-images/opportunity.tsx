import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';
import styles from './Opportunity.module.css';

const OpportunityPage = () => {
    return (
        <>
            <section className={styles.container}>Curiousity</section>
        </>
    );
};

OpportunityPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};

export default OpportunityPage;
