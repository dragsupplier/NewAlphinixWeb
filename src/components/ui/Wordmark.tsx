import { cn } from '@/lib/utils';

type WordmarkProps = {
  className?: string;
  tone?: 'ink' | 'paper';
};

export function Wordmark({ className, tone = 'ink' }: WordmarkProps) {
  const color = tone === 'ink' ? 'text-[var(--color-fg)]' : 'text-white';
  return (
    <a
      href="/"
      className={cn('group inline-flex items-center gap-2.5', className)}
      aria-label="Alphinix — home"
    >
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
          strokeLinejoin="miter"
        />
      </svg>
      <span
        className={cn(
          'font-display text-[17px] font-semibold tracking-[-0.018em]',
          color,
        )}
      >
        Alphinix
      </span>
    </a>
  );
}
