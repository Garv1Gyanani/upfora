import './TechBar.css';

const techs = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Python',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Redis',
  'GraphQL', 'Tailwind', 'Flutter', 'OpenAI', 'Stripe',
  'Firebase', 'Prisma', 'Vercel', 'Figma', 'Supabase',
];

export default function TechBar() {
  return (
    <section className="techbar">
      <div className="techbar-inner">
        <p className="techbar-tagline">
          Powered by OpenAI, React, Next.js, Flutter, AWS, Supabase, Stripe, and modern cloud infrastructure — everything we build ships production-grade.
        </p>
      </div>
      <div className="techbar-scroll">
        <div className="techbar-track left">
          {[...techs, ...techs].map((t, i) => (
            <span key={i} className="tc">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
