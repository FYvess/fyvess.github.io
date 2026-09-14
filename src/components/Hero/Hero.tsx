import { useState, useEffect } from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  DiscordLogo,
  FacebookLogo,
  ArrowRight,
} from 'phosphor-react';
import { socialLinks } from '../../data/content';
import styles from './Hero.module.css';

const ROLES = ['AI Specialist', 'Data Engineer', 'AI Engineer', 'Software Engineer', 'Vibe Coder'];
const TYPING_SPEED = 100; // ms per character
const DELETE_SPEED = 50; // ms per character
const PAUSE_DURATION = 2000; // ms between role cycles

/**
 * Hero Component - Landing section with typing animation and CTAs
 * Requirements: 4.1-4.6
 */
export function Hero() {
  const [currentRole, setCurrentRole] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < role.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setCurrentRole(role.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, TYPING_SPEED);
    } else if (!isDeleting && charIndex === role.length) {
      // Pause at end of role
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_DURATION);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentRole(role.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, DELETE_SPEED);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex, isDeleting]);

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconMap: Record<string, React.ComponentType> = {
    'github-logo': GithubLogo,
    'linkedin-logo': LinkedinLogo,
    'discord-logo': DiscordLogo,
    'facebook-logo': FacebookLogo,
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Profile Image */}
        <div className={styles.imageWrapper}>
          <img
            src="/assets/img/me.jpg"
            alt="Franco Yves De Santos"
            className={styles.profileImage}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.name}>Franco Yves</h1>

          {/* Typing Animation */}
          <div className={styles.typingContainer}>
            <span className={styles.typing}>{currentRole}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.description}>
            Full-Stack Developer specializing in React, TypeScript, and modern
            web technologies. Based in Cavite, Philippines.
          </p>

          {/* Social Links */}
          <div className={styles.socials}>
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon] as React.ComponentType<{ size: number; weight: string }>;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={`Visit ${social.platform}`}
                  title={`Visit ${social.platform}`}
                >
                  <Icon size={24} weight="fill" />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryButton}
              onClick={() => handleSmoothScroll('portfolio')}
            >
              View Projects
              <ArrowRight size={20} weight="bold" />
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => handleSmoothScroll('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
