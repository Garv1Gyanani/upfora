import './Process.css';

const steps = [
  { n: 'STEP 01', title: 'Request Demo', desc: 'Brief us on your business goals and current operations bottlenecks.' },
  { n: 'STEP 02', title: 'We Build', desc: 'A custom working preview, built within days — completely at our cost.' },
  { n: 'STEP 03', title: 'Launch', desc: 'You approve, we configure servers, integrate payments, and go live.' },
  { n: 'STEP 04', title: 'Scale', desc: 'Ongoing maintenance, support, and updates to keep operations smooth.' },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="section-header reveal" style={{marginBottom:0}}>
        <div className="eyebrow">How It Works</div>
        <h2 className="sec-title">Request to <em>deployment.</em></h2>
      </div>

      <div className="process-steps">
        {steps.map((s, i) => (
          <div key={i} className={`ps reveal ${i > 0 ? `d${i}` : ''}`}>
            <div className="ps-n">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
