import getApod from '@/lib/apod/getApod';
import styles from './apod.module.css';

export interface Root {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

export const metadata = {
    title: 'APOD',
    description: 'APOD Page',
};

async function Page() {
    const data: Root = await getApod();
    const content = (
        <>
            <main className={styles.container}>
                <div className={styles.title}>Astronomy Picture of the Day</div>
                <div className={styles.image}>
                    <img src={data.hdurl} alt='' />
                </div>

                <div className={styles.description}>{data.explanation}</div>
            </main>
        </>
    );
    return content;
}

export default Page;
