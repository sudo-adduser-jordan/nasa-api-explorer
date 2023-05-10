'use client';
import styles from './topbar.module.css';

const Topbar = ({ showSidebar }: any) => {
    const content = (
        <>
            <div className={styles.container}>
                <div className={styles.left}>Nasa Api Explorer</div>
                <div className={styles.middle}>x</div>
                <div className={styles.right}>
                    <button className={styles.button} onClick={showSidebar}>
                        Menu
                    </button>
                </div>
            </div>
        </>
    );
    return content;
};

export default Topbar;
