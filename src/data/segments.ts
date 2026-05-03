export type Segment = {
  index: string;
  slug: string;
  name: string;
  audience: string;
  outcome: string;
  intent: string;
  services: string[];
};

export const segments: Segment[] = [
  {
    index: '01',
    slug: 'students',
    name: 'Students',
    audience: 'Engineering, diploma, BCA, MCA, BSc',
    outcome: 'From classroom to a confirmed offer.',
    intent:
      'Industrial training, internships, certifications, and structured placement preparation that move students into work.',
    services: [
      'Industrial training',
      'Internship programs',
      'Placement preparation',
      'Certifications',
      'Career guidance',
      'Coding programs',
      'Skill development',
    ],
  },
  {
    index: '02',
    slug: 'colleges',
    name: 'Colleges',
    audience: 'Engineering and polytechnic institutes',
    outcome: 'Better placements, stronger accreditation, modern infrastructure.',
    intent:
      'Campus training, placement drives, faculty development, accreditation support, and software systems for colleges.',
    services: [
      'Campus training programs',
      'Placement drives',
      'Pre-placement training',
      'Faculty development (FDP)',
      'NAAC and NBA support',
      'LMS and ERP systems',
      'AI, IoT, and Cloud labs',
      'Curriculum consulting',
    ],
  },
  {
    index: '03',
    slug: 'schools',
    name: 'Schools',
    audience: 'K-12 management and principals',
    outcome: 'Future-ready learning, set up the right way.',
    intent:
      'AI, robotics, coding, IoT, and STEM/ATL labs delivered with hardware kits and teacher training, aligned to NEP 2020.',
    services: [
      'AI and robotics education',
      'Coding programs',
      'IoT lab setup',
      'STEM and ATL labs',
      'Hardware kits (Arduino, Raspberry Pi, drones)',
      'Teacher training',
    ],
  },
  {
    index: '04',
    slug: 'businesses',
    name: 'Businesses',
    audience: 'Founders, SMBs, and digital teams',
    outcome: 'Software, AI, and infrastructure that ship.',
    intent:
      'Web and mobile development, AI solutions, automation, cloud infrastructure, and technology consulting for growing businesses.',
    services: [
      'Website development',
      'Mobile app development',
      'AI solutions',
      'Automation systems',
      'Cloud infrastructure',
      'Digital marketing',
      'Technology consulting',
    ],
  },
  {
    index: '05',
    slug: 'hiring',
    name: 'Hiring',
    audience: 'HR and hiring managers',
    outcome: 'Trained candidates ready to start work.',
    intent:
      'Permanent recruitment, contract staffing, RPO, and pre-trained intern supply drawn from the same talent pool we train.',
    services: [
      'Permanent recruitment',
      'Contract staffing',
      'Pre-trained intern supply',
      'Technical assessments',
      'Recruitment process outsourcing',
      'Bulk hiring drives',
    ],
  },
];
