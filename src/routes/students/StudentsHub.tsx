import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  StudentHero,
  StudentServicesGrid,
  StudentJourney,
  StudentOutcomes,
  StudentResourcesRail,
  StudentFaq,
  StudentCtaBand,
  StudentPageShell,
} from '@/components/sections/student/StudentSections';

const HUB_FAQS = [
  {
    q: 'How do I pick the right programme?',
    a: 'Start with what you are preparing for. If you are heading into placements, the placement-preparation programme is the right entry point. If you want a project on your CV, industrial training. Apply links from each programme card lead to the same short application form — we route you to the right programme after.',
  },
  {
    q: 'Are the programmes recognised by colleges?',
    a: 'The certificates are recognised by partner colleges where Alphinix runs the programme on campus. Where we run open-enrolment cohorts, the credentials are independent — they carry a verifiable URL and a transcript regardless of college affiliation.',
  },
  {
    q: 'Can I do more than one programme?',
    a: 'Yes. Most students who finish industrial training move into placement preparation in the next cycle, and many do a coding programme alongside. The cohorts are scheduled so they can stack.',
  },
  {
    q: 'What does it cost?',
    a: 'Programme fees are set per cohort and shared on the application page. Where Alphinix runs a programme on a partner campus, the college covers the fee — students do not pay separately.',
  },
  {
    q: 'I am not from a tier-one college. Does that matter?',
    a: 'No. The application looks at your interest, the work you have already done, and your year of study. We have placed students from a wide range of colleges and the same programmes apply.',
  },
];

export function StudentsHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StudentPageShell>
        <StudentHero
          kicker="For Students"
          title="From classroom to a confirmed offer."
          highlight="One platform for the journey."
          body="Seven programmes that take engineering, polytechnic, BCA, MCA and BSc students from where they are today into the work they want — through industrial training, internships, placement preparation, and the credentials hiring teams ask for."
          primaryCta={{ label: 'Apply now', href: '/students/apply' }}
          secondaryCta={{ label: 'Read all programmes', href: '#programmes' }}
          meta={[
            { label: 'Cohorts', value: 'Year-round' },
            { label: 'Format', value: 'Live + self-paced' },
            { label: 'Audiences', value: 'Engineering · Diploma · BCA · MCA · BSc' },
            { label: 'Operating from', value: 'Pune, India' },
          ]}
        />

        <div id="programmes" />
        <StudentServicesGrid />
        <StudentJourney />
        <StudentResourcesRail />
        <StudentOutcomes />
        <StudentFaq faqs={HUB_FAQS} />
        <StudentCtaBand
          title="Find the right programme for where you are."
          body="Tell us your year of study, your current programme, and what you are preparing for. We respond with the right route — whether that is a cohort, an internship match, or a placement-preparation track."
          primary={{ label: 'Apply now', href: '/students/apply' }}
          secondary={{ label: 'Talk to us', href: '/contact' }}
        />
      </StudentPageShell>
      <Footer />
    </div>
  );
}
