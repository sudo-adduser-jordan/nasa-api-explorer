import { Metadata } from 'next';
import styles from './videoslug.module.css';

// export const metadata: Metadata = {
//     title: 'Video Library',
//     description: 'Video Library Page',
// };

async function Page({ params }: { params: { slug: string } }) {
    const content = (
        <div className={styles.container}>
            <div className={styles.title}>
                {params.slug.replace(/%20/g, ' ')}
            </div>
            <div className={styles.content}>
                <div className={styles.image}>video</div>
                <div className={styles.description}>description</div>
            </div>
        </div>
    );
    return content;
}
export default Page;
