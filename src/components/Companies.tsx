import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './Companies.css';

const companies = [
  {
    name: 'Mercedes-Benz',
    logo: (
      <svg viewBox="0 0 80 80" fill="currentColor" width="40" height="40">
        <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M40 8 L40 40 L16 62" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 40 L64 62" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 40 L40 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Halliburton',
    logo: (
      <svg viewBox="0 0 120 32" fill="currentColor" width="100" height="28">
        <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" letterSpacing="-0.5">HALLIBURTON</text>
      </svg>
    ),
  },
  {
    name: 'Shell',
    logo: (
      <svg viewBox="0 0 60 66" fill="currentColor" width="32" height="36">
        <path d="M30 2C17 2 8 12 8 24c0 12 8 20 22 38 14-18 22-26 22-38 0-12-9-22-22-22z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M30 10v48M18 16c4 12 4 32 12 42M42 16c-4 12-4 32-12 42M12 28h36M14 38h32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: 'Petrobras',
    logo: (
      <svg viewBox="0 0 100 32" fill="currentColor" width="90" height="28">
        <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.3">PETROBRAS</text>
      </svg>
    ),
  },
  {
    name: 'Multivision',
    logo: (
      <svg viewBox="0 0 110 32" fill="currentColor" width="100" height="28">
        <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="16" letterSpacing="-0.3">MULTIVISION</text>
      </svg>
    ),
  },
  {
    name: 'Crowdform',
    logo: (
      <svg viewBox="0 0 100 32" fill="currentColor" width="90" height="28">
        <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="17" letterSpacing="-0.5">Crowdform</text>
      </svg>
    ),
  },
  {
    name: 'Vortal',
    logo: (
      <svg viewBox="0 0 70 32" fill="currentColor" width="60" height="28">
        <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" letterSpacing="-0.5">VORTAL</text>
      </svg>
    ),
  },
];

// Double the array for seamless loop
const ticker = [...companies, ...companies];

export default function Companies() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section className="companies" ref={ref}>
      <motion.p
        className="companies-label"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        Trusted by & worked with
      </motion.p>

      <div className="companies-ticker-wrapper">
        <div className="companies-ticker-fade companies-ticker-fade-left" />
        <div className="companies-ticker">
          <div className="companies-ticker-track">
            {ticker.map((company, i) => (
              <div key={`${company.name}-${i}`} className="company-ticker-item">
                <span className="company-ticker-logo">{company.logo}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="companies-ticker-fade companies-ticker-fade-right" />
      </div>
    </section>
  );
}
