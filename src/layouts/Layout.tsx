import Nav from '../components/Nav'
import Content from '@/components/Content'
import styles from '../styles/layouts/Layout.module.css'


export default function Layout() {
    return (
      <>
        <section className={styles.container}>
          <Nav />
          <Content />
        </section>
      </>
    )
}