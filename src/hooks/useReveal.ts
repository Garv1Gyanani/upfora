import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    els.forEach((el) => obs.observe(el));

    // Fallback: make everything visible after 2s in case observer fails
    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add('visible'));
    }, 2000);

    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);
}
