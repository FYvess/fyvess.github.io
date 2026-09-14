import { useState } from 'react';
import { Sun, Moon, MusicNote, SpeakerSlash, List, X } from 'phosphor-react';
import { useTheme } from '../../context/ThemeContext';
import { useMusic } from '../../context/MusicContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './Navigation.module.css';

/**
 * Navigation Component - Fixed header with smooth scroll navigation, theme toggle, music toggle
 * Requirements: 3.1-3.6, 18.1, 19.1
 */
export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isPlaying, toggleMusic } = useMusic();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const sectionIds = ['home', 'about', 'portfolio', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  const navigationLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={styles.navigation}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <button
            className={styles.logoButton}
            onClick={() => handleSmoothScroll('home')}
            aria-label="Franco Yves"
          >
            FYvess
          </button>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className={styles.navLinks}>
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                className={`${styles.navLink} ${
                  activeSection === link.id ? styles.active : ''
                }`}
                onClick={() => handleSmoothScroll(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* Controls */}
        <div className={styles.controls}>
          {/* Music Toggle */}
          <button
            className={`${styles.controlButton} ${
              isPlaying ? styles.playing : ''
            }`}
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            title={isPlaying ? 'Music playing' : 'Music paused'}
          >
            {isPlaying ? (
              <MusicNote size={20} weight="fill" />
            ) : (
              <SpeakerSlash size={20} />
            )}
          </button>

          {/* Theme Toggle */}
          <button
            className={styles.controlButton}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} weight="fill" />
            ) : (
              <Sun size={20} weight="fill" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button
              className={`${styles.controlButton} ${styles.mobileMenuButton}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              className={`${styles.mobileMenuLink} ${
                activeSection === link.id ? styles.active : ''
              }`}
              onClick={() => handleSmoothScroll(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
