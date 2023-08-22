import { Marsbar } from "../../components/marsbar/Marsbar"
import styles from "./mars.module.css"

export default function MarsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.layout}>
            <Marsbar />
            {children}
        </main>
    )
}
