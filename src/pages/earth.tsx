import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import styles from '../styles/pages/EarthPage.module.css'

const EarthPage = () => {
  return (
    <>
      <section className={styles.container} >
        earth
      </section>
    </>
  )
}

EarthPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default EarthPage;