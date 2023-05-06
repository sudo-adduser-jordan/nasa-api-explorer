import styles from './Topbar.module.css';

export default function Topbar({ showSidebar }: { showSidebar: () => void }) {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.title}>NASA Api Explorer</div>
                <button className={styles.toggle} onClick={showSidebar}>
                    Toggle
                </button>
            </section>
        </>
    );
}
