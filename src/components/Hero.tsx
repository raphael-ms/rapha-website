import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Mesh gradient background */}
      <div className="hero-mesh" />
      <div className="hero-grid-lines" />

      <div className="hero-inner">
        {/* Left: bold type + CTA */}
        <div className="hero-text">
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Raphael
            <br />
            <span className="hero-name-accent">Marques</span>
          </motion.h1>

          <motion.p
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Senior Frontend Engineer &amp; Application Architect
            <br />
            <span className="hero-title-highlight">Bridging Business &amp; Technology</span>
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="hero-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Let's talk</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
            <motion.a
              href="#experience"
              className="hero-cta-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View experience
            </motion.a>
          </motion.div>
        </div>

        {/* Right: profile image with creative frame */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-image-frame">
            <div className="hero-image-ring" />
            <img
              src="/profile-400.webp"
              alt="Raphael Marques — Senior Frontend Engineer"
              className="hero-image"
              width={280}
              height={280}
              loading="eager"
            />
          </div>
          <motion.div
            className="hero-floating-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <span className="hero-floating-card-icon">⚡</span>
            <span>6+ years shipping products</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
