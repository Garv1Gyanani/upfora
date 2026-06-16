import './Services.css';

const cells = [
  { span: 'span8', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: 'Business Websites', tags: ['Hotels','Resorts','Restaurants','Clinics','Law Firms'] },
  { span: 'span4', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>, title: 'AI Automations', tags: ['WhatsApp AI','Lead Qualify','Support Bot'] },
  { span: 'span6', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, title: 'Mobile Apps', tags: ['Booking','Loyalty Programs','Digital Ordering','Communities'] },
  { span: 'span6', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01"/></svg>, title: 'Internal Systems', tags: ['Custom CRM','Analytics Dashboards','Ops Pipelines'] },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header reveal">
        <div className="eyebrow">Outcomes Delivered</div>
        <h2 className="sec-title">What We <em>Build</em></h2>
        <p className="sec-sub">We engineer complete growth systems tailored to capture leads, automate workflows, and retain customers.</p>
      </div>

      <div className="bento">
        {cells.map((c, i) => (
          <div key={i} className={`bento-cell ${c.span} reveal ${i > 0 ? `d${i}` : ''}`}>
            {c.span === 'span8' && <div className="cell-glow" />}
            <div className="cell-icon">{c.icon}</div>
            <h3 className="cell-title">{c.title}</h3>
            {c.span === 'span8' && <div className="cell-tags-label">Industries We Help</div>}
            <div className="cell-tags">
              {c.tags.map(t => <span key={t} className="ctag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
