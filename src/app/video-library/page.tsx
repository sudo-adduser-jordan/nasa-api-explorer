import Grid from '@/components/grid/Grid';
import styles from './video.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Video Library',
    description: 'Video Library Page',
};

function Page() {
    const content = (
        <section className={styles.container}>
            <div className={styles.title}>Video Library</div>
            <Grid media_type='video' />
        </section>
    );

    return content;
}
export default Page;
