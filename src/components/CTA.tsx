import './CTA.css';

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-glow" />
      <div className="eyebrow reveal" style={{justifyContent:'center',marginBottom:'1.5rem'}}>Zero Upfront Commitment</div>
      <h2 className="reveal d1">Get Your Free<br /><em>Custom Demo</em></h2>
      <p className="reveal d2">No contracts. No upfront costs. We build a functional preview first — you only pay if you decide to proceed.</p>
      <div className="cta-btns reveal d3">
        <a href="https://wa.me/918890532745" className="btn-p">WhatsApp Us</a>
        <a href="mailto:hello@upfora.com" className="btn-g">hello@upfora.com</a>
      </div>
      <div className="cta-note reveal d4">We typically respond within 4 hours.</div>
    </section>
  );
}
