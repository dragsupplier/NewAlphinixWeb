/**
 * Placeholder image URLs.
 * Source: Unsplash (free for commercial use).
 * REPLACE EACH ENTRY with Alphinix's own photography when available.
 *
 * Recommended replacement specs:
 *  - Hero, signature: ≥ 1920×1280, 16:9 or 3:2, JPG (Q80) or AVIF
 *  - Audience tiles:  ≥ 1200×900, 4:3, JPG/AVIF
 *  - Resource cards:  ≥ 1200×800, 3:2, JPG/AVIF
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const heroImage = u('photo-1522202176988-66273c2fd55f'); // students collaborating

export const segmentImages: Record<string, string> = {
  students: u('photo-1523240795612-9a054b0db644'),
  colleges: u('photo-1562774053-701939374585'),
  schools: u('photo-1503676260728-1c00da094a0b'),
  businesses: u('photo-1522071820081-009f0129c71c'),
  hiring: u('photo-1521791136064-7986c2920216'),
};

export const signatureImageA = u('photo-1531497865144-0464ef8fb9a9'); // collaborative training
export const signatureImageB = u('photo-1581091226825-a6a2a5aee158'); // technology / lab

export const resourceImages = [
  u('photo-1517245386807-bb43f82c33c4', 1200),
  u('photo-1531482615713-2afd69097998', 1200),
  u('photo-1573164713988-8665fc963095', 1200),
];

export const ctaImage = u('photo-1573497019940-1c28c88b4f3e', 1400);
