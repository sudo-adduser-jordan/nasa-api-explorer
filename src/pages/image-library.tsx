import { GetStaticProps, InferGetServerSidePropsType } from "next";

import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Search from '../components/Search'

import styles from '../styles/pages/ImagePage.module.css'

type Data = {
  collection: {
    items: [
      data: {
        href: string,
        description: string
        //album: string
        //location: string 
        //title: string
        //date: string
        //media_type: string
      },
    ],
    metadata: {
      total_hits: number
    }
  }
}




type Grid = {
    href: string
    description: string
}

type Card = {
    href: string
    description: string
}

export const getStaticProps = async () => {

  const res = await fetch('https://images-api.nasa.gov/search?nasa_id=1')
  const json = await res.json()
  // console.log(json)
  // console.log(JSON.stringify(json, null, 2))

  // extract data from json req
  const data = null









  
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
          href='x'
          description='x'
        />

      </section>
    </>
  );
};

const Grid = ({ href, description }: Grid) => {
    return (
      <>
        <Search />
        <section className={styles.gridContainer}>
          <div className={styles.grid}>
            <Card href={href} description={description} />
            <Card href={href} description={description} />
            <Card href={href} description={description} />
            <Card href={href} description={description} />
            <Card href={href} description={description} />
            <Card href={href} description={description} />
            <Card href={href} description={description} />
            <Card href={href} description={description} />
            <Card href={href} description={description} />
          </div>    
        </section>
      </>
    )
}

const Card = ({ href, description }: Card) => {
  return (
    <>
      <div className={styles.card}>

          <div className={styles.image}>
            <img src={href} alt='' />
          </div>

          <div className={styles.description}>
            {description}
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