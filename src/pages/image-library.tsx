import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import { GetStaticProps, InferGetServerSidePropsType } from "next";
import Image from 'next/image';

import styles from '../styles/pages/ImagePage.module.css'

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

type Grid = {
    url: string
    explanation: string
}

type Card = {
    url: string
    explanation: string
}

export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ')
  const data: Data = await res.json()
  return {
    props: {
      data
    }
  }
}

const ImagePage = ({ data }: InferGetServerSidePropsType<typeof getStaticProps> ) => {
  return (
    <>
      <section className={styles.container} >

        <Grid 
          url={data.url} 
          explanation={data.explanation} 
        />

      </section>
    </>
  );
};

const Grid = ({ url, explanation }: Grid) => {
    return (
      <>
        <section className={styles.gridContainer}>
          <div className={styles.grid}>
            <Card url={url} explanation={explanation} />
            <Card url={url} explanation={explanation} />
            <Card url={url} explanation={explanation} />
            <Card url={url} explanation={explanation} />
            <Card url={url} explanation={explanation} />
            <Card url={url} explanation={explanation} />
            <Card url={url} explanation={explanation} />
            <Card url={url} explanation={explanation} />
            <Card url={url} explanation={explanation} />
          </div>    
        </section>
      </>
    )
}

const Card = ({ url, explanation }: Card) => {
  return (
    <>
      <div className={styles.card}>

          <div className={styles.image}>
            <img src={url} alt='' />
          </div>

          <div className={styles.description}>
            {explanation}
          </div>

      </div>
    </>
  )
}

ImagePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default ImagePage;