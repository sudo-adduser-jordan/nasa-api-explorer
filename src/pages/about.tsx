import { MyPage } from "../util/types";
import React from "react";

import styles from '../styles/pages/AboutPage.module.css'


const AboutPage: MyPage = (props) => {
  return (
    <>
      <section className={styles.container} >
        about
      </section>
    </>
  );
};

export default AboutPage;

AboutPage.Layout = "Main";