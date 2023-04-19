import React from "react";
import { MyPage } from "../util/types";
import styles from '../styles/pages/HomePage.module.css'

import Grid from "../components/Grid";


const HomePage: MyPage = () => {
  return (
    <>
      <section className={styles.container} >
        home
      </section>
    </>
  );
};


export default HomePage;

HomePage.Layout = "Main";