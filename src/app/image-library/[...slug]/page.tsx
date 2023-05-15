import styles from './imageslug.module.css';
import { Metadata } from 'next';
import getCard from '../../../lib/media_type-library/getCard';
import Image from 'next/image';

type Params = {
    params: {
        slug: [string, string];
    };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    return {
        title: params.slug[0].replace(/%20/g, ' '),
    };
}

async function Page({ params }: Params) {
    const data = await getCard(params.slug[1]);
    const content = (
        <div className={styles.container}>
            <div className={styles.title}>
                {params.slug[0].replace(/%20/g, ' ')}
            </div>
            <div className={styles.content}>
                <div className={styles.image}>
                    <Image
                        src={data.href}
                        alt=''
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={styles.description}>{data.description}</div>
            </div>
        </div>
    );

    return content;
}
export default Page;
