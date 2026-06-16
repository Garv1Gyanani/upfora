import { useState, type MouseEvent } from 'react';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  metric: string;
  metricLabel: string;
  timeline: string;
  industry: string;
  problem: string;
  built: string[];
  tech: string[];
  whyMatters: string;
  ac: string;
  stats: { value: string; label: string; bar: number }[];
}

const P: Project[] = [
  {
    id:'ateliernoir', title:'Atelier Noir', subtitle:'Full E-Commerce Ecosystem',
    img:'/projectimages/ecomemrce.jpeg', metric:'Full', metricLabel:'Store + CMS',
    timeline:'8 Weeks', industry:'Retail Tech', ac:'245,197,66',
    problem:'E-commerce needs custom checkout, coupon architecture, and product loading integrated with a private admin CMS.',
    built:['Image-optimized customer storefront','Admin CMS for product & inventory','Dynamic cart & secure checkout','Coupon engines & tax calculations','Order tracking & analytics reports'],
    tech:['Next.js','Payment Gateway','Database Management','CMS Architecture'],
    whyMatters:'Proves capacity for transaction-heavy engines, payment systems, and operational dashboards.',
    stats:[{value:'200+',label:'Products Live',bar:70},{value:'99%',label:'Checkout Success',bar:99},{value:'2.1s',label:'Page Load',bar:80}]
  },
  {
    id:'programmingtails', title:'Programming Tails', subtitle:'Gamified Learning Platform',
    img:'/projectimages/programmingtails.jpeg', metric:'AI', metricLabel:'Tutor Built',
    timeline:'6 Weeks', industry:'EdTech', ac:'61,224,160',
    problem:'Technical education suffers from low completion rates when delivered through static, non-interactive tutorials.',
    built:['Gamified learning paths with XP & rewards','Interactive code editors in learning cards','Global leaderboard & profile progression','Personalized AI tutoring assistant','Study notes & educational mini-games'],
    tech:['React','Next.js','AI Integrations','Firebase'],
    whyMatters:'Shows ability to build engagement systems, interactive dashboards, and AI-powered learning UX.',
    stats:[{value:'85%',label:'Completion Rate',bar:85},{value:'50+',label:'Learning Paths',bar:65},{value:'4.8★',label:'User Rating',bar:96}]
  },
  {
    id:'taske', title:'Taske', subtitle:'Local Service Marketplace',
    img:'/projectimages/taske.jpeg', metric:'Live', metricLabel:'Booking',
    timeline:'7 Weeks', industry:'Gig Economy', ac:'82,204,244',
    problem:'Matching professionals with consumers requires complex scheduling, trust validation, and real-time coordination.',
    built:['Two-sided marketplace discovery flow','Real-time messaging with push notifications','Booking & appointment scheduling','Rating & reviews framework','Professional verification & onboarding'],
    tech:['Flutter','Firebase','Realtime Database','Notification Systems'],
    whyMatters:'Demonstrates marketplace architecture, booking logic, real-time sync, and multi-user databases.',
    stats:[{value:'5K+',label:'Services Listed',bar:70},{value:'<30s',label:'Match Time',bar:90},{value:'200+',label:'Providers',bar:65}]
  },
  {
    id:'nutricore', title:'NutriCore', subtitle:'Digital Health & Nutrition Platform',
    img:'/projectimages/nutrcore.jpeg', metric:'4.8★', metricLabel:'User Rating',
    timeline:'6 Weeks', industry:'Digital Health', ac:'255,107,129',
    problem:'Health platforms require mobile-first dashboards, habit building, and cross-device fitness analytics.',
    built:['Personalized nutrition & meal planners','Fitness tracking with progress visuals','Wellness content hub & media','Subscription paywalls & onboarding','Habit tools with push reminders'],
    tech:['Flutter','Firebase','Health Tracking Systems'],
    whyMatters:'Shows expertise in cross-platform mobile dev, subscriptions, and consumer health design.',
    stats:[{value:'4.8★',label:'App Rating',bar:96},{value:'10K+',label:'Active Users',bar:75},{value:'92%',label:'Retention',bar:92}]
  },
  {
    id:'vocels', title:'Vocels', subtitle:'AI Text-to-Speech Platform',
    img:'/projectimages/vocels.jpeg', metric:'300+', metricLabel:'AI Voices',
    timeline:'6 Weeks', industry:'AI & Media', ac:'193,130,255',
    problem:'Creators struggle to generate natural, multilingual AI voices without expensive studios or robotic outputs.',
    built:['300+ voice speech generation engine','Tone, speed, pitch & emphasis controls','Multi-language transcription support','Commercial audio player with MP3 export','Voice filtering, search & categories'],
    tech:['Microsoft Neural Voices','AI Speech APIs','Next.js','TypeScript'],
    whyMatters:'Demonstrates AI integration, real-time media processing, premium UX, and API orchestration.',
    stats:[{value:'300+',label:'Neural Voices',bar:90},{value:'40+',label:'Languages',bar:75},{value:'<2s',label:'Generation Time',bar:95}]
  },
  {
    id:'transferxyz', title:'TransferXYZ', subtitle:'High-Performance File Sharing Platform',
    img:'/projectimages/transferxyz.jpeg', metric:'E2E', metricLabel:'Encrypted',
    timeline:'4 Weeks', industry:'Cloud Infra', ac:'94,174,255',
    problem:'Standard file-sharing falls short on privacy, multi-gigabyte transfers, developer APIs, and cost-effective hosting.',
    built:['Chunked large file upload system','End-to-end client-side encryption','Configurable link expiry & tracking','Developer API keys & webhooks','Scalable MinIO object storage'],
    tech:['Next.js','TypeScript','tRPC','Prisma','MinIO','TailwindCSS'],
    whyMatters:'Shows mastery of file infrastructure, storage optimization, E2E security, and high-performance backends.',
    stats:[{value:'10GB',label:'Max File Size',bar:85},{value:'E2E',label:'Encryption',bar:100},{value:'500+',label:'API Consumers',bar:70}]
  },
  {
    id:'fireops', title:'FireOps', subtitle:'Advanced Firebase Operations Platform',
    img:'/projectimages/fireops.jpeg', metric:'3×', metricLabel:'Faster Ops',
    timeline:'5 Weeks', industry:'Developer Tools', ac:'244,174,82',
    problem:'Firebase administration is slow and fragmented. Teams lack SQL-style querying, relationship visualization, and safe AI-assisted schema migrations.',
    built:['Firestore collection & document explorer','SQL-style querying engine for Firestore','Schema relationship visualization','AI-assisted migrations & automated backups','Multi-project credential vault & query logs'],
    tech:['Firebase','Firestore','Next.js','TypeScript','Node.js','TailwindCSS'],
    whyMatters:'Proves expertise in complex SaaS, developer tooling, database systems, and AI-assisted automation.',
    stats:[{value:'3×',label:'Faster Operations',bar:95},{value:'12K',label:'Queries Processed',bar:80},{value:'99.9%',label:'Uptime SLA',bar:99}]
  }
];

const caps = [
  {icon:'💻',t:'SaaS',n:3},{icon:'🤖',t:'AI',n:2},{icon:'🛠️',t:'Dev Tools',n:2},
  {icon:'🛒',t:'E-commerce',n:1},{icon:'🎓',t:'Education',n:1},{icon:'❤️',t:'Health',n:1},
  {icon:'🤝',t:'Marketplaces',n:1},{icon:'📱',t:'Mobile',n:2},{icon:'📊',t:'Dashboards',n:4},
  {icon:'📝',t:'CMS',n:2},{icon:'💬',t:'Chat',n:1},{icon:'📁',t:'File Infra',n:2},
];

export default function Projects() {
  const [active, setActive] = useState(P[0]);
  const [fading, setFading] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const pick = (p: Project) => {
    if (p.id === active.id) return;
    setFading(true);
    setTimeout(() => {
      setActive(p);
      setAnimKey(k => k + 1);
      setFading(false);
    }, 280);
  };

  const spotlight = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section className="proj" id="projects">
      {/* BG */}
      <div className="proj-lines" />
      <div className="proj-orb proj-orb-a" style={{'--oc':active.ac} as React.CSSProperties} />
      <div className="proj-orb proj-orb-b" />

      {/* Header */}
      <div className="proj-hdr reveal">
        <div className="eyebrow">Proof of Capability</div>
        <h2 className="sec-title">Selected Products &amp; <em>Systems</em></h2>
        <p className="sec-sub">From SaaS platforms and AI tools to marketplaces and mobile apps — products we designed, built, and launched across industries.</p>
      </div>

      {/* Selector */}
      <div className="proj-strip-wrap reveal d1">
        <div className="proj-strip">
          {P.map(p => (
            <button key={p.id}
              className={`ps-btn ${active.id===p.id ? 'sel' : ''}`}
              onClick={() => pick(p)}
              style={{'--ac':p.ac} as React.CSSProperties}>
              <img src={p.img} alt="" className="ps-thumb" loading="lazy" />
              <div className="ps-txt">
                <span className="ps-name">{p.title}</span>
                <span className="ps-ind">{p.industry}</span>
              </div>
              {active.id===p.id && <div className="ps-glow-bar" />}
            </button>
          ))}
        </div>
      </div>

      {/* SHOWCASE */}
      <div className={`sc ${fading ? 'sc-out' : ''}`} key={animKey}
           style={{'--ac':active.ac} as React.CSSProperties}>

        {/* Left — Image */}
        <div className="sc-left">
          <div className="sc-img-border" />
          <div className="sc-img-box">
            <img src={active.img} alt={active.title} />
            <div className="sc-img-fade" />
            <div className="sc-img-shimmer" />
            {/* Large metric overlay */}
            <div className="sc-big-metric">
              <span className="sc-bm-val">{active.metric}</span>
              <span className="sc-bm-lbl">{active.metricLabel}</span>
            </div>
          </div>
          {/* Floating cards */}
          <div className="sc-fl sc-fl-1">
            <span className="sc-fl-ico">⚡</span>
            <div className="sc-fl-body">
              <span className="sc-fl-v">{active.timeline}</span>
              <span className="sc-fl-l">Delivery</span>
            </div>
          </div>
          <div className="sc-fl sc-fl-2">
            <span className="sc-fl-ico">🏷️</span>
            <div className="sc-fl-body">
              <span className="sc-fl-v">{active.industry}</span>
              <span className="sc-fl-l">Industry</span>
            </div>
          </div>
        </div>

        {/* Right — Terminal */}
        <div className="sc-term">
          <div className="sc-term-shimmer" />

          {/* Title bar */}
          <div className="term-bar">
            <div className="term-dots"><span/><span/><span/></div>
            <span className="term-path">case-study/{active.id}</span>
            <span className="term-live">● Live</span>
          </div>

          {/* Body */}
          <div className="term-body">
            <div className="tb-head">
              <h3>{active.title}</h3>
              <span className="tb-badge">{active.industry}</span>
            </div>
            <p className="tb-sub">{active.subtitle}</p>

            {/* Metrics */}
            <div className="tb-metrics">
              {active.stats.map((s, i) => (
                <div key={i} className="tb-m-card">
                  <span className="tb-m-val">{s.value}</span>
                  <span className="tb-m-lbl">{s.label}</span>
                  <div className="tb-m-track">
                    <div className="tb-m-fill"
                      style={{'--w':`${s.bar}%`, animationDelay:`${0.4+i*0.15}s`} as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge */}
            <div className="tb-sec">
              <h4><span className="tb-ico">⚠️</span> The Challenge</h4>
              <p>{active.problem}</p>
            </div>

            {/* Built */}
            <div className="tb-sec">
              <h4><span className="tb-ico">🛠️</span> What Was Built</h4>
              <ul className="tb-list">
                {active.built.map((f, i) => (
                  <li key={i}><span className="tb-chk">✓</span>{f}</li>
                ))}
              </ul>
            </div>

            {/* Tech */}
            <div className="tb-sec">
              <h4><span className="tb-ico">⚙️</span> Tech Stack</h4>
              <div className="tb-chips">
                {active.tech.map((t, i) => <span key={i} className="tb-chip">{t}</span>)}
              </div>
            </div>

            {/* Value */}
            <div className="tb-value">
              <span className="tb-val-tag">⭐ Why It Matters</span>
              <p>{active.whyMatters}</p>
            </div>

            <a href="#contact" className="tb-cta">Discuss a Similar Build →</a>
          </div>
        </div>
      </div>

      {/* CAPABILITIES */}
      <div className="proj-cap reveal">
        <div className="pc-hdr">
          <span className="eyebrow">Expertise Breadth</span>
          <h3 className="sec-title">12 System Patterns. <em>One Studio.</em></h3>
        </div>
        <div className="cap-grid">
          {caps.map((c, i) => (
            <div key={i} className="cap-c" onMouseMove={spotlight}>
              <div className="cap-c-spot" />
              <span className="cap-c-ico">{c.icon}</span>
              <span className="cap-c-t">{c.t}</span>
              <span className="cap-c-n">{c.n} project{c.n>1?'s':''}</span>
            </div>
          ))}
        </div>

        <div className="cap-cta">
          <div className="cap-cta-orb" />
          <div className="cap-cta-grid" />
          <div className="cap-cta-inner">
            <span className="cap-cta-tag">The Client Takeaway</span>
            <blockquote>"If Upfora can design, build, and launch all of these systems — they can probably build mine too."</blockquote>
            <a href="#contact" className="btn-p">Launch Your Project →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
