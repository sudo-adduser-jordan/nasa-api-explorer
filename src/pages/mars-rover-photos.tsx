import React from "react";
import { MyPage } from "../components/types";
import styles from '../styles/pages/MarsPage.module.css'


const MarsPage: MyPage = () => {
  return (
    <>
      <section className={styles.container} >
        mars
      </section>
    </>
  );
};


export default MarsPage;

MarsPage.Layout = "Main";