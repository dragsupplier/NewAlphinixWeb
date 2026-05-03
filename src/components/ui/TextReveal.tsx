type Props = {
  text: string;
  /** ms between each word's animation start */
  stagger?: number;
  /** initial seconds delay before first word */
  delay?: number;
  className?: string;
};

/**
 * Splits a string into words and animates each one rising into place
 * with a per-word stagger. Lightweight CSS-only animation.
 */
export function TextReveal({ text, stagger = 70, delay = 0, className }: Props) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            className="word-rise inline-block"
            style={{ animationDelay: `${delay + (i * stagger) / 1000}s` }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </span>
  );
}
