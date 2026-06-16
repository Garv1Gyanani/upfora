import './Compact.css';

const tags = ['FireOps','TransferXYZ','NutriCore','Vocels','Atelier Noir','Taske','Programming Tails','Worth The Meeting','Dil Se'];
const domains = ['Ride Hailing','Legal Tech','Health Tech','OTT Streaming','Enterprise Systems','Education & AI'];
const contributed = ['Urben Drive & LexFlow','Zendo & PulseFlow','Legis & NovaLearn','StreamVibe & Vecta','NexusERP & SalesFlow'];

export default function Compact() {
  return (
    <section className="compact-grid" id="experience">
      <div className="reveal">
        <div className="cs-eyebrow">Track Record</div>
        <h3 className="cs-title">Products & Platforms Built</h3>
        <div className="tag-cloud">
          {tags.map(t => <span key={t} className="p-tag">{t}</span>)}
        </div>
      </div>

      <div className="reveal d1">
        <div className="cs-eyebrow">Professional Experience</div>
        <h3 className="cs-title">Experience Across Industries</h3>
        <div className="exp-grid">
          <div className="exp-col">
            <h4>Domains</h4>
            <ul className="exp-list">
              {domains.map(d => <li key={d}>{d}</li>)}
            </ul>
          </div>
          <div className="exp-col">
            <h4>Contributed To</h4>
            <ul className="exp-list">
              {contributed.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
