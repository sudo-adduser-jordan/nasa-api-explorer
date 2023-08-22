import Image from "next/image"
import styles from "./page.module.css"

export const metadata = {
    title: "Nasa Api Explorer",
}

export default function Page() {
    return (
        <main className={styles.container}>
            <div className={styles.section}>
                <h2>What is an Api?</h2>
                <p>
                    API stands for application programming interface, which is a
                    set of definitions and protocols for building and
                    integrating application software.
                </p>
            </div>
            <div className={styles.section}>
                <h2>Astronomy Picture of the Day</h2>
                <p>
                    Discover the cosmos! Each day a different image or
                    photograph of our fascinating universe is featured, along
                    with a brief explanation written by a professional
                    astronomer.
                </p>
            </div>
            <div className={styles.section}>
                <h2>Image Library</h2>
                <p>Search NASAs official image database.</p>
            </div>
            <div className={styles.section}>
                <h2>Video Library</h2>
                <p>Search NASAs official video database.</p>
            </div>
            <div className={styles.section}>
                <h2>Mars Rover Photos</h2>
                <p>
                    View the most recent image data gathered by NASAs Curiosity,
                    Opportunity, and Spirit rovers on Mars.
                </p>
            </div>
            <div className={styles.tech}>
                <h2>Technologies</h2>
                <Image
                    className={styles.icon}
                    src="/vercel.png"
                    width={50}
                    height={50}
                    alt=""
                />
                <Image
                    className={styles.icon}
                    src="node.svg"
                    width={50}
                    height={50}
                    alt=""
                />
                <Image
                    className={styles.icon}
                    src="/typescript.png"
                    width={50}
                    height={50}
                    alt=""
                />
                <Image
                    className={styles.icon}
                    src="/next.png"
                    width={50}
                    height={50}
                    alt=""
                />
                <Image
                    className={styles.icon}
                    src="/react.png"
                    width={50}
                    height={50}
                    alt=""
                />
            </div>
        </main>
    )
}
