import { GetStaticProps, InferGetServerSidePropsType } from "next";

import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Search from '../components/Search'

import styles from '../styles/pages/ImagePage.module.css'

interface Data {
  version: string
  href: string // request link 	"http://images-api.nasa.gov/search?nasa_id=1&page=2"
  items: [
    [
    href: string,
    description: string
    ],
  ]
  metadata:
    total_hits: int
  links: string // will only return 100 items of total_hits {nasa_id&page={n}}
}

type Grid = {
    href: string
    description: string
}

type Card = {
    href: string
    description: string
}

export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {

  const res = await fetch('https://images-api.nasa.gov/search?nasa_id=1')
  const json = await res.json()

  console.log(json)
  const data: Data = JSON.parse(json)
  console.log(data)

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
          href={data.href} 
          description={data.description} 
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