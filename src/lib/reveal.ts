import { useEffect, useRef } from 'react';

/**
 * useReveal — observes an element and toggles `data-reveal-visible="true"`
 * once it crosses the viewport threshold. Pair with the `[data-reveal]`
 * CSS rule in globals.css.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      el.dataset.revealVisible = 'true';
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealVisible = 'true';
            io.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return ref;
}
