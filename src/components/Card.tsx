import styles from '../styles/components/Card.module.css'

// export const getStaticProps = async () => {

//   const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
//   const data = await response.json();

//   return {
//     props: {
//       card: data
//     }
//   }
// }

export default function Card() {
  // export default function Card({ card }) {
    return (
      <>
        <div className={styles.card}>

            <div className={styles.image}>
              {/* {card.image} */}
              x
            </div>

            <div className={styles.description}>
              {/* {card.description} */}
              x
            </div>

        </div>
      </>
    )
}