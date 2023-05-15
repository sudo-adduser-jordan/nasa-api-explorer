'use client';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import styles from './navigation.module.css';

function Navigation({ children }: { children: React.ReactNode }) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    const hideSidebar = () => {
        setSidebar(false);
    };

    return (
        <>
            <Topbar showSidebar={showSidebar} />
            <div className={styles.container} onClick={hideSidebar}>
                <Sidebar sidebar={sidebar} />
                {children}
            </div>
        </>
    );
}

export default Navigation;
