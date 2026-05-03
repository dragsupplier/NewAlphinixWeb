import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'brand' | 'ink' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

type Common = {
  variant?: Variant;
  size?: Size;
  trailingArrow?: boolean;
  children: ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  brand:
    'bg-[var(--color-brand-700)] text-white hover:bg-[var(--color-brand-800)] shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)]',
  ink:
    'bg-[var(--color-fg)] text-white hover:bg-[var(--color-fg-2)]',
  outline:
    'bg-[var(--color-bg)] text-[var(--color-fg)] ring-1 ring-inset ring-[var(--color-line-2)] hover:bg-[var(--color-canvas)]',
  ghost:
    'bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-canvas)]',
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-[13.5px]',
  lg: 'h-12 px-5 text-[14.5px]',
};

const base =
  'group inline-flex items-center justify-center gap-1.5 rounded-[6px] font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2';

export function Button({
  variant = 'brand',
  size = 'md',
  trailingArrow,
  children,
  className,
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
      {trailingArrow && (
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2.5}
        />
      )}
    </button>
  );
}

export function ButtonLink({
  variant = 'brand',
  size = 'md',
  trailingArrow,
  children,
  className,
  ...props
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
      {trailingArrow && (
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2.5}
        />
      )}
    </a>
  );
}
