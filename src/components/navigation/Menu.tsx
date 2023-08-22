"use client"

import Link from "next/link"
import styles from "./menu.module.css"
import { GrClose } from "react-icons/gr"
import { usePathname } from "next/navigation"

type MenuProps = {
    active: boolean
    setActive: (value: boolean) => void
}

export default function Menu({ active, setActive }: MenuProps) {
    const pathname = usePathname()
    const array = pathname.split("/")
    const tab = array[array.length - 1]

    return (
        <section
            className={
                active === false ? styles.container : styles.containerActive
            }
        >
            <button
                className={styles.button}
                onClick={() => setActive(!active)}
            >
                <GrClose className={styles.icon} />
            </button>
            <Link
                href={"/"}
                className={tab === "" ? styles.linkActive : styles.link}
            >
                Home
            </Link>
            <Link
                href={"/apod"}
                className={tab === "apod" ? styles.linkActive : styles.link}
            >
                Picture of the Day
            </Link>
            <Link
                href={"/image-library"}
                className={
                    tab === "image-library" ? styles.linkActive : styles.link
                }
            >
                Images
            </Link>
            <Link
                href={"/video-library"}
                className={
                    tab === "video-library" ? styles.linkActive : styles.link
                }
            >
                Videos
            </Link>
            <Link
                href={"/mars-rover-photos/spirit"}
                className={
                    tab === "mars-rover-photos/spirit"
                        ? styles.linkActive
                        : styles.link
                }
            >
                Mars
            </Link>
        </section>
    )
}
