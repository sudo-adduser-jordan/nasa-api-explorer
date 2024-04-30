"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "./marsbar.module.css"

export const Marsbar = () => {
    // const [active, setActive] = useState("spirit")
    // const paths = ["curiosity", "spirit", "opportunity"] // needs to be updated - nasa changed there api for completed missions
    const [active, setActive] = useState("curiosity")
    const paths = ["curiosity"]
    const content = (
        <div className={styles.container}>
            <div className={styles.title}>Mars Rover Photos</div>
            <nav className={styles.nav}>
                {paths.map((path, i) => {
                    return (
                        <Link
                            key={i}
                            href={`/mars-rover-photos/${path}`}
                            onClick={() => setActive(path)}
                            className={
                                active === path
                                    ? `${styles.activeItem}`
                                    : `${styles.item}`
                            }
                        >
                            {path.charAt(0).toUpperCase() + path.slice(1)}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
    return content
}
