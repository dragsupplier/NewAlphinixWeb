import { cn } from '@/lib/utils';

type WordmarkProps = {
  className?: string;
  tone?: 'ink' | 'paper';
};

export function Wordmark({ className, tone = 'ink' }: WordmarkProps) {
  const textColor = tone === 'ink' ? 'var(--color-fg)' : '#ffffff';
  const accentColor = tone === 'ink' ? 'var(--color-brand-700)' : 'var(--color-brand-300)';

  return (
    <a
      href="/"
      className={cn('inline-flex items-center', className)}
      aria-label="Alphinix — home"
    >
      <svg
        viewBox="0 0 540 140"
        className="h-7 md:h-8 w-auto select-none"
        aria-hidden="true"
      >
        <text
          x="2"
          y="105"
          style={{
            fontFamily: 'var(--font-display), Inter Tight, system-ui, sans-serif',
            fontSize: '118px',
            fontWeight: 700,
            letterSpacing: '-4px',
          }}
          fill={textColor}
        >
          Alphinix
        </text>
        <path
          d="M 8 110 C 38 130, 80 130, 122 110 C 138 102, 150 98, 162 96"
          stroke={accentColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 425 38 C 458 10, 495 6, 524 22 C 534 28, 539 34, 540 40"
          stroke={accentColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </a>
  );
}
