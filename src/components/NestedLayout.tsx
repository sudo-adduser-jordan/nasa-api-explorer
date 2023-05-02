import React, { useState } from 'react';
import Link from 'next/link';

import styles from './NestedLayout.module.css';

type LayoutProps = {
    children: React.ReactNode;
};

export default function NestedLayout({ children }: LayoutProps) {
    const [isActive, setIsActive] = useState('tab2');

    const handleTab1 = () => {
        setIsActive('tab1');
    };
    const handleTab2 = () => {
        setIsActive('tab2');
    };
    const handleTab3 = () => {
        setIsActive('tab3');
    };
    return (
        <>
            <main>
                <div className={styles.container}>Mars Rover Images</div>{' '}
                <nav className={styles.nav}>
                    <Link href={'/mars-rover-images/curiousity'}>
                        <div
                            className={
                                isActive === 'tab1'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab1}
                        >
                            Curiousity
                        </div>
                    </Link>
                    <Link href={'/mars-rover-images/spirit'}>
                        <div
                            className={
                                isActive === 'tab2'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab2}
                        >
                            Spirit
                        </div>
                    </Link>
                    <Link href={'/mars-rover-images/opportunity'}>
                        <div
                            className={
                                isActive === 'tab3'
                                    ? `${styles.item2}`
                                    : `${styles.item}`
                            }
                            onClick={handleTab3}
                        >
                            Opportunity
                        </div>
                    </Link>
                </nav>
                {children}
            </main>
        </>
    );
}
