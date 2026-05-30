import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './Experience.css';

const experiences = [
  {
    company: 'Mercedes-Benz.io',
    role: 'Application Architect — Search Result Page',
    period: 'Jul 2025 – Present',
    description:
      'Serving as Application Architect for the Search Result Page, aligning technical solutions with business objectives. Creating detailed software specifications and collaborating with cross-functional teams to maintain system architecture documentation.',
    tags: ['Architecture', 'Vue.js', 'TypeScript', 'System Design'],
  },
  {
    company: 'Mercedes-Benz.io',
    role: 'Senior Frontend Engineer — Search Result Page',
    period: 'Sep 2024 – Jul 2025',
    description:
      'Led development on a key digital transformation pillar serving 500k+ monthly users across 30+ countries. Designed and led the new Generative AI Chat used across the entire website. Acted as bridge between technical and business teams.',
    tags: ['Vue 3', 'AI Chat', 'TypeScript', 'Leadership'],
  },
  {
    company: 'Mercedes-Benz.io',
    role: 'Senior Frontend Engineer — GPME & Seller.Center',
    period: 'Mar 2024 – Sep 2024',
    description:
      'Led the migration from AngularJS to Vue 3, modernizing the stack with Vite, Pinia, and Vitest during a critical go-live phase. Mentored frontend peers, conducted code reviews, and contributed to architectural decisions.',
    tags: ['Vue 3', 'Vite', 'Pinia', 'Migration'],
  },
  {
    company: 'Mercedes-Benz.io',
    role: 'Frontend Engineer — GPME & Seller.Center',
    period: 'Apr 2022 – Mar 2024',
    description:
      'Delivered high-quality, maintainable code with 80%+ test coverage. Translated complex UI/UX designs into pixel-perfect, responsive interfaces. Supported recruitment through code challenge evaluations and technical interviews.',
    tags: ['Vue.js', 'Testing', 'Responsive', 'Recruitment'],
  },
  {
    company: 'Multivision Consulting (@ Vortal)',
    role: 'Frontend Engineer',
    period: 'Aug 2021 – Mar 2022',
    description:
      'Advised on strategic technology choices. Architected and launched new features while working closely with Product Managers, Developers, and Designers.',
    tags: ['Product Dev', 'Architecture', 'JavaScript'],
  },
  {
    company: 'Crowdform',
    role: 'Frontend Engineer',
    period: 'Feb 2021 – Aug 2021',
    description:
      'Built and launched features across multiple projects simultaneously. Worked with data analysts and cross-functional teams to uncover customer needs and implement solutions.',
    tags: ['React', 'Multi-project', 'Remote'],
  },
  {
    company: 'Halliburton',
    role: 'Application Engineer',
    period: 'Jun 2017 – Feb 2021',
    description:
      'Worked on a $1M+ product in the Oil & Gas industry as frontend focal point. Implemented reactive programming and LIBS/APPS structure. Led client meetings to translate business needs into technical solutions.',
    tags: ['Angular', '.NET Core', 'AWS', 'Oil & Gas'],
  },
];

export default function Experience() {
  const { ref, isInView } = useInView();

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
          <motion.article
            key={`${exp.company}-${exp.period}`}
            className="exp-item"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
          >
            <div className="exp-company">{exp.company}</div>
            <h3 className="exp-role">{exp.role}</h3>
            <div className="exp-period">{exp.period}</div>
            <p className="exp-description">{exp.description}</p>
            <div className="exp-tags">
              {exp.tags.map((tag) => (
                <span key={tag} className="exp-tag">{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
