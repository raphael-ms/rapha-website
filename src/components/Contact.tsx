import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="contact-label">Get in Touch</span>
        <h2 className="contact-title">
          Let's build something
          <br />
          <span className="contact-title-accent">together.</span>
        </h2>
        <p className="contact-subtitle">
          I'm always open to discussing new opportunities, interesting projects,
          or ways to bridge business and technology.
        </p>
      </motion.div>

      <motion.div
        className="contact-cards"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.a
          href="mailto:raphaelmarques77@gmail.com"
          className="contact-card"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 7l-10 6L2 7"/>
            </svg>
          </div>
          <span className="contact-card-label">Email</span>
          <span className="contact-card-value">raphaelmarques77@gmail.com</span>
          <span className="contact-card-arrow">→</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/raphaelmarques77/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.45 1.45 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zM18.91 18.74h-3v-4.26c0-1.08-.02-2.47-1.5-2.47-1.51 0-1.74 1.18-1.74 2.39v4.34h-3v-9h2.89v1.3h.04a3.16 3.16 0 012.84-1.56c3.04 0 3.6 2 3.6 4.59v4.67z"/>
            </svg>
          </div>
          <span className="contact-card-label">LinkedIn</span>
          <span className="contact-card-value">Connect with me</span>
          <span className="contact-card-arrow">→</span>
        </motion.a>

        <motion.a
          href="https://medium.com/@raphaelmarques77"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z"/>
            </svg>
          </div>
          <span className="contact-card-label">Medium</span>
          <span className="contact-card-value">Read my articles</span>
          <span className="contact-card-arrow">→</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
