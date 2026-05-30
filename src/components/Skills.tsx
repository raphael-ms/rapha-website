import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '◈',
    items: ['React', 'Vue 3', 'TypeScript', 'Angular', 'Next.js', 'Vite'],
  },
  {
    title: 'Architecture',
    icon: '△',
    items: ['System Design', 'Micro Frontends', 'Design Patterns', 'API Design', 'Solution Architecture'],
  },
  {
    title: 'Tooling & Testing',
    icon: '⬡',
    items: ['Vitest', 'Jest', 'Pinia', 'Webpack', 'CI/CD', 'Jenkins'],
  },
  {
    title: 'Backend & Cloud',
    icon: '◇',
    items: ['Node.js', 'AWS', '.NET Core', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Leadership',
    icon: '○',
    items: ['Team Mentoring', 'Code Reviews', 'Technical Interviews', 'PI Planning', 'Stakeholder Mgmt'],
  },
  {
    title: 'Methodologies',
    icon: '□',
    items: ['Agile / SAFe', 'TDD', 'Reactive Programming', 'DDD', 'Product Thinking'],
  },
];

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section className="skills" id="skills" ref={ref}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        Expertise
      </motion.span>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Tools & technologies I work with.
      </motion.h2>
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
          >
            <h3 className="skill-category-title">
              <span className="skill-category-icon">{cat.icon}</span>
              {cat.title}
            </h3>
            <div className="skill-items">
              {cat.items.map((item) => (
                <span key={item} className="skill-item">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
