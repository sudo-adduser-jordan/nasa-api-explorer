import getManifest from '@/lib/mars-rover-photos/getManifest';
import getRover from '@/lib/mars-rover-photos/getRover';
import MarsGrid from '@/components/gridmars/MarsGrid';
import { Params, ManifestRoot } from '../types';
import styles from '../mars.module.css';
import { Metadata } from 'next';
import getRoverMore from '@/lib/mars-rover-photos/getRoverMore';

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    return {
        title: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
    };
}

async function Page({ params }: Params) {
    const manifest: ManifestRoot = await getManifest(params.slug);
    const max_sol = manifest.photo_manifest.max_sol;
    const rover_data = await getRover(params.slug, max_sol);

    const content = (
        <main className={styles.container}>
            <MarsGrid data={{ rover_data, manifest }} />
        </main>
    );

    return content;
}
export default Page;
