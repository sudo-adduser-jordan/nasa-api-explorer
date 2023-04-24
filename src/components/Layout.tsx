import styles from '../styles/components/Layout.module.css'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
