import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

import styles from '../styles/pages/MarsPage.module.css'

const MarsPage = () => {
  return (
    <>
      <section className={styles.container} >
        Mars
      </section>
    </>
  );
};

MarsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default MarsPage;