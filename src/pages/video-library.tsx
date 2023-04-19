import React from "react";
import { MyPage } from "../util/types";
import styles from '../styles/pages/VideoPage.module.css'

import Grid from "../components/Grid";

const VideoPage: MyPage = () => {
  return (
    <>
      <section className={styles.container} >
        <Grid />
      </section>
    </>
  );
};


export default VideoPage;

VideoPage.Layout = "Main";