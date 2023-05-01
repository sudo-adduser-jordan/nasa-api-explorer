import styles from './Topbar.module.css';

export default function Topbar({ onToggle }: any) {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.title}>NASA Api Explorer</div>
                <button className={styles.toggle} onClick={onToggle}>
                    Toggle
                </button>
            </section>
        </>
    );
}
