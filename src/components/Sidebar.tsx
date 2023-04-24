import Link from 'next/link'
import styles from '../styles/components/Sidebar.module.css'

export default function Nav() {
    return (
      <>
        <section className={styles.container}>
            <nav className={styles.nav}>
                Title
                <Link href='/'><div className={styles.item}>Home</div></Link>
                <Link href='/about'><div className={styles.item}>About</div></Link>
                <Link href='/apod'><div className={styles.item}>APOD</div></Link>
                <Link href='/image-library'><div className={styles.item}>Image Library</div></Link>
                <Link href='/video-library'><div className={styles.item}>Video Library</div></Link>
                <Link href='/earth'><div className={styles.item}>Earth</div></Link>
                <Link href='/epic'><div className={styles.item}>EPIC</div></Link>
                <Link href='/mars-rover-photos'><div className={styles.item}>Mars Rover Photos</div></Link>
            </nav>
            <div className={styles.footer}>footer</div>
        </section>
      </>
    )
}
