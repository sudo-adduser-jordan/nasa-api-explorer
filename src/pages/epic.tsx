import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import styles from '../styles/pages/EpicPage.module.css'

const EpicPage = () => {
  return (
    <>
      <section className={styles.container} >
        epic
      </section>
    </>
  );
};

EpicPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default EpicPage;