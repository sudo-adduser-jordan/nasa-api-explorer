import React from "react";
import { MyPage } from "../components/types";
import styles from '../styles/pages/EarthPage.module.css'


const EarthPage: MyPage = () => {
  return (
    <>
      <section className={styles.container} >
        earth
      </section>
    </>
  );
};


export default EarthPage;

EarthPage.Layout = "Main";