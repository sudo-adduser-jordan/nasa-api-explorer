import { GetStaticProps, InferGetServerSidePropsType } from "next";

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import styles from '../styles/pages/ApodPage.module.css'

type Data = {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
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
          <img src={data.url} alt="" />
        </div>

        <div className={styles.description}>
          {data.explanation}
        </div>

      </section>
    </>
  );
};

ApodPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default ApodPage;