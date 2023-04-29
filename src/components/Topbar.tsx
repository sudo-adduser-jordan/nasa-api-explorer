import { MouseEventHandler } from 'react';
import styles from './Topbar.module.css';

export default function Topbar({ onToggle }: any) {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.title}>Topbar</div>
                <button className={styles.toggle} onClick={onToggle}>
                    Toggle
                </button>
            </section>
        </>
    );
}
