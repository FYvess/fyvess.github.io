import { EnvelopeOpen, Phone } from 'phosphor-react';
import { socialLinks, siteMetadata } from '../../data/content';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Get In Touch</h2>
        
        <address className={styles.contactInfo}>
          <div className={styles.item}>
            <EnvelopeOpen size={24} weight="fill" />
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
          </div>
          
          <div className={styles.item}>
            <Phone size={24} weight="fill" />
            <a href={`tel:${siteMetadata.phone}`}>{siteMetadata.phone}</a>
          </div>
        </address>

        <div className={styles.socials}>
          <p>Connect with me:</p>
          <ul className={styles.socialList}>
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
      </div>
    </section>
  );
}
