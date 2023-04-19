import React from "react";
import { MyPage } from "../util/types";
import styles from '../styles/pages/MarsPage.module.css'

import Grid from "../components/Grid";

const MarsPage: MyPage = () => {
  return (
    <>
      <section className={styles.container} >
        <Grid />
      </section>
    </>
  );
};


export default MarsPage;

MarsPage.Layout = "Main";