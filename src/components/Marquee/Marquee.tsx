import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './Marquee.module.css';
import type { MarqueeItem } from '../../types';

interface MarqueeProps {
  items: MarqueeItem[];
}

export function Marquee({ items }: MarqueeProps) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <section className={styles.marquee}>
      <div className={`${styles.track} ${prefersReducedMotion ? styles.noAnimation : ''}`}>
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={`${item.name}-${idx}`} className={styles.item}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
