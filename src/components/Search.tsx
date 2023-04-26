import styles from '../styles/components/Search.module.css'
import { ChangeEvent, useState } from "react";

type Input = {
  input: string
}


export default function Search(props: Input) {
    return(
      <>
      <form className={styles.search}>

        <input 
          type="text" 
          // onChange={}
          // value={}
          className={styles.entry} 
          />

        <button 
          className={styles.icon}
          // onClick={} 
        >
          Search
        </button>
        
      </form>
      </>
    )
}

