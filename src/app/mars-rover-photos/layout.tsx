import { Metadata } from 'next';
import { Marsbar } from '@/components/marsbar/Marsbar';
import styles from './mars.module.css';

export const metadata: Metadata = {
    title: 'Mars Rover Photos',
    description: 'Mars Rover Photos',
};

export default function MarsLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <main className={styles.layout}>
            <Marsbar />
            {children}
        </main>
    );
}
