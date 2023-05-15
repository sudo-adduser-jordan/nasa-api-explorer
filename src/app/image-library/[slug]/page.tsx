import styles from './imageslug.module.css';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Image Library',
//     description: 'Image Library Page',
// };

async function Page({ params }: { params: { slug: string } }) {
    const content = (
        <div className={styles.container}>
            <div className={styles.title}>
                {params.slug.replace(/%20/g, ' ')}
            </div>
            <div className={styles.content}>
                <div className={styles.image}>image</div>
                <div className={styles.description}>description</div>
            </div>
        </div>
    );

    return content;
}
export default Page;
