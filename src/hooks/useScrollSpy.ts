import { useState, useEffect } from 'react';

/**
 * useScrollSpy - Tracks which section is currently in viewport using IntersectionObserver
 * Returns the ID of the active (most visible) section
 *
 * Requirements: 3.3
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    // Create observer with 50% threshold - section becomes active when 50% visible
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with highest intersection ratio (most visible)
        const mostVisible = entries.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max,
          entries[0]
        );

        if (mostVisible?.intersectionRatio > 0) {
          setActiveSection(mostVisible.target.id);
        }
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
