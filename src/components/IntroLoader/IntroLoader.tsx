import { useEffect, useState } from 'react';
import styles from './IntroLoader.module.css';

export function IntroLoader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.introLoader} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.introContent}>
        <div className={styles.introLogo}>
          <h1 className={styles.introName}>FYvess</h1>
          <div className={styles.introTitle}>
            <span className={styles.introText}>Bachelor of Science in Computer Engineering</span>
          </div>
        </div>
        <div className={styles.introProgress}>
          <div className={styles.introProgressBar}></div>
        </div>
      </div>
      <div className={styles.introOverlay}></div>
    </div>
  );
}
