import { cn } from '@/lib/utils';

type WordmarkProps = {
  className?: string;
  tone?: 'ink' | 'paper';
};

export function Wordmark({ className, tone = 'ink' }: WordmarkProps) {
  // Dark surfaces (footer, dark hero) keep the white SVG mark + wordmark.
  if (tone === 'paper') {
    return (
      <a
        href="/"
        className={cn('group inline-flex items-center gap-2.5', className)}
        aria-label="Alphinix — home"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6 text-white"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 26 L16 5 L27 26 M10 19 H22"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="square"
          />
        </svg>
        <span className="font-display text-[17px] font-semibold tracking-[-0.018em] text-white">
          Alphinix
        </span>
      </a>
    );
  }

  // Light surfaces (header) use the supplied logo image.
  return (
    <a
      href="/"
      className={cn('inline-flex items-center', className)}
      aria-label="Alphinix — home"
    >
      <img
        src="/alphinix-logo.png"
        alt="Alphinix"
        className="h-7 md:h-8 w-auto select-none"
        draggable={false}
      />
    </a>
  );
}
