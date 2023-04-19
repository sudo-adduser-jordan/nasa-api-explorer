import React, { PropsWithChildren } from "react";

import styles from '../styles/components/MainLayout.module.css'
import Nav from "./Nav";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
    <section className={styles.container}>
        <Nav />
        <main>{children}</main>
    </section>
    </>
  );
};

export default MainLayout;