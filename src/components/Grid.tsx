import Card from '../components/Card'
import styles from '../styles/components/Grid.module.css'

export default function Grid() {
    return (
      <>
        <section className={styles.container}>
        <div className={styles.grid}>
                    <Card />
                    <Card />
                    <Card />

                    <Card />
                    <Card />
                    <Card />

                    <Card />
                    <Card />
                    <Card />

                </div>    

                <div className={styles.grid}>
                    <Card />
                    <Card />
                    <Card />

                    <Card />
                    <Card />
                    <Card />

                    <Card />
                    <Card />
                    <Card />

                </div>
                <div className={styles.grid}>
                    <Card />
                    <Card />
                    <Card />

                    <Card />
                    <Card />
                    <Card />

                    <Card />
                    <Card />
                    <Card />

                </div>    
                            
                <div className={styles.grid}>
                    <Card />
                    <Card />
                    <Card />

                    <Card />
                    <Card />
                    <Card />

                    <Card />
                    <Card />
                    <Card />

                </div>
        </section>
      </>
    )
}