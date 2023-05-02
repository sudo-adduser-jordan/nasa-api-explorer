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
                        <h5
                            className={
                                isActive === 'tab1'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab1}
                        >
                            Home
                        </h5>
                    </Link>
                    <Link href='/about'>
                        <h5
                            className={
                                isActive === 'tab2'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab2}
                        >
                            About
                        </h5>
                    </Link>
                    <Link href='/apod'>
                        <h5
                            className={
                                isActive === 'tab3'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab3}
                        >
                            APOD
                        </h5>
                    </Link>
                    <Link href='/image-library'>
                        <h5
                            className={
                                isActive === 'tab4'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab4}
                        >
                            Image Library
                        </h5>
                    </Link>
                    <Link href='/video-library'>
                        <h5
                            className={
                                isActive === 'tab5'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab5}
                        >
                            Video Library
                        </h5>
                    </Link>
                    <Link href='/earth'>
                        <h5
                            className={
                                isActive === 'tab6'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab6}
                        >
                            Earth
                        </h5>
                    </Link>
                    <Link href='/epic'>
                        <h5
                            className={
                                isActive === 'tab7'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab7}
                        >
                            EPIC
                        </h5>
                    </Link>
                    <Link href='/mars-rover-images/spirit'>
                        <h5
                            className={
                                isActive === 'tab8'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab8}
                        >
                            Mars Rover Photos
                        </h5>
                    </Link>
                </nav>
            </section>
        </>
    );
}
