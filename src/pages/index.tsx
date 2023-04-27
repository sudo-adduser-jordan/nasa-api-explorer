import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import styles from '../styles/pages/IndexPage.module.css'

const Index = () => {
  return (
    <section className={styles.container}>
        This website is under construction.
    </section>
  )
}

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default Index