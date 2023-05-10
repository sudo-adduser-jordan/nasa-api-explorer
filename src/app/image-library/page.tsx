import Grid from '@/components/grid/Grid';
import styles from './image.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Image Library',
    description: 'Image Library Page',
};

function Page() {
    const content = (
        <section className={styles.container}>
            <div className={styles.title}>Image Library</div>
            <Grid media_type='image' />
        </section>
    );

    return content;
}
export default Page;
