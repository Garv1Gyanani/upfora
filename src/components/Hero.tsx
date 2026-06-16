import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-lines" />

      <div className="hero-content">
        <div className="hero-pill">
          <span className="hero-pill-dot" />
          AI-First Digital Growth Studio
        </div>

        <h1>
          We Build It<br />
          <em>Before You Pay.</em>
        </h1>

        <p className="hero-desc">
          From booking systems and mobile apps to AI automations and customer portals — we build a working demo of your solution first, at zero cost to you.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn-p">Get Your Free Demo →</a>
          <a href="#projects" className="btn-g">See Our Work</a>
        </div>
      </div>

      <div className="hero-terminal">
        <div className="demo-preview">
          <div className="demo-header">
            <div className="demo-dots">
              <span className="demo-dot" />
              <span className="demo-dot" />
              <span className="demo-dot" />
            </div>
            <span className="demo-title">Demo Preview</span>
            <span className="demo-status">● Live</span>
          </div>
          <div className="demo-body">
            <div className="demo-sidebar">
              <div className="ds-item ds-active">Dashboard</div>
              <div className="ds-item">Bookings</div>
              <div className="ds-item">Revenue</div>
              <div className="ds-item">Analytics</div>
              <div className="ds-item">Settings</div>
            </div>
            <div className="demo-main">
              <div className="dm-header">
                <h3>Booking Dashboard</h3>
                <span className="dm-badge">Demo Active</span>
              </div>
              <div className="dm-metrics">
                <div className="dm-card">
                  <svg className="dmc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span className="dmc-value">₹0</span>
                  <span className="dmc-label">Upfront Cost</span>
                </div>
                <div className="dm-card">
                  <svg className="dmc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span className="dmc-value">3 Days</span>
                  <span className="dmc-label">To Demo</span>
                </div>
                <div className="dm-card">
                  <svg className="dmc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  <span className="dmc-value">96%</span>
                  <span className="dmc-label">Faster Launch</span>
                </div>
              </div>
              <div className="dm-chart">
                <div className="dm-chart-header">
                  <span>Revenue Projection</span>
                  <span className="dm-chart-val">+340%</span>
                </div>
                <div className="dm-chart-bars">
                  {[35, 50, 65, 80, 100, 70, 85].map((h, i) => (
                    <div key={i} className="dm-bar-wrap">
                      <div className="dm-bar" style={{ '--h': `${h}%` } as React.CSSProperties}>
                        <div className="dm-bar-fill" style={{ animationDelay: `${i * 0.1}s` }} />
                      </div>
                      <span className="dm-bar-label">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-side-card hsc-1">
          <div className="hsc-icon">🚀</div>
          <div className="hsc-text">
            <span className="hsc-label">NutriCore App</span>
            <span className="hsc-sub">Built in 5 days</span>
          </div>
        </div>
        <div className="hero-side-card hsc-2">
          <div className="hsc-icon">⚡</div>
          <div className="hsc-text">
            <span className="hsc-label">20+ Products Shipped</span>
            <span className="hsc-sub">SaaS · Mobile · AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
