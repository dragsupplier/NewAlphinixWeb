export type LegalSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type LegalPage = {
  slug: string;
  kicker: string;
  title: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
};

const EFFECTIVE = '01 January 2026';

export const legalPages: Record<string, LegalPage> = {
  'privacy-policy': {
    slug: 'privacy-policy',
    kicker: 'Legal · Privacy',
    title: 'Privacy policy',
    effectiveDate: EFFECTIVE,
    intro:
      'This policy explains what information Alphinix collects, why it is collected, how it is used, and the choices you have. It applies to alphinix.com, the linked portals, and to any engagement we run with students, colleges, schools, businesses, or hiring teams.',
    sections: [
      {
        heading: 'Who we are',
        body: 'Alphinix Technologies Private Limited is a company registered in India with its principal office in Pune, Maharashtra. References to "Alphinix", "we", "us", or "our" in this policy mean that company.',
      },
      {
        heading: 'Information we collect',
        body: 'We collect information in three ways: information you provide, information generated as you use our services, and information from third parties where you have authorised the sharing.',
        bullets: [
          'Information you provide — name, email address, phone, college or company name, year of study, role, and any free-text you write into a form on our site.',
          'Information from your use of our services — pages visited, links clicked, approximate location derived from IP, browser type, device type, and timestamps.',
          'Information from authorised third parties — for example, college placement offices that share student lists with us under a written agreement.',
        ],
      },
      {
        heading: 'Why we collect it',
        body: 'We use information for a small set of clearly-defined purposes. We do not sell personal data and we do not use it for advertising profiling.',
        bullets: [
          'To respond to enquiries, schedule conversations, and route applications to the right cohort or pipeline.',
          'To deliver the programme or engagement you have signed up for, including issuing credentials.',
          'To improve site reliability, debug errors, and understand which pages are useful.',
          'To meet legal, accounting, or audit obligations applicable to a registered Indian company.',
        ],
      },
      {
        heading: 'How long we keep it',
        body: 'Enquiry records are retained for up to 24 months from the last interaction. Programme records, credentials, and engagement contracts are retained for the period required by Indian tax and accounting law, which is currently eight financial years from the close of the financial year in which the engagement ended.',
      },
      {
        heading: 'Your rights',
        body: 'You can request a copy of the personal data we hold about you, ask us to correct it, or ask us to delete it where we are not legally required to keep it. Write to privacy@alphinix.in with the request. We respond within 30 days.',
      },
      {
        heading: 'Sharing',
        body: 'We share information only with parties that need it to deliver the service you have signed up for — for example, with a partner college when we are running a programme on their campus, or with a hiring company when we forward your shortlisted profile. We do not share data with advertisers or data brokers.',
      },
      {
        heading: 'Security',
        body: 'We protect personal data with access controls, encryption in transit, encrypted backups, and a documented incident-response process. No system is perfectly secure; if a breach occurs we will notify affected users and the relevant Indian authority within 72 hours of confirming the incident.',
      },
      {
        heading: 'Cookies',
        body: 'See the cookie policy at /cookie-policy for details on which cookies we set, why, and how to control them.',
      },
      {
        heading: 'Changes',
        body: 'We update this policy when our practices change. The effective date at the top of the page reflects the most recent material update. Substantive changes are announced by email to active users at least 30 days before they take effect.',
      },
      {
        heading: 'Contact',
        body: 'Questions, requests, or concerns: privacy@alphinix.in. Postal address: Alphinix Technologies Private Limited, Pune, Maharashtra, India.',
      },
    ],
  },

  'terms-of-service': {
    slug: 'terms-of-service',
    kicker: 'Legal · Terms',
    title: 'Terms of service',
    effectiveDate: EFFECTIVE,
    intro:
      'These terms govern your use of alphinix.com, the connected portals, and any engagement you enter into with Alphinix. Reading them is a condition of using the site.',
    sections: [
      {
        heading: 'Acceptance',
        body: 'By using alphinix.com, submitting a form, enrolling in a programme, or signing an engagement letter, you accept these terms in full. If you do not accept the terms, do not use the site or the services.',
      },
      {
        heading: 'Eligibility',
        body: 'You must be at least 16 years old to submit information through this site. If you are under 18, a parent or legal guardian must approve the submission. Programmes for school students are contracted with the school, not with the student directly.',
      },
      {
        heading: 'Account and access',
        body: 'Where a service requires an account, you are responsible for keeping the credentials confidential. Notify us immediately if an account is compromised. We may suspend access where the terms have been breached or where there is evidence of misuse.',
      },
      {
        heading: 'Programme and engagement scope',
        body: 'The scope of every programme and engagement is set in the proposal, statement of work, or enrolment letter that accompanies it. These terms cover the relationship in general; the specific deliverables, fees, and timelines are set in writing on a per-engagement basis.',
      },
      {
        heading: 'Intellectual property',
        body: 'Site content, brand marks, course material, and methodology documents are the property of Alphinix unless explicitly licensed to you in writing. Engagement deliverables are licensed to the client per the relevant agreement; default ownership is set out in the statement of work.',
      },
      {
        heading: 'Acceptable use',
        body: 'Do not use this site or our services to break the law, infringe rights, transmit malware, scrape at scale, or impersonate others. We may block, suspend, or remove access where these conditions are not met.',
      },
      {
        heading: 'Fees and refunds',
        body: 'Fees are set on a per-programme or per-engagement basis. Refund eligibility and process are detailed in the refund policy at /refund-policy.',
      },
      {
        heading: 'Limitation of liability',
        body: 'To the extent permitted by law, our aggregate liability arising out of or in connection with these terms or any engagement is limited to the fees paid by you to Alphinix in the twelve months preceding the event giving rise to the claim. We are not liable for indirect, special, or consequential losses.',
      },
      {
        heading: 'Governing law',
        body: 'These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts at Pune, Maharashtra.',
      },
      {
        heading: 'Contact',
        body: 'For questions about these terms, write to legal@alphinix.in.',
      },
    ],
  },

  'cookie-policy': {
    slug: 'cookie-policy',
    kicker: 'Legal · Cookies',
    title: 'Cookie policy',
    effectiveDate: EFFECTIVE,
    intro:
      'Alphinix uses a small number of cookies and similar storage technologies to keep the site reliable and to understand which pages are useful. This page explains which cookies are set, why, and how to control them.',
    sections: [
      {
        heading: 'What is a cookie',
        body: 'A cookie is a small text file stored by your browser when you visit a site. It can be read by the same site on later visits. Similar mechanisms include local storage, session storage, and pixel tags. We refer to all of these collectively as "cookies" on this page.',
      },
      {
        heading: 'Cookies we set',
        body: 'We set cookies in three categories. We do not set advertising or cross-site tracking cookies.',
        bullets: [
          'Strictly necessary — keep the site functional. These cannot be turned off through our interface; they include preferences such as your selected segment and the state of menus.',
          'Performance — measure aggregate page views and load times. These are anonymised and used to identify slow pages.',
          'Functional — remember your preferences such as theme. Set only when you change a preference; not used for tracking.',
        ],
      },
      {
        heading: 'Third-party cookies',
        body: 'Embedded videos, maps, or analytics components may set their own cookies under their own policies. Where we embed third-party content, we set the iframe to the most privacy-respecting available variant and load it only when the user interacts with the placeholder.',
      },
      {
        heading: 'Controlling cookies',
        body: 'You can clear cookies in your browser settings at any time. Modern browsers also provide blocking modes that prevent cookies from being stored. Blocking strictly-necessary cookies may break parts of the site.',
      },
      {
        heading: 'Changes',
        body: 'When we add or remove cookies, we update this page. The effective date at the top reflects the most recent material change.',
      },
      {
        heading: 'Contact',
        body: 'Questions about cookies: privacy@alphinix.in.',
      },
    ],
  },

  'refund-policy': {
    slug: 'refund-policy',
    kicker: 'Legal · Refund',
    title: 'Refund policy',
    effectiveDate: EFFECTIVE,
    intro:
      'This policy describes when fees paid to Alphinix are refundable, what the refund window is, and how to request a refund. The policy applies to programme fees paid by individual learners. Engagement fees paid by colleges, schools, or businesses are governed by the relevant statement of work.',
    sections: [
      {
        heading: 'Cooling-off window',
        body: 'You may withdraw from a programme within seven (7) calendar days of payment and receive a full refund, provided the programme has not yet started. Once a cohort has started, the cooling-off window no longer applies.',
      },
      {
        heading: 'Pro-rated refunds',
        body: 'For programmes longer than four weeks, a pro-rated refund is available if you withdraw after the cohort start but before the midway point. The refund amount is calculated on the unused portion of the programme, less an administrative deduction of fifteen percent (15%) of the total fee.',
      },
      {
        heading: 'Non-refundable cases',
        body: 'Refunds are not available where the cohort has already crossed the midway point, where credentials have already been issued, where the programme has been delivered in full, or where the withdrawal is due to a disciplinary action initiated by Alphinix.',
      },
      {
        heading: 'Programme cancellation by Alphinix',
        body: 'If we cancel or materially change a programme, you receive a full refund of the unused portion regardless of the timing.',
      },
      {
        heading: 'Process and timeline',
        body: 'To request a refund, write to billing@alphinix.in from the email you used to register, with your transaction reference. We acknowledge within 3 working days. Approved refunds are credited to the original payment method within 14 working days of approval.',
      },
      {
        heading: 'Disputes',
        body: 'If you disagree with the outcome of a refund request, you may escalate the matter through the grievance redressal process at /grievance.',
      },
      {
        heading: 'Contact',
        body: 'Refund requests and questions: billing@alphinix.in.',
      },
    ],
  },

  disclaimer: {
    slug: 'disclaimer',
    kicker: 'Legal · Disclaimer',
    title: 'Disclaimer',
    effectiveDate: EFFECTIVE,
    intro:
      'The information on this site is published in good faith and intended for general educational and informational purposes. This page sets out the boundaries of what we are committing to and what we are not.',
    sections: [
      {
        heading: 'No guaranteed outcomes',
        body: 'We work hard on programme outcomes — placement preparation, internships, credentials, and project work — but we do not guarantee a job, an internship, or a salary figure. Outcomes depend on factors that are outside our control, including market conditions, your effort, and the decisions of third-party employers.',
      },
      {
        heading: 'No personalised advice',
        body: 'Material on the site, including blog posts, guides, and case studies, does not constitute legal, financial, or career advice for your specific situation. For decisions that depend on your individual circumstances, consult a suitably qualified professional.',
      },
      {
        heading: 'External links',
        body: 'Links to external websites are provided as a convenience. We do not control external content and are not responsible for it. The presence of a link does not imply endorsement of the linked content or its operators.',
      },
      {
        heading: 'Marks and trademarks',
        body: 'Brand marks belonging to colleges, companies, or other organisations and shown on this site are the property of their respective owners. Their inclusion is for identification only and does not imply affiliation, sponsorship, or endorsement unless we have stated so explicitly.',
      },
      {
        heading: 'Errors',
        body: 'We update site content periodically. While we aim for accuracy, the content may contain typographical errors or out-of-date information. Where you spot an error, write to hello@alphinix.in and we will correct it.',
      },
      {
        heading: 'Contact',
        body: 'Questions about this disclaimer: legal@alphinix.in.',
      },
    ],
  },

  grievance: {
    slug: 'grievance',
    kicker: 'Legal · Grievance',
    title: 'Grievance redressal',
    effectiveDate: EFFECTIVE,
    intro:
      'If something has gone wrong in your interaction with Alphinix — a programme delivery issue, a billing concern, a privacy concern, or anything else — this page describes how to raise it and what you can expect from us in return.',
    sections: [
      {
        heading: 'How to raise a grievance',
        body: 'Write to grievance@alphinix.in with a clear description of the issue, the date or window when it occurred, and any supporting material such as screenshots, transaction references, or earlier correspondence. Use a single email thread for each issue so the trail stays together.',
      },
      {
        heading: 'Acknowledgement and ownership',
        body: 'We acknowledge every grievance within 3 working days. The acknowledgement names the person who is taking ownership of the issue and gives an expected resolution window.',
      },
      {
        heading: 'Resolution timeline',
        body: 'We aim to resolve grievances within 15 working days. Where a longer investigation is needed — for example, where the issue involves a third party — we update you weekly until the matter is closed.',
      },
      {
        heading: 'Escalation',
        body: 'If the resolution is not satisfactory, you can escalate to the Grievance Officer (see contact below). The Grievance Officer reviews the matter independently and responds within 10 working days of escalation.',
      },
      {
        heading: 'Grievance Officer',
        body: 'In line with applicable Indian regulations, Alphinix designates a Grievance Officer for the receipt and handling of complaints. The Grievance Officer is reachable at grievance-officer@alphinix.in or by post at the registered office address.',
      },
      {
        heading: 'External recourse',
        body: 'If your grievance remains unresolved after the internal process, you retain all rights of recourse available under Indian law, including approaching the relevant consumer or data-protection authority.',
      },
    ],
  },
};
