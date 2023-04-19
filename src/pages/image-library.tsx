import React from "react";
import { MyPage } from "../util/types";
import styles from '../styles/pages/ImagePage.module.css'

import Grid from "../components/Grid";


const ImagePage: MyPage = () => {
  return (
    <>
      <section className={styles.container} >
        <Grid />
      </section>
    </>
  );
};


export default ImagePage;

ImagePage.Layout = "Main";