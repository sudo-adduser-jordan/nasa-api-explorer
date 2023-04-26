import { GetStaticProps, InferGetServerSidePropsType } from "next";

import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Search from '../components/Search'

import styles from '../styles/pages/ImagePage.module.css'

// json to typescript converter
export interface Root {
  collection: Collection
}

export interface Collection {
  version: string
  href: string
  items: Item[]
  metadata: Metadata
  links: Link2[]
}

export interface Item {
  href: string
  data: Daum[]
  links: Link[]
}

export interface Daum {
  center: string
  title: string
  keywords?: string[]
  location?: string
  nasa_id: string
  date_created: string
  media_type: string
  description_508?: string
  description?: string
  album?: string[]
  photographer?: string
  secondary_creator?: string
}

export interface Link {
  href: string
  rel: string
  render: string
}

export interface Metadata {
  total_hits: number
}

export interface Link2 {
  rel: string
  prompt: string
  href: string
}

type Card = {
    href: string
    description: string
}

export const getStaticProps: GetStaticProps<{ root: Root }> = async () => {

  const res = await fetch('https://images-api.nasa.gov/search?nasa_id=1&media_type=image')
  const root: Root = await res.json()
  console.log(root)

  return {
    props: {
      root
    }
  }
}

const ImagePage = ({ root }: InferGetServerSidePropsType<typeof getStaticProps> ) => {

  // init array
  const cards = []

  // loop n times, push object to array
  for (let i = 0; i < 20; i++) {
    cards.push(
        {
          key: 1, 
          href: root.collection.items[i].links[0].href, 
          description: root.collection.items[i].data[0].title
        },
      );
  }

  const cardComponent = cards.map(card => (
    <Card 
      key={card.key} 
      href={card.href} 
      description={card.description} 
    />
  ))

  return (
    <>
      <section className={styles.container}>
        <Search />
        <div className={styles.gridContainer}>

          <div className={styles.grid}>
            {cardComponent}
          </div>   

        </div>
      </section>
    </>
  );
};

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