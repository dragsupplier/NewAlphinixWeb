# Alphinix — Content Replacement Guide

This file is the single source of truth for **everything that is currently a placeholder** on the site. Work through it section by section. After replacement, run `pnpm build` to confirm nothing broke.

> **Search-and-replace tip:** Most repeated values can be fixed with a project-wide find-and-replace in your editor. Single-occurrence values are listed with their file path and approximate line number.

---

## 0. URGENT — fix the domain inconsistency first

The site mixes `@alphinix.com` and `@alphinix.in` in different places. **Decide one** and replace everywhere.

| Currently | Files |
|---|---|
| `hello@alphinix.com` | `src/components/layout/Footer.tsx` (line 75-76, 81), `src/routes/Contact.tsx` (213-214, 315, 350) |
| `hello@alphinix.in` | `src/components/layout/Header.tsx` (275, 279), `src/routes/ThankYou.tsx` (104, 110-111), `src/data/legalContent.ts` (multiple) |
| `alphinix.com` (in body text) | `src/data/legalContent.ts` (line 25, 87, 91) |

**Action:** project-wide replace `alphinix.com` → `alphinix.in` (or vice versa, your call).

---

## 1. Brand basics (one-time, single-file edits)

### 1.1 Page title + meta description — `index.html`
```
Line 7:  <meta name="theme-color" content="#0A0E27" />        ← change to your brand colour if needed
Line 9-11: <meta name="description" content="Alphinix is a Pune-based technology platform serving students, colleges, schools, businesses, and hiring teams across India." />
Line 12: <title>Alphinix — Technology, education, and hiring, built as one practice</title>
```
Replace title and description with your final brand line.
Add (optional but recommended): Open Graph + Twitter card meta tags for link previews.

### 1.2 Favicon — `public/favicon.svg`
Currently a tiny inline SVG. Replace with your real favicon (still SVG, 32×32 viewBox).

### 1.3 Logo wordmark — `public/alphinix-logo.svg` and `src/components/ui/Wordmark.tsx`
The wordmark is rendered inline in `Wordmark.tsx`. If your logo art changes, update it there. The standalone SVG file `public/alphinix-logo.svg` is also kept in sync — replace both.

---

## 2. Contact details (touched on every page via Header / Footer / Contact / Legal)

### 2.1 Email addresses
Every email below is currently fictional. Replace with the address that will receive real mail. **If you only have one address, point all of these at it.**

| Placeholder | Used for | Files |
|---|---|---|
| `hello@alphinix.in` | General | Header, Footer, ThankYou, Disclaimer (legal) |
| `students@alphinix.in` | Student support | `StudentSections.tsx:665` |
| `careers@alphinix.in` | Job applications | `Careers.tsx:300, 303`; `openRoles.ts` (7 entries) |
| `editorial@alphinix.in` | Blog pitches | `Blog.tsx:279-280` |
| `billing@alphinix.in` | Refunds, payments | `legalContent.ts` (Refund policy) |
| `legal@alphinix.in` | Terms / disclaimer queries | `LegalPage.tsx:216, 228`; `legalContent.ts` |
| `privacy@alphinix.in` | Privacy / cookies | `legalContent.ts` |
| `grievance@alphinix.in` | Complaints | `legalContent.ts` (Grievance) |
| `grievance-officer@alphinix.in` | Escalation | `legalContent.ts` (Grievance) |

### 2.2 Phone number — currently `+91 00000 00000` everywhere
Replace in:
- `src/components/layout/Header.tsx` line 267, 271
- `src/components/layout/Footer.tsx` line 81-82
- `src/components/sections/Hero.tsx` line 60
- `src/components/sections/student/StudentSections.tsx` line 666
- `src/routes/Contact.tsx` line 165, 223-224, 354

(Format: `tel:+91XXXXXXXXXX` for the `href`, display can be `+91 XXXXX XXXXX`.)

### 2.3 Postal address — currently `Pune, Maharashtra · India`
Used in:
- `Header.tsx:263`
- `Footer.tsx:69-70` ("Alphinix Headquarters" / "Pune, Maharashtra · India")
- `About.tsx:288`
- `Contact.tsx:232, 335`
- `legalContent.ts` (Privacy, Terms, Grievance — all reference "Pune, Maharashtra")
- `routes/students/StudentsHub.tsx:52`, `routes/colleges/CollegesHub.tsx:68`

Add the **full postal address** (street, area, city, state, PIN) to:
- Footer brand block
- Contact page address card
- Privacy policy "Contact" section
- Grievance redressal "Grievance Officer" section

### 2.4 Office hours — currently `Mon — Sat · 10:00–19:00 IST`
Used in:
- `src/components/sections/student/StudentSections.tsx:669`
- `src/routes/Contact.tsx:245` ("Office hours" section)

Update to your actual hours.

### 2.5 Company legal name — currently `Alphinix Technologies Private Limited`
Used in:
- `src/components/layout/Footer.tsx` (copyright line, ~line 198)
- `src/data/legalContent.ts` (Privacy "Who we are" + Postal address)

Replace with your real registered company name (and CIN if you want it visible).

---

## 3. Social media — currently all `href="#"`
File: `src/components/layout/Footer.tsx` lines 49-53.

```ts
const socials = [
  { label: 'LinkedIn',    href: '#', Icon: Linkedin },
  { label: 'Instagram',   href: '#', Icon: Instagram },
  { label: 'X (Twitter)', href: '#', Icon: Twitter },
  { label: 'YouTube',     href: '#', Icon: Youtube },
];
```
Replace each `href: '#'` with the real profile URL (or remove the entry if you do not have that platform).

---

## 4. Portal Login — currently all `href="#"`
File: `src/components/layout/Header.tsx` lines 180-184.
File: `src/data/nav.ts` lines 4-7 (footer mirror).

```ts
const PORTAL: PortalItem[] = [
  { label: 'Student LMS', desc: 'For learners enrolled in programmes.',   href: '#', icon: GraduationCap },
  { label: 'College ERP', desc: 'For partner colleges and institutes.',   href: '#', icon: Building2 },
  { label: 'Admin Panel', desc: 'For Alphinix operations and reviewers.', href: '#', icon: Settings2 },
];
```
Replace `href: '#'` with the actual portal URLs once those systems are deployed.

---

## 5. Form endpoints (none of the forms send anywhere yet)

| Form | File | What to change |
|---|---|---|
| **Contact form** | `src/routes/Contact.tsx` line 38 + line 96-97 | `action="#"` and the `handleSubmit` redirect — wire to your Apps Script / API endpoint, then redirect to `/thank-you`. |
| **Newsletter (Footer)** | `src/components/layout/Footer.tsx` line 168 | `onSubmit={(e) => e.preventDefault()}` — replace with a real subscribe handler (Mailchimp, Buttondown, or your Apps Script endpoint). |
| **Newsletter (Blog page)** | `src/routes/Blog.tsx` line 121 | Same as above. |
| **Newsletter (Resources page)** | `src/routes/Resources.tsx` line 246 | Same as above. |

---

## 6. Numeric placeholders — `XX`, `XX %`, `XX d`, `XXX students`, `INR XX–XX LPA`

These are intentional placeholders. Replace with your **real published numbers** only after you can defend each figure in writing.

### 6.1 About page — `src/routes/About.tsx`
- Line 82: `'XX +'` → "Students through programmes" total since founding
- Other metrics in the same `METRICS` array (read the full array in About.tsx around line 80-90)

### 6.2 Hiring hub — `src/routes/hiring/HiringHub.tsx`
- Line 9: `'XX d'` → Average time-to-shortlist
- Line 10: `'XX %'` → Average screen-to-offer rate

### 6.3 Hiring detail SLAs — `src/data/hiringDetails.ts`
~25 separate `XX days` / `XX %` / `XX hrs` / `XX / day` SLA values across 6 services (lines 31-35, 89-92, 147-151, 205-209, 263-265, 321-325). Each is a metric on a Hiring sub-service detail page. Replace each one with the real SLA you commit to.

### 6.4 Hiring salary band guide — `src/components/sections/hiring/HiringSignatures.tsx`
Lines 33-38: 18 cells of `'INR XX–XX LPA'` across L1 → L6 × Engineering / Product / Design.
Replace with your actual salary band ranges.

### 6.5 Colleges drive funnel — `src/components/sections/colleges/CollegeSignatures.tsx`
Lines 150-154: stage values like `'XXX students'`, `'XX % of pool'`, `'XX % screened'`.
Replace with the funnel percentages from a recent representative drive.

### 6.6 College detail bodies (timing windows) — `src/data/collegeDetails.ts`
- Line 77: `XX weeks before the campus drive window`
- Line 361: `XX months before the SSR submission window` / `XX months before the SAR window`
- Line 586: `XX–XX months from baseline to council approval`

Replace with actual lead-time numbers you stand behind.

### 6.7 Case studies — `src/data/caseStudies.ts`
Each case study has `outcomeMetric: 'XX %'` or `'XX d'` (lines 33, 64, 79, 94). Replace with the real engagement outcome metric for that case.

### 6.8 Thank-you reference — `src/routes/ThankYou.tsx` line 99
```ts
ALX-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 9000) + 1000)}
```
This is fine for cosmetic display, but if you wire the form to a backend, replace with the real submission ID returned by the API.

### 6.9 Effective date for legal documents — `src/data/legalContent.ts` line 16
```ts
const EFFECTIVE = '01 January 2026';
```
Update to the **actual effective date** when you publish the policies.

---

## 7. Leadership names — currently 4 generic placeholders
File: `src/routes/About.tsx` lines 51-77.

```
{ role: 'Founder & CEO',                  name: 'Founder' }
{ role: 'Head of Programmes',             name: 'Head of Programmes' }
{ role: 'Head of Hiring Partnerships',    name: 'Head of Hiring Partnerships' }
{ role: 'Head of Institutional Practice', name: 'Head of Institutional Practice' }
```
Replace `name` with the real person's name. Add a `bio` line if you want longer cards.

---

## 8. Per-page content blocks worth a closer review

Most page bodies are written generically and can ship as-is, but the lists below contain **example/placeholder org names and titles** you should review and either keep or replace with real ones.

### 8.1 Case studies — `src/data/caseStudies.ts`
5 case studies with placeholder `client` strings like _"Engineering college, Pune"_, _"Mid-market e-commerce"_. Either keep them generic (anonymised wins) or replace with real client names where you have written permission to use them.

### 8.2 Open roles — `src/data/openRoles.ts`
7 placeholder open roles. Edit the array to match what you are **actually hiring for** right now. Any role you do not need → delete its object from the array.

### 8.3 Webinars — `src/data/webinars.ts`
7 sessions with placeholder dates / hosts. Replace with your real upcoming and past webinars. Each entry has `date`, `time`, `host`, `duration`, `status: 'upcoming' | 'past'` — see file for shape.

### 8.4 Blog posts — `src/data/blogPosts.ts`
7 placeholder posts across 4 categories. Replace with actual published posts (or empty the array — the page will render gracefully with `featured` removed).

### 8.5 Resource library — `src/data/resourceLibrary.ts`
12 placeholder downloads grouped by segment (Students/Colleges/Schools/Businesses/Hiring). Each has `title`, `type`, `pageCount`, `downloadHref`. Replace `downloadHref: '#'` with the real PDF URL once each download exists.

### 8.6 Service detail bodies — long-form content per slug
Long-form content (overview, audience, prerequisites, modules, faqs) lives in:
- `src/data/studentServices.ts` — 7 student programmes
- `src/data/collegeDetails.ts` — 8 college services
- `src/data/schoolDetails.ts` — 6 school services
- `src/data/businessDetails.ts` — 7 business services
- `src/data/hiringDetails.ts` — 6 hiring services

The text is written generically and is **safe to ship**, but if you want product-specific accuracy (e.g. naming the LMS modules you actually deliver), edit each entry in these files.

---

## 9. Decisions still open (need product input, not just text)

These are not text replacements — they are decisions that affect what the site says.

1. **Refund policy specifics** — `src/data/legalContent.ts` (refund-policy section). Confirm:
   - Cooling-off window: currently 7 days
   - Pro-rated refund window: currently "before midway point", admin deduction 15 %
   - Resolution timeline: currently 14 working days
2. **Grievance Officer name + designation** — currently anonymised in legal section
3. **Cohort start months / programme calendar** — referenced abstractly throughout student programmes; if you publish a calendar, the cohorts page (currently removed per master plan) may need to come back as a section on `/students`.
4. **Logo "swoosh" colour** — currently brand-700. If the brand evolves, update `Wordmark.tsx`.
5. **Whether to keep / remove the cohort-calendar section in the Colleges signature** if you do not run cohorts.

---

## 10. Quick checklist before you ship

- [ ] Domain (alphinix.in vs .com) standardised
- [ ] All 9 email addresses pointed at real inboxes
- [ ] Real phone number in 6 places
- [ ] Real postal address in 6 places
- [ ] Real office hours
- [ ] Real social media URLs (or entries removed)
- [ ] Real Portal Login URLs once portals are live
- [ ] Contact form wired to real backend → /thank-you
- [ ] Newsletter form wired to real backend (3 places)
- [ ] All `XX` numeric placeholders replaced with real figures
- [ ] Effective date on legal pages updated
- [ ] Leadership names + bios in About
- [ ] Open roles array matches what you are actually hiring for
- [ ] Webinars / blog posts / resources arrays populated with real items
- [ ] Logo + favicon assets are final
- [ ] index.html title + description tuned for SEO
- [ ] OG / Twitter card meta tags added (recommended)
- [ ] `pnpm build` runs clean after all edits

---

*Generated against the state of branch `claude/design-startup-ui-Z7qkX` on 05 May 2026. After significant content rewrites, regenerate by re-running the placeholder grep across `src/`.*
