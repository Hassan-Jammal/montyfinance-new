import React, { useState } from 'react';
import Navbar from './monty/Navbar';
import HeroSection from './monty/HeroSection';
import AboutSection from './monty/AboutSection';
import ApproachSection from './monty/ApproachSection';
import VisionMissionSection from './monty/VisionMissionSection';
import EcosystemSection from './monty/EcosystemSection';
import FooterSection from './monty/FooterSection';
import ContactModal from './monty/ContactModal';
import BackToTop from './monty/BackToTop';

const AppLayout: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main>
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <VisionMissionSection />
        <EcosystemSection />
      </main>
      <FooterSection />
      <BackToTop />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Floating Contact Button */}
      <button
        onClick={() => setContactOpen(true)}
        className="fixed bottom-8 left-8 z-50 bg-[#c9a96e] text-[#0f1c2e] px-5 py-3 rounded-full shadow-lg font-semibold text-sm hover:bg-[#d4b87a] transition-all duration-300 flex items-center gap-2 hover:shadow-xl"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
        Contact Us
      </button>
    </div>
  );
};

export default AppLayout;
