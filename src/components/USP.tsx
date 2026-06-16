import './USP.css';

const steps = [
  { n: '01', title: 'We Find Opportunities', desc: 'We audit your current web presence or team workflow to pinpoint bottlenecks and growth gaps.' },
  { n: '02', title: 'We Build A Mockup', desc: 'We design and construct a functional, working demo of your custom solution — fully at our cost.' },
  { n: '03', title: 'We Show You Results', desc: 'You review the actual working web app or automation flow before a single rupee changes hands.' },
  { n: '04', title: 'You Decide', desc: 'Love it? We deploy. Don\'t? Walk away with zero obligations. The risk is entirely ours.' },
];

export default function USP() {
  return (
    <section className="usp" id="usp">
      <div className="usp-left reveal">
        <div className="eyebrow">Our Philosophy</div>
        <h2>We Don't Send<br />Proposals. <em>We Build.</em></h2>
        <p>Most agencies ask for money before showing results. We analyze your business, identify opportunities, and ship a working concept of your software before you commit to anything.</p>
        <a href="#contact" className="btn-p">Get Your Free Demo</a>
      </div>

      <div className="usp-steps reveal d1">
        {steps.map((s) => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
