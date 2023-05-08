import styles from './page.module.css';
export const metadata = {
    title: 'Next.js',
    description: 'Welcome to Next.js',
};

export default function Page() {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.temp}>
                    This website is under construction.
                </div>
                <div className={styles.heading}></div>
                <div className={styles.about}>
                    <h1>About this website</h1>
                    <h3>
                        This website was created as a hobby project to provide a
                        front-end visiualition of the data provided by NASAs
                        public API catalog.
                    </h3>
                </div>
                <div className={styles.details}>
                    <h1>Technical Details</h1>
                    <h3>
                        The NASA API Explorer Website consists of a Next.js
                        React application. It is written in Typescript and
                        hosted by Vercel.
                    </h3>
                </div>
                <div className={styles.tech}>
                    <h1>Technologies</h1>
                    <h3>Node.js React Next.js Typescript Vercel Jetbrains </h3>
                </div>
            </main>
        </>
    );
}
