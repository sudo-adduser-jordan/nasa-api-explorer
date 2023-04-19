import React from "react";
import { MyPage } from "../components/types";
import styles from '../styles/pages/ImagePage.module.css'


const ImagePage: MyPage = () => {
  return (
    <>
      <section className={styles.container} >
        image
      </section>
    </>
  );
};


export default ImagePage;

ImagePage.Layout = "Main";