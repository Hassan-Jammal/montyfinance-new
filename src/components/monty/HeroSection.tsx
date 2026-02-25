import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
// onClick={() => scrollToSection('ecosystem')}
  return (
    <section className="relative flex items-center min-h-screen bg-[#f8f9fb] overflow-hidden pt-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0f1c2e] text-[#d4b87a] px-2 py-1 rounded-full text-sm font-medium">
              <span>Licensed by BDL</span>
              <span className="text-[#c9a96e]">&bull;</span>
              <span>Digital Finance Leader</span>
            </div>

            {/* Heading */}
            <h1 className="font-serif font-bold text-[#0f1c2e] text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.1] tracking-tight">
              Building the Future of Digital Finance in Lebanon
            </h1>

            {/* Description */}
            <p className="text-[#5a6a7e] text-lg leading-relaxed max-w-lg">
              Monty Finance SAL is a licensed financial services company dedicated to scaling digital finance platforms anchored by MyMonty and MontyPay.
            </p>

            {/* CTAs */}
            {/* <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('ecosystem')}
                className="inline-flex items-center gap-3 bg-[#0f1c2e] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#1a2d45] transition-all duration-200 group"
              >
                Explore Our Platforms
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium text-[#0f1c2e] border-2 border-[#0f1c2e] hover:bg-[#0f1c2e] hover:text-white transition-all duration-200"
              >
                Learn More
              </button>
            </div> */}

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-[#0f1c2e] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0f1c2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0f1c2e] text-sm">Secure</p>
                  <p className="text-[#5a6a7e] text-sm">BDL Licensed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-[#0f1c2e] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0f1c2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0f1c2e] text-sm">Fast</p>
                  <p className="text-[#5a6a7e] text-sm">Instant Access</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-[#0f1c2e] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0f1c2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0f1c2e] text-sm">Inclusive</p>
                  <p className="text-[#5a6a7e] text-sm">For Everyone</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[700px] max-w-2xl ml-auto">
              {/* Money Transfer Card */}
              <div className="absolute top-20 left-40 bg-white rounded-2xl shadow-xl p-5 w-64 z-20 animate-float">

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#2d4a9e] flex items-center justify-center z-10">
                      <img
                        src="/images/person-2.png"
                        alt="Professional businessman"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#c9a96e] flex items-center justify-center">
                      <img
                        src="/images/person-1.png"
                        alt="Professional businessman"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="font-semibold text-[#0f1c2e] text-base mb-1">Money Transfer</p>
                <p className="text-[#5a6a7e] text-sm mb-4">$5,000 available in your wallet now.</p>
                <div className="bg-[#f5f7fa] rounded-lg px-4 py-2.5">
                  <p className="text-[#0f1c2e] font-mono text-sm tracking-wider">*** *** *** 4154 4154</p>
                </div>
              </div>

              {/* Businessman Image */}
              <div className="absolute top-0 right-0 w-56 h-72 rounded-2xl overflow-hidden shadow-lg z-10">
                <img
                  src="/images/banner-1.png"
                  alt="Professional businessman"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Skyscraper Image */}
              <div className="absolute bottom-28 left-44 w-60 h-64 rounded-2xl overflow-hidden shadow-lg z-10">
                <img
                  src="/images/banner-2.png"
                  alt="Modern skyscraper"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Total Deposit Card */}
              <div className="absolute top-[320px] right-0 bg-white rounded-2xl shadow-xl p-5 w-56 z-20 animate-float-delayed">

                <div className="flex items-center justify-between mb-2">
                  <p className="text-[#5a6a7e] text-xs">Total deposit</p>
                  <div className="w-8 h-8 rounded-full bg-[#eef1f8] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#2d4a9e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                </div>
                <p className="font-bold text-[#0f1c2e] text-2xl mb-2">$240.80K</p>
                <div className="w-full bg-[#e5e9f0] rounded-full h-1.5 mb-2">
                  <div className="bg-[#2d4a9e] h-1.5 rounded-full" style={{ width: '72%' }} />
                </div>
                <p className="text-xs">
                  <span className="text-green-500 font-medium">+2.6%</span>
                  <span className="text-[#5a6a7e]"> Less Than last week</span>
                </p>
              </div>

              {/* Analysis Chart Card */}
              <div className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-xl p-5 w-56 z-20 animate-float-slow">

                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-[#0f1c2e] text-sm">Analysis</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-sm bg-[#2d4a9e]" />
                      Income
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-sm bg-[#c9a96e]" />
                      Outcome
                    </span>
                  </div>
                </div>
                {/* Mini Bar Chart */}
                <div className="flex items-end gap-2 h-20">
                  {[
                    { income: 60, outcome: 40 },
                    { income: 80, outcome: 50 },
                    { income: 45, outcome: 30 },
                    { income: 90, outcome: 60 },
                    { income: 70, outcome: 45 },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex items-end gap-0.5">
                      <div
                        className="flex-1 bg-[#2d4a9e] rounded-t-sm"
                        style={{ height: `${bar.income}px` }}
                      />
                      <div
                        className="flex-1 bg-[#c9a96e] rounded-t-sm"
                        style={{ height: `${bar.outcome}px` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-1 text-[10px] text-[#5a6a7e]">
                  <span>250k</span>
                  <span>100k</span>
                  <span>50k</span>
                  <span>10k</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
