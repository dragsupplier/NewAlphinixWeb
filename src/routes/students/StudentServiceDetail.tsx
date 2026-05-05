import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Stub } from '@/routes/Stub';
import { findStudentService } from '@/data/studentServices';
import {
  StudentHero,
  ProgrammeOverview,
  CurriculumList,
  ProgrammeOutcomes,
  StudentFaq,
  OtherProgrammesRail,
  StudentCtaBand,
  StudentPageShell,
} from '@/components/sections/student/StudentSections';
import { ServiceSignature } from '@/components/sections/student/ServiceSignatures';

export function StudentServiceDetail({ slug }: { slug: string }) {
  const service = findStudentService(slug);
  if (!service) {
    return <Stub kicker="404" title="Programme not found" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StudentPageShell>
        <StudentHero
          kicker={service.kicker}
          title={service.name + '.'}
          highlight={service.tagline}
          body={service.summary}
          primaryCta={{ label: 'Apply now', href: '/contact' }}
          secondaryCta={{ label: 'Back to all programmes', href: '/students#programmes' }}
          meta={[
            { label: 'Duration', value: service.duration },
            { label: 'Mode', value: service.mode },
            { label: 'Format', value: service.format },
          ]}
        />

        <ProgrammeOverview
          body={service.body}
          audience={service.audience}
          prerequisites={service.prerequisites}
        />

        <CurriculumList modules={service.modules} />

        {/* Service-specific signature section — different per slug */}
        <ServiceSignature slug={service.slug} />

        <ProgrammeOutcomes outcomes={service.outcomes} />

        <StudentFaq
          faqs={service.faqs}
          kicker="Programme questions"
          title="Things students ask about this one."
        />

        <OtherProgrammesRail excludeSlug={service.slug} />

        <StudentCtaBand
          title={`Ready to apply for ${service.name.toLowerCase()}?`}
          body="The application form takes under three minutes. We route you to the right cohort, share dates and fees, and confirm a slot if you are eligible."
          primary={{ label: 'Apply for this programme', href: '/contact' }}
          secondary={{ label: 'Talk to us', href: '/contact' }}
        />
      </StudentPageShell>
      <Footer />
    </div>
  );
}
