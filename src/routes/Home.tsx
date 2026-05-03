import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AudienceList } from '@/components/sections/AudienceList';
import { CapabilityStream } from '@/components/sections/CapabilityStream';
import { Manifesto } from '@/components/sections/Manifesto';
import { Standards } from '@/components/sections/Standards';
import { ContactBand } from '@/components/sections/ContactBand';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AudienceList />
        <CapabilityStream />
        <Manifesto />
        <Standards />
        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
