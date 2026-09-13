import { useState, useRef } from 'react';
import { CaretRight } from 'phosphor-react';
import { projects, certificates, techStack } from '../../data/content';
import { getPhosphorIcon } from '../../utils/iconHelper';
import styles from './Portfolio.module.css';

type TabType = 'projects' | 'certificates' | 'techstack';

/**
 * Portfolio Component - Tabbed interface for Projects, Certificates, Tech Stack
 * Requirements: 6.1-6.8, 10.3, 13.2
 */
export function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Preserve scroll position on tab switch by scrolling to top of content
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const tabs = [
    { id: 'projects' as TabType, label: 'Projects' },
    { id: 'certificates' as TabType, label: 'Certificates' },
    { id: 'techstack' as TabType, label: 'Tech Stack' },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>

        {/* Tab Buttons */}
        <div className={styles.tabButtons}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.active : ''
              }`}
              onClick={() => handleTabChange(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.contentWrapper} ref={scrollRef}>
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className={styles.tabContent} role="tabpanel">
              <div className={styles.projectsGrid}>
                {projects.map((project) => (
                  <article key={project.id} className={styles.projectCard}>
                    <div className={styles.projectImageWrapper}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={styles.projectImage}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>
                        {project.description}
                      </p>
                      <div className={styles.technologies}>
                        {project.technologies.map((tech) => (
                          <span key={tech} className={styles.techBadge}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className={styles.projectLinks}>
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectLink}
                          >
                            View Live
                            <CaretRight size={16} weight="bold" />
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectLink}
                          >
                            GitHub
                            <CaretRight size={16} weight="bold" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className={styles.tabContent} role="tabpanel">
              <div className={styles.certificatesGrid}>
                {certificates.map((cert) => (
                  <article key={cert.id} className={styles.certificateCard}>
                    <div className={styles.certImageWrapper}>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className={styles.certImage}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.certContent}>
                      <h3 className={styles.certTitle}>{cert.title}</h3>
                      <div className={styles.certMeta}>
                        <span className={styles.issuer}>{cert.issuer}</span>
                        <span className={styles.date}>{cert.date}</span>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.credentialLink}
                        >
                          View Credential
                          <CaretRight size={16} weight="bold" />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'techstack' && (
            <div className={styles.tabContent} role="tabpanel">
              <div className={styles.techStackContainer}>
                {/* Group tech by category */}
                {Array.from(
                  new Set(techStack.map((item) => item.category))
                ).map((category) => (
                  <div key={category} className={styles.techCategory}>
                    <h3 className={styles.categoryTitle}>{category}</h3>
                    <div className={styles.techGrid}>
                      {techStack
                        .filter((item) => item.category === category)
                        .map((item) => {
                          const Icon = getPhosphorIcon(item.icon);
                          return (
                            <div
                              key={item.name}
                              className={styles.techItem}
                              title={item.name}
                            >
                              {Icon && (
                                <Icon size={28} weight="bold" />
                              )}
                              <span className={styles.techName}>
                                {item.name}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
