import type { ElementType, ReactNode } from 'react';
import { useReveal } from '@/lib/reveal';

type Props = {
  as?: ElementType;
  className?: string;
  delay?: number;
  children: ReactNode;
};

/**
 * Wraps a child block in a `[data-reveal]` element that fades + lifts in
 * when it crosses the viewport. Pair with the CSS in globals.css.
 */
export function Reveal({ as, className, delay, children }: Props) {
  const ref = useReveal<HTMLElement>();
  const Tag = (as ?? 'div') as ElementType;
  return (
    <Tag
      ref={ref as any}
      data-reveal=""
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
