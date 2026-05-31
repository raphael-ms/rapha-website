import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './Experience.css';

const experiences = [
  {
    company: 'Mercedes-Benz.io',
    role: 'Application Architect — Search Result Page',
    period: 'Jul 2025 – Present',
    description:
      'Serving as Application Architect for the Search Result Page, aligning technical solutions with business objectives. Creating detailed software specifications and collaborating with cross-functional teams.',
    tags: ['Architecture', 'Vue.js', 'TypeScript', 'System Design'],
  },
  {
    company: 'Mercedes-Benz.io',
    role: 'Senior Frontend Engineer — Search Result Page',
    period: 'Sep 2024 – Present',
    description:
      'Led development serving 500k+ monthly users across 30+ countries. Designed and led the new Generative AI Chat used across the entire website. Acted as bridge between technical and business teams.',
    tags: ['Vue 3', 'AI Chat', 'TypeScript', 'Leadership'],
  },
  {
    company: 'Mercedes-Benz.io',
    role: 'Senior Frontend Engineer — GPME & Seller.Center',
    period: 'Mar 2024 – Sep 2024',
    description:
      'Led migration from AngularJS to Vue 3, modernizing with Vite, Pinia, and Vitest during critical go-live. Mentored peers and contributed to architectural decisions.',
    tags: ['Vue 3', 'Vite', 'Pinia', 'Migration'],
  },
  {
    company: 'Mercedes-Benz.io',
    role: 'Frontend Engineer — GPME & Seller.Center',
    period: 'Apr 2022 – Mar 2024',
    description:
      'Delivered maintainable code with 80%+ test coverage. Pixel-perfect responsive interfaces. Supported recruitment through code evaluations and technical interviews.',
    tags: ['Vue.js', 'Testing', 'Responsive'],
  },
  {
    company: 'Multivision (@ Vortal)',
    role: 'Frontend Engineer',
    period: 'Aug 2021 – Mar 2022',
    description:
      'Advised on strategic technology choices. Architected and launched new features with PMs, developers, and designers.',
    tags: ['Product Dev', 'Architecture'],
  },
  {
    company: 'Crowdform',
    role: 'Frontend Engineer',
    period: 'Feb 2021 – Aug 2021',
    description:
      'Built and launched features across multiple projects simultaneously. Worked with data analysts and cross-functional teams.',
    tags: ['React', 'Multi-project', 'Remote'],
  },
  {
    company: 'Halliburton',
    role: 'Application Engineer',
    period: 'Sep 2019 – Feb 2021',
    description:
      'Frontend focal point on a $1M+ Oil & Gas product. Implemented reactive programming and led client meetings to translate business needs.',
    tags: ['Angular', 'AWS', 'Oil & Gas'],
  },
];

export default function Experience() {
  const { ref, isInView } = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="experience" id="experience" ref={ref}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        Career
      </motion.span>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Where I've made impact.
      </motion.h2>

      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            className="exp-row"
            data-hovered={hoveredIndex === i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
          >
            <div className="exp-row-period">{exp.period}</div>
            <div className="exp-row-indicator">
              <div className="exp-row-dot" />
              {i < experiences.length - 1 && <div className="exp-row-line" />}
            </div>
            <div className="exp-row-content">
              <div className="exp-row-header">
                <span className="exp-row-role">{exp.role}</span>
                <span className="exp-row-company">{exp.company}</span>
              </div>
              <div className="exp-row-expand">
                <p className="exp-row-description">{exp.description}</p>
                <div className="exp-row-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-row-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
