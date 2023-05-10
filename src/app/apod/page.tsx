import getApod from '@/lib/apod/getApod';
import styles from './apod.module.css';
import { Metadata } from 'next';
import Image from 'next/image';

export interface Root {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

export const metadata: Metadata = {
    title: 'Astronomy Picture of the Day',
    description: 'Astronomy Picture of the Day Page',
};

async function Page() {
    const data: Root = await getApod();
    const content = (
        <>
            <main className={styles.container}>
                <div className={styles.title}>Astronomy Picture of the Day</div>
                <div className={styles.image}>
                    <Image
                        src={data.hdurl}
                        // src='https://apod.nasa.gov/apod/image/2305/FlatMars_CuriosityThompson_2713.jpg'
                        fill
                        style={{ objectFit: 'contain' }}
                        alt=''
                    />
                </div>

                <div className={styles.description}>{data.explanation}</div>
            </main>
        </>
    );
    return content;
}

export default Page;
