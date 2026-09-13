import { useEffect, useState } from 'react';
import { siteMetadata } from '../../data/content';
import styles from './Loader.module.css';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate progress bar over 2.5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;
        return next > 95 ? 95 : next;
      });
    }, 200);

    // Complete loading after 2.5 seconds
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setFadeOut(true);

      // Call onComplete after fade-out animation
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`${styles.loader} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <h1 className={styles.name}>{siteMetadata.name}</h1>
        <p className={styles.title}>{siteMetadata.description}</p>

        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className={styles.percentage}>{Math.round(progress)}%</p>
      </div>
    </div>
  );
}
