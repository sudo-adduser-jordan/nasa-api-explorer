'use client';
import { useState } from 'react';
import styles from './sidebar.module.css';
import Link from 'next/link';

export const Sidebar = ({ sidebar }: any) => {
    const [active, setActive] = useState('');
    const paths = [
        '',
        'about',
        'apod',
        'image-library',
        'video-library',
        'mars-rover-photos/spirit',
    ];

    const handleText = (path: string) => {
        switch (path) {
            case '':
                return 'Home';
            case 'about':
                return 'About';
            case 'apod':
                return 'APOD';
            case 'image-library':
                return 'Image Library';
            case 'video-library':
                return 'Video Library';
            case 'mars-rover-photos/spirit':
                return 'Mars Rover Photos';
        }
    };

    const content = (
        <>
            <div
                className={
                    sidebar === true
                        ? `${styles.activeContainer}`
                        : `${styles.container}`
                }
            >
                <div className={styles.title}>Nasa Api Explorer</div>
                <div className={styles.nav}>
                    {paths.map((path, i) => {
                        return (
                            <Link
                                key={i}
                                href={path}
                                onClick={() => setActive(path)}
                                className={
                                    active === path
                                        ? `${styles.activeItem}`
                                        : `${styles.item}`
                                }
                            >
                                {handleText(path)}
                            </Link>
                        );
                    })}
                </div>
                <div className={styles.footer}>
                    <Link
                        target='_blank'
                        href={
                            'https://github.com/sudo-adduser-jordan/Nasa-Api-Explorer'
                        }
                        className={styles.work}
                    >
                        Github
                    </Link>
                    <Link
                        target='_blank'
                        href={'https://github.com/sudo-adduser-jordan'}
                        className={styles.name}
                    >
                        @sudo-adduser-jordan
                    </Link>
                </div>
            </div>
        </>
    );
    return content;
};
