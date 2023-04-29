import styles from './Layout.module.css';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };

    const closeSidebar = () => {
        setSidebar(false);
    };

    return (
        <>
            <Topbar onToggle={showSidebar} />
            <main className={styles.main} onClick={closeSidebar}>
                <Sidebar sidebar={sidebar} />
                {children}
            </main>
        </>
    );
}
