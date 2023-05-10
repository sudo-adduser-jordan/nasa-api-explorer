import MarsGrid from '@/components/grid/MarsGrid';
import { Metadata } from 'next';
import { Params } from '../types';
import styles from '../mars.module.css';

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    return {
        title: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
    };
}

function Page({ params }: Params) {
    const content = (
        <main className={styles.container}>
            <MarsGrid rover_name={params.slug} />
        </main>
    );

    return content;
}
export default Page;
