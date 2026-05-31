import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed & built by{' '}
        <a
          href="https://www.linkedin.com/in/raphaelmarques77/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raphael Marques
        </a>{' '}
        · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
