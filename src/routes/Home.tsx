import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AudienceTabs } from '@/components/sections/AudienceTabs';
import { SignatureBlocks } from '@/components/sections/SignatureBlocks';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ContactBand } from '@/components/sections/ContactBand';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <AudienceTabs />
        <SignatureBlocks />
        <ProcessSteps />
        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
