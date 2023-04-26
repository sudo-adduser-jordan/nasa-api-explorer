import { GetStaticProps, InferGetServerSidePropsType } from "next";

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import styles from '../styles/pages/ApodPage.module.css'

type Data = {
  explanation: string
  hdurl: string
}

export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  const data: Data = await res.json()
  return {
    props: {
      data
    }
  }
}

const ApodPage = ({ data }: InferGetServerSidePropsType<typeof getStaticProps> ) => {
  return (
    <>
      <section className={styles.container} >

        <div className={styles.image}>
          <img src={data.hdurl} alt="" />
        </div>

        <div className={styles.description}>
          {data.explanation}
        </div>

      </section>
    </>
  )
}

ApodPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default ApodPage;