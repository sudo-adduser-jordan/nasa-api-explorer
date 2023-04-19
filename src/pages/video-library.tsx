import React from "react";
import { MyPage } from "../components/types";
import styles from '../styles/pages/VideoPage.module.css'


const VideoPage: MyPage = () => {
  return (
    <>
      <section className={styles.container} >
        video
      </section>
    </>
  );
};


export default VideoPage;

VideoPage.Layout = "Main";