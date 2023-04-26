import { GetStaticProps, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";

import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

import styles from '../styles/pages/MarsPage.module.css'

// json to typescript converter
export interface Root {
  photos: Photo[]
}

export interface Photo {
  id: number
  sol: number
  camera: Camera
  img_src: string
  earth_date: string
  rover: Rover
}

export interface Camera {
  id: number
  name: string
  rover_id: number
  full_name: string
}

export interface Rover {
  id: number
  name: string
  landing_date: string
  launch_date: string
  status: string
}

type Cards = {
  key: number,
  href: string,
  date: string 
}

type Card = {
  href: string
  date: string
}

// fetch image data
export const getStaticProps: GetStaticProps<{ root: Root }> = async () => {

  let searchString = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`

  const res = await fetch(searchString)
  const root: Root = await res.json()

  return {
    props: {
      root
    }
  }
}

// page
const MarsPage = ({ root }: InferGetServerSidePropsType<typeof getStaticProps> ) => {

  const cards: Cards[] = []

  const loadImages = () => {  
  let total = root.photos.length

  for (let i = 0; i < 100; i++) {
    cards.push(
        {
          key: i, 
          href: root.photos[i].img_src, 
          date: root.photos[i].earth_date
        },
      );
  }}
  loadImages()

  return (
    <>
      <section className={styles.container}>
        <div className={styles.menu}>Curiosity Opportunity Spirit</div>
        <div className={styles.gridContainer}>

          <div className={styles.grid}>

            {cards.map(card => (
              <Card 
                key={card.key} 
                href={card.href} 
                date={card.date} 
              />
            ))}

          </div>   
        </div>
      </section>
    </>
  );
};

// card
const Card = ({ href, date }: Card) => {
  return (
    <>
      <div className={styles.card}>

          <div className={styles.image}>
            <img src={href} alt='' />
          </div>

          <div className={styles.description}>
            date
          </div>

      </div>
    </>
  )
}

// layout
MarsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default MarsPage;