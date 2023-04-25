import styles from '../styles/components/Search.module.css'


export default function Search() {
    return(
      <>
      <form className={styles.search}>
        <input className={styles.entry} />
        <div className={styles.icon}>icon</div>
      </form>
      </>
    )
}