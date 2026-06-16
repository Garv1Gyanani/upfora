import './Industries.css';

const industries = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>, title: 'Resorts & Hotels', items: ['Direct web booking engines','OTA commission reduction','WhatsApp AI rate quoting','Guest management systems'] },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h3a1 1 0 0 0 1-1z"/></svg>, title: 'Restaurants', items: ['QR menu ordering, zero fees','Direct pickup & delivery','WhatsApp reservations','Re-engagement automation'] },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, title: 'Clinics & Health Tech', items: ['Appointment scheduling','Automated patient followups','Secure document portals','Prescription & billing'] },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Lawyers & Legal Tech', items: ['Consultation booking','Secure document portals','Client lifecycle CRM','Case status bots'] },
];

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="section-header reveal">
        <div className="eyebrow">Who We Work With</div>
        <h2 className="sec-title">Industries We <em>Serve</em></h2>
        <p className="sec-sub">Clear, results-driven frameworks built around the customer journey of your specific sector.</p>
      </div>

      <div className="ind-grid">
        {industries.map((ind, i) => (
          <div key={i} className={`ind-card reveal ${i > 0 ? `d${i}` : ''}`}>
            <div className="ind-icon">{ind.icon}</div>
            <div className="ind-title">{ind.title}</div>
            <ul className="ind-list">
              {ind.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
