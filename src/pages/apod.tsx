import { MyPage } from "../components/types";
import React from "react";

import styles from '../styles/pages/ApodPage.module.css'


const ApodPage: MyPage = (props) => {
  return (
    <>
      <section className={styles.container} >
        apod
      </section>
    </>
  );
};

export default ApodPage;

ApodPage.Layout = "Main";