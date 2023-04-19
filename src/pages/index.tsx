import React from "react";
import { MyPage } from "../components/types";
import styles from '../styles/pages/HomePage.module.css'


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