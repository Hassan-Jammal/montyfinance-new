import React from 'react';

const approachCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Practical Solutions',
    description: 'Designing relevant and forward-thinking financial solutions that respond to real needs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Opening Doors',
    description: 'Breaking down complexity and barriers to give individuals and merchants freedom to move, pay, and grow.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Lasting Value',
    description: "Every product we launch is designed to create lasting value and make a tangible impact on Lebanon's financial landscape.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Compliance First',
    description: 'Strong foundation in compliance, innovation, and market understanding to ensure security and trust.',
  },
];

const ApproachSection: React.FC = () => {
  return (
    <>
      {/* Our Approach */}
      <section id="approach" className="py-20 lg:py-28 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#0f1c2e] font-semibold text-sm tracking-widest uppercase mb-4">
              OUR APPROACH
            </p>
            <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl sm:text-4xl lg:text-5xl mb-6 max-w-2xl mx-auto leading-tight">
              Shaping the Future of Digital Finance in Lebanon
            </h2>
            <p className="text-[#5a6a7e] text-lg leading-relaxed max-w-3xl mx-auto">
              At Monty Finance SAL, we believe that access to financial services is a fundamental right. Built on decades of local and international experience across leading financial and consulting institutions, our team brings deep insight into the realities people and businesses face in Lebanon.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0f1c2e] flex items-center justify-center text-[#c9a96e] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[#0f1c2e] text-lg mb-3">{card.title}</h3>
                <p className="text-[#5a6a7e] text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#0f1c2e] rounded-3xl p-8 lg:p-14">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-[#0f1c2e] px-5 py-2 rounded-full text-sm font-semibold mb-6">
              OUR COMMITMENT
            </span>
            <h2 className="font-serif font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Building Meaningful Financial Infrastructure
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-l-4 border-white/30 pl-6">
              <p className="text-gray-300 text-base leading-relaxed">
                In a market where complexity and barriers have long limited access, we are committed to opening doors. We build platforms that simplify finance, restore confidence, and give individuals and merchants the freedom to move, pay, and grow with ease.
              </p>
            </div>
            <div className="border-l-4 border-white/30 pl-6">
              <p className="text-gray-300 text-base leading-relaxed">
                Our ambition is clear: to ensure that Lebanese people, residents, and the wider diaspora can access essential financial services without friction, wherever they are and whenever they need them.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 mt-8">
              <p className="text-gray-200 text-base leading-relaxed italic">
                "Guided by the visionary leadership of Mountasser Hachem, Chairman of Monty Holding, Monty Finance SAL was founded with a clear purpose: to build meaningful financial infrastructure that drives progress. We are shaping a more connected, resilient, and accessible future for finance in Lebanon and beyond."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApproachSection;
