import React from "react";
import { MyPage } from "../components/types";
import styles from '../styles/pages/EpicPage.module.css'


const EpicPage: MyPage = () => {
  return (
    <>
      <section className={styles.container} >
        epic
      </section>
    </>
  );
};


export default EpicPage;

EpicPage.Layout = "Main";