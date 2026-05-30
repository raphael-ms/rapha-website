import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        Get in Touch
      </motion.span>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Let's build something together.
      </motion.h2>
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="contact-text">
          I'm always open to discussing new opportunities, interesting projects,
          or ways to bridge business and technology. Whether you need a senior
          engineer, an architect, or just want to chat about frontend — reach out.
        </p>
        <div className="contact-links">
          <motion.a
            href="mailto:raphaelmarques77@gmail.com"
            className="contact-link"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="contact-link-icon">✉</span>
            Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/raphaelmarques77/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="contact-link-icon">in</span>
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
