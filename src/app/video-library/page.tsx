import getVideos from '@/lib/video-library/getVideos';
import Grid from '@/components/grid/Grid';
import styles from './video.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Video Library',
    description: 'Video Library Page',
};

async function Page() {
    const data = await getVideos();
    const content = (
        <section className={styles.container}>
            <div className={styles.title}>Video Library</div>
            <Grid data={data} />
        </section>
    );

    return content;
}
export default Page;
