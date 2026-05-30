import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed & built by <span>Raphael Marques</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
