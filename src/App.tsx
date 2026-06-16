import { useReveal } from './hooks/useReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProofStrip from './components/ProofStrip';
import USP from './components/USP';
import Services from './components/Services';
import TechBar from './components/TechBar';
import Projects from './components/Projects';
import Compact from './components/Compact';
import Industries from './components/Industries';
import Founder from './components/Founder';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <ProofStrip />
      <USP />
      <Services />
      <TechBar />
      <div className="credibility-strip">
        <span>20+ Products Built</span>
        <span className="cs-divider" />
        <span>AI · Apps · SaaS · Automation</span>
        <span className="cs-divider" />
        <span>Built for Healthcare, Hospitality, Education &amp; Legal</span>
      </div>
      <Projects />
      <Compact />
      <Industries />
      <Founder />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
