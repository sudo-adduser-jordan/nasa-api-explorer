import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

import Layout from '../../../components/Layout/Layout';
import styles from './Video.module.css';
import { Root, Card } from '../type';

const VideoPage = ({ props }: any) => {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.title}>NASA Video Library</div>
            </main>
        </>
    );
};

const Card = ({ href, title }: Card) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={href} alt='' />
                </div>

                <div className={styles.description}>{title}</div>
            </div>
        </>
    );
};

VideoPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default VideoPage;
