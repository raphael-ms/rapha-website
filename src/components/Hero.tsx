import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Raphael Marques
        </motion.h1>
        <motion.p
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Senior Frontend Engineer & <strong>Application Architect</strong>
          <br />
          Bridging Business & Technology
        </motion.p>
        <motion.a
          href="#contact"
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Let's talk →
        </motion.a>
      </div>
      <div className="hero-scroll-indicator">
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
