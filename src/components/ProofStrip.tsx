import './ProofStrip.css';

const items = [
  { n: '20+', l: 'Products Shipped' },
  { n: 'Full-Stack', l: 'Web · Mobile · AI' },
  { n: '6 Industries', l: 'Served & Deployed' },
  { n: 'Zero Upfront', l: 'Demo Built First' },
];

export default function ProofStrip() {
  return (
    <div className="proof-strip">
      <div className="proof-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="proof-item">
            <span className="proof-n">{item.n}</span>
            <span className="proof-sep">·</span>
            <span className="proof-l">{item.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
