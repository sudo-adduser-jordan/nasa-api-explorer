import React, { useState } from 'react';
import Link from 'next/link';

import styles from './NestedLayout.module.css';

type LayoutProps = {
    children: React.ReactNode;
};

export default function NestedLayout({ children }: LayoutProps) {
    const [isActive, setIsActive] = useState('spirit');

    const handleTab = (path: string) => {
        setIsActive(path);
    };

    const paths = ['curiosity', 'spirit', 'opportunity'];

    return (
        <>
            <main className={styles.container}>
                <div className={styles.title}>Mars Rover Images</div>{' '}
                <nav className={styles.nav}>
                    {paths.map((path, i) => (
                        <Link href={`/mars-rover-images/${path}`} key={i}>
                            <div>
                                <div
                                    className={
                                        isActive === path
                                            ? `${styles.item2}`
                                            : `${styles.item}`
                                    }
                                    onClick={() => handleTab(path)}
                                >
                                    {path}
                                </div>
                            </div>
                        </Link>
                    ))}
                </nav>
                {children}
            </main>
        </>
    );
}
