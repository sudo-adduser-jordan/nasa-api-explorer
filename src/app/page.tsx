import styles from "./page.module.css";

export const metadata = {
  title: "Nasa Api Explorer",
};

export default function Page() {
  return (
    <main className={styles.container}>
      <div className={styles.explanation}>
        <h1>What is an Api?</h1>
        <p>
          API stands for application programming interface, which is a set of
          definitions and protocols for building and integrating application
          software.
        </p>
      </div>
      <div className={styles.apod}>
        <h1>Astronomy Picture of the Day</h1>
        <p>
          Discover the cosmos! Each day a different image or photograph of our
          fascinating universe is featured, along with a brief explanation
          written by a professional astronomer.
        </p>
      </div>
      <div className={styles.image}>
        <h1>Image Library</h1> <p>Search NASAs official image database.</p>
      </div>
      <div className={styles.video}>
        <h1>Video Library</h1> <p>Search NASAs official video database.</p>
      </div>
      <div className={styles.epic}>
        <h1>EPIC</h1>
        <p>
          The EPIC API provides information on the daily imagery collected by
          DSCOVRs Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely
          positioned at the Earth-Sun Lagrange point, EPIC provides full disc
          imagery of the Earth and captures unique perspectives of certain
          astronomical events such as lunar transits using a 2048x2048 pixel CCD
          (Charge Coupled Device) detector coupled to a 30-cm aperture
          Cassegrain telescope.
        </p>
      </div>
      <div className={styles.mars}>
        <h1>Mars Rover Photos</h1>{" "}
        <p>
          View the most recent image data gathered by NASAs Curiosity,
          Opportunity, and Spirit rovers on Mars.
        </p>
      </div>
      <div className={styles.tech}>
        <h1>Technologies</h1>
        <h3>Node.js React Next.js Typescript Vercel Jetbrains </h3>
      </div>
    </main>
  );
}
