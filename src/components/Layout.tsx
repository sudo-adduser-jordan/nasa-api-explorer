import styles from './Layout.module.css';
import Sidebar from '../components/Sidebar';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <main className={styles.main}>
                <Sidebar />
                {children}
            </main>
        </>
    );
}
