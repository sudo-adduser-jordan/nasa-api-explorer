import { MyPage } from "../util/types";
import React from "react";

import styles from '../styles/pages/ApodPage.module.css'

// export const getStaticProps = async () => {

//   const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
//   const data = await response.json();

//   return {
//     props: {
//       apod: data
//     }
//   }
// }


const ApodPage: MyPage = (props) => {
  return (
    <>
      <section className={styles.container} >

        <div className={styles.image}>
          image
        </div>

        <div className={styles.description}>
          description
        </div>

      </section>
    </>
  );
};

export default ApodPage;

ApodPage.Layout = "Main";