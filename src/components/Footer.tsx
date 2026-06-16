import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <a href="#" className="f-logo">
        <span className="f-logo-mark">
          <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </span>
        UPFORA
      </a>
      <ul className="f-links">
        <li><a href="#usp">How We Work</a></li>
        <li><a href="#services">What We Build</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#experience">Experience</a></li>
      </ul>
      <span className="f-copy">© 2026 Upfora · AI-First Digital Growth Studio</span>
    </footer>
  );
}
