import { useEffect, useState } from 'react';

/**
 * Thin top-of-viewport progress bar that tracks how far the page is scrolled.
 * No external dependencies; uses RAF-throttled scroll events.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const next = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(next);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-[var(--color-brand-700)]"
      style={{ transform: `scaleX(${progress / 100})`, transformOrigin: 'left' }}
    />
  );
}
