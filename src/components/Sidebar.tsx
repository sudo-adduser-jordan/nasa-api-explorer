import { useState } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar({ sidebar }: any) {
    const [isActive, setIsActive] = useState('tab1');

    const handleTab1 = () => {
        setIsActive('tab1');
    };
    const handleTab2 = () => {
        setIsActive('tab2');
    };
    const handleTab3 = () => {
        setIsActive('tab3');
    };
    const handleTab4 = () => {
        setIsActive('tab4');
    };
    const handleTab5 = () => {
        setIsActive('tab5');
    };
    const handleTab6 = () => {
        setIsActive('tab6');
    };
    const handleTab7 = () => {
        setIsActive('tab7');
    };
    const handleTab8 = () => {
        setIsActive('tab8');
    };

    return (
        <>
            {/* <section className={styles.container}> */}
            <section
                className={
                    sidebar === false
                        ? `${styles.container}`
                        : `${styles.container2}`
                }
            >
                <div className={styles.title}>NASA Api Explorer</div>

                <nav className={styles.sidebar}>
                    <Link href='/'>
                        <div
                            className={
                                isActive === 'tab1'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab1}
                        >
                            Home
                        </div>
                    </Link>
                    <Link href='/about'>
                        <div
                            className={
                                isActive === 'tab2'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab2}
                        >
                            About
                        </div>
                    </Link>
                    <Link href='/apod'>
                        <div
                            className={
                                isActive === 'tab3'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab3}
                        >
                            APOD
                        </div>
                    </Link>
                    <Link href='/image-library'>
                        <div
                            className={
                                isActive === 'tab4'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab4}
                        >
                            Image Library
                        </div>
                    </Link>
                    <Link href='/video-library'>
                        <div
                            className={
                                isActive === 'tab5'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab5}
                        >
                            Video Library
                        </div>
                    </Link>
                    <Link href='/earth'>
                        <div
                            className={
                                isActive === 'tab6'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab6}
                        >
                            Earth
                        </div>
                    </Link>
                    <Link href='/epic'>
                        <div
                            className={
                                isActive === 'tab7'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab7}
                        >
                            EPIC
                        </div>
                    </Link>
                    <Link href='/mars-rover-images/spirit'>
                        <div
                            className={
                                isActive === 'tab8'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab8}
                        >
                            Mars Rover Photos
                        </div>
                    </Link>
                </nav>
                <footer className={styles.footer}>
                    <div className={styles.github}>Github</div>
                    <div className={styles.work}>My work</div>
                    <h5>@sudo-adduser-jordan</h5>
                </footer>
            </section>
        </>
    );
}
