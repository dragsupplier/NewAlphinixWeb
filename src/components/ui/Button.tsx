import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'ink' | 'outline' | 'ghost' | 'accent';
type Size = 'md' | 'lg';

type Common = {
  variant?: Variant;
  size?: Size;
  trailingArrow?: boolean;
  children: ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  ink: 'bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-ink-soft)]',
  accent: 'bg-[var(--color-accent-500)] text-[var(--color-ink)] hover:bg-[var(--color-accent-600)] hover:text-[var(--color-paper)]',
  outline:
    'bg-transparent text-[var(--color-ink)] ring-1 ring-inset ring-[var(--color-ink)]/15 hover:ring-[var(--color-ink)]/40',
  ghost: 'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-ink)]/[0.04]',
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-5 text-[0.9375rem]',
  lg: 'h-12 px-6 text-[1rem]',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-[8px] font-medium tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2';

export function Button({
  variant = 'ink',
  size = 'md',
  trailingArrow,
  children,
  className,
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
      {trailingArrow && <ArrowUpRight className="h-4 w-4" strokeWidth={2} />}
    </button>
  );
}

export function ButtonLink({
  variant = 'ink',
  size = 'md',
  trailingArrow,
  children,
  className,
  ...props
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
      {trailingArrow && <ArrowUpRight className="h-4 w-4" strokeWidth={2} />}
    </a>
  );
}
