import './Founder.css';

export default function Founder() {
  return (
    <section className="founder">
      <div className="founder-visual reveal">
        <div className="founder-card">
          <div className="founder-quote">
            "I've shipped <em>20+ real products</em> before starting Upfora. That's the only kind of experience that matters."
          </div>
          <div className="founder-attr">
            <div className="founder-avatar">G</div>
            <span className="founder-name">Garv Gyanani · Founder, Upfora</span>
          </div>
        </div>
        <div className="stat-pills">
          <div className="stat-pill"><span className="sp-n">20+</span><span className="sp-l">Products shipped</span></div>
          <div className="stat-pill"><span className="sp-n">6+</span><span className="sp-l">Industries</span></div>
        </div>
      </div>

      <div className="founder-text reveal d1">
        <div className="eyebrow">The Origin</div>
        <h2>Real product<br /><em>experience.</em></h2>
        <p>I have spent years engineering and launching <strong>20+ real software products</strong> across SaaS, marketplaces, health-tech, legal-tech, education, and AI systems.</p>
        <p><strong>Upfora</strong> was created for one simple reason: to bring that same high-level product thinking, scale, and automation expertise to growing businesses. We don't just design pages — we engineer outcomes.</p>
        <a href="#contact" className="btn-p" style={{marginTop:'0.5rem'}}>Work With Us →</a>
      </div>
    </section>
  );
}
