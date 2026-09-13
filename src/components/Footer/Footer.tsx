import { socialLinks } from '../../data/content';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.socials}>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  title={link.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.platform} profile`}
                >
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {currentYear} Franco Yves De Santos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
