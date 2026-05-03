import { cn } from '@/lib/utils';

type WordmarkProps = {
  className?: string;
  tone?: 'ink' | 'paper';
};

export function Wordmark({ className, tone = 'ink' }: WordmarkProps) {
  const color = tone === 'ink' ? 'text-[var(--color-ink)]' : 'text-[var(--color-paper)]';
  return (
    <a href="/" className={cn('group inline-flex items-center gap-2.5', className)} aria-label="Alphinix — home">
      <svg
        viewBox="0 0 32 32"
        className={cn('h-6 w-6', color)}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 26 L16 5 L27 26 M10 19 H22"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="square"
        />
        <circle cx="27" cy="6" r="2.5" fill="var(--color-accent-500)" />
      </svg>
      <span
        className={cn(
          'font-display text-[1.0625rem] font-bold tracking-[-0.02em]',
          color,
        )}
      >
        Alphinix
      </span>
    </a>
  );
}
