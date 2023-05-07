import { useState } from 'react';
import Link from 'next/link';

import styles from './Sidebar.module.css';

export default function Sidebar({ sidebar }: { sidebar: boolean }) {
    const [isActive, setIsActive] = useState('');

    const paths = [
        '',
        'about',
        'apod',
        'image-library',
        'video-library',
        'epic',
        'mars-rover-images/spirit',
    ];

    const handleTab = (path: string) => {
        setIsActive(path);
    };

    const handleText = (path: string) => {
        if (path === '') {
            return 'Home';
        } else {
            return path;
        }
    };

    return (
        <>
            <section
                className={
                    sidebar === false
                        ? `${styles.container}`
                        : `${styles.container2}`
                }
            >
                <div className={styles.title}>NASA Api Explorer</div>
                <nav className={styles.sidebar}>
                    {paths.map((path, i) => (
                        <Link href={`/${path}`} key={i}>
                            <div
                                className={
                                    isActive === path
                                        ? `${styles.item2}`
                                        : `${styles.item}`
                                }
                                onClick={() => {
                                    handleTab(path);
                                }}
                            >
                                {handleText(path)}
                            </div>
                        </Link>
                    ))}
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
