import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './About.css';

const highlights = [
  { number: '6+', label: 'Years of Experience' },
  { number: '1M+', label: 'Monthly Users Served' },
  { number: '40+', label: 'Countries Reached' },
  { number: '15+', label: 'Engineers Led & Mentored' },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section className="about" id="about" ref={ref}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        About Me
      </motion.span>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Turning complexity into clarity.
      </motion.h2>
      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            I'm an Senior Software Engineer and Application Architect with an MBA in Software Engineering. What motivates me most
            is bridging the gap between business and technology. Translating
            complex ideas into clear, practical solutions.
          </p>
          <p>
            Currently at <strong>Mercedes-Benz.io</strong> in Lisbon, where I
            architect solutions for their Search Result Page serving users across
            30+ countries. I've also designed and led the development of their
            Generative AI Chat, and other key features.
          </p>
          <p>
            I also write about frontend engineering and architecture on{' '}
            <a href="https://medium.com/@raphaelmarques77" target="_blank" rel="noopener noreferrer">Medium</a>{' '}
            and share insights on{' '}
            <a href="https://www.linkedin.com/in/raphaelmarques77/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </motion.div>
        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="highlight-card"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
            >
              <div className="highlight-card-number">{h.number}</div>
              <div className="highlight-card-label">{h.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
