import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo" style={{ padding: 0 }}>
        <img src="/header_image.png?v=3" alt="Upfora" className="nav-logo-img" />
      </a>
      <ul className="nav-links">
        <li><a href="#usp">How We Work</a></li>
        <li><a href="#services">What We Build</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#industries">Industries</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Get a Free Demo →</a>
    </nav>
  );
}
