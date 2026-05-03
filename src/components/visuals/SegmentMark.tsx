/**
 * Custom geometric marks per segment. Drawn as minimal SVG line art —
 * intentionally not Lucide icons or stock pictograms.
 * Each mark is 32×32, stroke 1.5, currentColor.
 */
import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

const base = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'square' as const,
  strokeLinejoin: 'miter' as const,
};

export function MarkStudents(p: Props) {
  // Trajectory — an upward curve with a milestone dot
  return (
    <svg {...base} {...p}>
      <path d="M5 25 Q 16 4, 27 18" />
      <circle cx="27" cy="18" r="2.5" fill="currentColor" stroke="none" />
      <line x1="5" y1="27" x2="27" y2="27" opacity="0.4" />
    </svg>
  );
}

export function MarkColleges(p: Props) {
  // Pillars — stylised colonnade
  return (
    <svg {...base} {...p}>
      <line x1="4" y1="9" x2="28" y2="9" />
      <line x1="4" y1="27" x2="28" y2="27" />
      <line x1="9" y1="9" x2="9" y2="27" />
      <line x1="16" y1="9" x2="16" y2="27" />
      <line x1="23" y1="9" x2="23" y2="27" />
      <line x1="6" y1="6" x2="26" y2="6" strokeWidth="2" />
    </svg>
  );
}

export function MarkSchools(p: Props) {
  // Concentric squares — building blocks / nested learning
  return (
    <svg {...base} {...p}>
      <rect x="4" y="4" width="24" height="24" />
      <rect x="10" y="10" width="12" height="12" />
      <line x1="4" y1="4" x2="10" y2="10" opacity="0.5" />
      <line x1="28" y1="4" x2="22" y2="10" opacity="0.5" />
      <line x1="4" y1="28" x2="10" y2="22" opacity="0.5" />
      <line x1="28" y1="28" x2="22" y2="22" opacity="0.5" />
    </svg>
  );
}

export function MarkBusinesses(p: Props) {
  // Ascending bars — system / signal
  return (
    <svg {...base} {...p}>
      <line x1="4" y1="27" x2="28" y2="27" />
      <line x1="8" y1="27" x2="8" y2="20" strokeWidth="2.5" />
      <line x1="14" y1="27" x2="14" y2="14" strokeWidth="2.5" />
      <line x1="20" y1="27" x2="20" y2="9" strokeWidth="2.5" />
      <line x1="26" y1="27" x2="26" y2="4" strokeWidth="2.5" />
    </svg>
  );
}

export function MarkHiring(p: Props) {
  // Two arrows meeting — match / handshake
  return (
    <svg {...base} {...p}>
      <line x1="4" y1="16" x2="14" y2="16" />
      <line x1="14" y1="11" x2="14" y2="21" />
      <line x1="18" y1="11" x2="18" y2="21" />
      <line x1="18" y1="16" x2="28" y2="16" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const segmentMarks = {
  students: MarkStudents,
  colleges: MarkColleges,
  schools: MarkSchools,
  businesses: MarkBusinesses,
  hiring: MarkHiring,
} as const;

export type SegmentSlug = keyof typeof segmentMarks;
