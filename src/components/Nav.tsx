import Link from 'next/link'
import styles from '../styles/components/Nav.module.css'

export default function Nav() {
    return (
      <>
        <section className={styles.container}>
            <nav className={styles.nav}>
                Title
                <Link href={'/routes/about'}><div className={styles.item}>Home</div></Link>
                <Link href={'/routes/about-api'}><div className={styles.item}>Api</div></Link>
                <Link href={'/routes/apod'}><div className={styles.item}>APOD</div></Link>
                <Link href={'/routes/image-library'}><div className={styles.item}>Image Library</div></Link>
                <Link href={'/routes/video-library'}><div className={styles.item}>Video Library</div></Link>
                <Link href={'/routes/earth'}><div className={styles.item}>Earth</div></Link>
                <Link href={'/routes/epic'}><div className={styles.item}>EPIC</div></Link>
                <Link href={'/routes/mars-rover-photos'}><div className={styles.item}>Mars Rover Photos</div></Link>
            </nav>
            <div className={styles.footer}>footer</div>
        </section>
      </>
    )
}
