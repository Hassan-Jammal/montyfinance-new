import React from 'react';

const VisionMissionSection: React.FC = () => {
  return (
    <section id="vision" className="pt-20 lg:pt-28 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#0f1c2e] font-semibold text-sm tracking-widest uppercase mb-4">
            VISION & MISSION
          </p>
          <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl sm:text-4xl lg:text-5xl">
            Guided by Purpose
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-[#f0f3f8] rounded-3xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#0f1c2e] flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h3 className="font-bold text-[#0f1c2e] text-2xl mb-4">Our Vision</h3>
            <p className="text-[#5a6a7e] text-base leading-relaxed">
              An inclusive financial future where every person can access essential financial services and every business can grow without barriers.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#f0f3f8] rounded-3xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#0f1c2e] flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#0f1c2e] text-2xl mb-4">Our Mission</h3>
            <p className="text-[#5a6a7e] text-base leading-relaxed">
              To empower people with simple, secure digital finance and equip Lebanese businesses with modern payment acceptance solutions, reshaping Lebanon’s financial landscape with impact and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
