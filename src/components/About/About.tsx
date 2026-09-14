import { useState, useEffect, useRef } from 'react';
import { Download } from 'phosphor-react';
import { skills, stats } from '../../data/content';
import { getPhosphorIcon } from '../../utils/iconHelper';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

/**
 * About Component - Biography, skills, animated counters, CV download
 * Requirements: 5.1-5.6
 */
export function About() {
  const [displayStats, setDisplayStats] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bioRef = useScrollReveal<HTMLDivElement>();
  const skillsRef = useScrollReveal<HTMLDivElement>(0.05);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let currentValue = 0;
      const target = stat.value;
      const increment = Math.max(1, Math.floor(target / 30));

      const frame = () => {
        if (currentValue < target) {
          currentValue = Math.min(currentValue + increment, target);
          setDisplayStats((prev) => {
            const next = [...prev];
            next[index] = currentValue;
            return next;
          });
          requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);
    });
  };

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        {/* Biography */}
        <div className={styles.biography} ref={bioRef}>
          <p>
            I'm a full-stack developer with a passion for building modern web
            applications using React and TypeScript. With experience spanning
            frontend development, backend APIs, and database design, I
            specialize in creating clean, maintainable code and intuitive user
            experiences.
          </p>
          <p>
            Based in Cavite, Philippines, I'm constantly learning new
            technologies and best practices. When I'm not coding, I enjoy
            exploring new tools, contributing to open-source projects, and
            sharing knowledge with the developer community.
          </p>
        </div>

        {/* Statistics */}
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statValue}>
                {displayStats[index]}
                {stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className={styles.skillsSection} ref={skillsRef}>
          <h3 className={styles.subsectionTitle}>Skills & Technologies</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => {
              const Icon = getPhosphorIcon(skill.icon);
              return (
                <div key={skill.name} className={styles.skillCard}>
                  {Icon && <Icon size={32} weight="bold" />}
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CV Download */}
        <div className={styles.cvSection}>
          <a
            href="/assets/cv/resume.pdf"
            download="Franco_Yves_CV.pdf"
            className={styles.cvButton}
            aria-label="Download CV"
          >
            <Download size={20} weight="bold" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
