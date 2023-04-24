import Search from '@/components/Search';
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

import styles from '../styles/pages/VideoPage.module.css'

const VideoPage = () => {
  return (
    <>
      <section className={styles.container} >
        <Search />
      </section>
    </>
  );
};

VideoPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default VideoPage;