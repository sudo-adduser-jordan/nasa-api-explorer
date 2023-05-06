import { GetStaticProps, InferGetServerSidePropsType } from 'next';

import Layout from '../../components/Layout/Layout';
import styles from './ApodPage.module.css';

type Data = {
    explanation: string;
    hdurl: string;
};

export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {
    const res = await fetch(
        'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
    );
    const data: Data = await res.json();
    return {
        props: {
            data,
        },
    };
};

const ApodPage = ({
    data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
    return (
        <>
            <section className={styles.container}>
                <title className={styles.title}>
                    Astronomy Picture of the Day
                </title>
                {/* <div className={styles.apodContainer}> */}
                <div className={styles.image}>
                    <img src={data.hdurl} alt='' />
                </div>

                <div className={styles.description}>{data.explanation}</div>
                {/* </div> */}
            </section>
        </>
    );
};

ApodPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default ApodPage;
