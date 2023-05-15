import getImages from '@/lib/media_type-library/getImages';
import Grid from '@/components/grid/Grid';
import styles from './image.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Image Library',
    description: 'Image Library Page',
};

async function Page() {
    const data = await getImages();
    const content = (
        <main className={styles.container}>
            <div className={styles.title}>Image Library</div>
            <Grid data={data} />
        </main>
    );

    return content;
}
export default Page;
