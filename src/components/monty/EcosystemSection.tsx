import React, { useState } from 'react';

const PHONE_IMG = 'https://d64gsuwffb70l.cloudfront.net/699d93bd375483c7d17166c9_1771934809002_fb76dc16.jpg';
const BUSINESS_IMG = 'https://d64gsuwffb70l.cloudfront.net/699d93bd375483c7d17166c9_1771934823981_d3f55aea.jpg';
const POS_IMG = 'https://d64gsuwffb70l.cloudfront.net/699d93bd375483c7d17166c9_1771934841221_6d4cf8b2.jpg';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#2d4a9e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const montyPayServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: 'Omnichannel Payments',
    description: 'Accept payments online, in-store, or on the go. Process credit cards, digital wallets, and QR payments through one unified platform.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Smart POS Terminals',
    description: 'Advanced point-of-sale solutions for fast, flexible in-store checkout. Support for cards, wallets, and contactless payments.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Online Payment Gateway',
    description: 'Secure e-commerce gateway with multi-currency support, pay-by-link checkouts, recurring billing, and invoicing tools.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Value-Added Services',
    description: 'Loyalty programs, advanced analytics, business insights, and e-commerce services including Shopify integration.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Unified Merchant Dashboard',
    description: 'Manage transactions, monitor performance in real time, and make smarter, data-driven decisions through one platform.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Digital Growth Support',
    description: 'Complete e-commerce services to help businesses scale online with confidence and reach more customers.',
  },
];

const EcosystemSection: React.FC = () => {
  const [activePayTag, setActivePayTag] = useState('Smart POS');

  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#0f1c2e] font-semibold text-sm tracking-widest uppercase mb-4">
            OUR ECOSYSTEM
          </p>
          <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl sm:text-4xl lg:text-5xl mb-6">
            The Monty Finance Ecosystem
          </h2>
          <p className="text-[#5a6a7e] text-lg leading-relaxed max-w-3xl mx-auto">
            Under Monty Finance SAL, our platforms are built with one shared purpose: to make finance simpler, more accessible, and more powerful for everyone. Each brand serves a distinct audience, together forming a complete financial ecosystem that connects people and businesses.
          </p>
        </div>

        {/* MyMonty Section */}
        <div className="bg-[#f8f9fb] rounded-3xl p-8 lg:p-14 mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#0f1c2e] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">m</span>
                </div>
                <span className="font-bold text-[#0f1c2e] text-3xl tracking-tight">mymonty</span>
              </div>
              <p className="text-[#5a6a7e] text-base mb-6 ml-[60px]">Your Super Digital Wallet</p>

              <p className="text-[#5a6a7e] text-base leading-relaxed mb-6">
                MyMonty is an all-in-one digital wallet designed for everyday life. It gives individuals smart control over their money through a simple, intuitive mobile app.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Send and receive money instantly with peer-to-peer transfers',
                  'Manage their finances in one secure place',
                  'Access virtual and physical payment cards and credit solutions',
                  'Pay, track, and move money with ease',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-[#5a6a7e] text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#5a6a7e] text-base leading-relaxed italic">
                Built for modern lifestyles, MyMonty transforms how people interact with their finances. It replaces complexity with clarity and friction with freedom, putting powerful financial tools directly in the hands of users.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-72 lg:w-80">
                <img
                  src={PHONE_IMG}
                  alt="MyMonty digital wallet app"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MyMonty Business Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left - Dark Card */}
          <div className="bg-[#0f1c2e] rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                For Businesses
              </span>

              <div className="flex items-center gap-2 mb-2 mt-8">
                <span className="font-bold text-white text-3xl tracking-tight">mymonty</span>
                <span className="text-white/70 text-3xl font-light">Business</span>
              </div>

              <p className="text-gray-400 text-base leading-relaxed mt-6">
                MyMonty Business is a digital financial account designed to help companies manage their money efficiently through a secure web and mobile platform. It enables businesses to handle daily operations, control cash flow, and simplify financial transactions in one centralized wallet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-white font-bold text-2xl">2+</p>
                <p className="text-gray-400 text-sm">Currencies</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-white font-bold text-2xl">24/7</p>
                <p className="text-gray-400 text-sm">Access</p>
              </div>
            </div>
          </div>

          {/* Right - Image + Features */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden h-52">
              <img
                src={BUSINESS_IMG}
                alt="Business professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs mb-2">
                  Real-time Management
                </span>
                <p className="text-white font-semibold text-lg">Digital Wallet for Modern Businesses</p>
              </div>
            </div>

            <div className="bg-[#f8f9fb] rounded-3xl p-6 lg:p-8">
              <h3 className="font-serif font-bold text-[#0f1c2e] text-xl mb-5">Key Features</h3>
              <div className="space-y-4">
                {[
                  'Manage USD and LBP wallets with transaction tracking',
                  'Request, schedule, and collect QR code payments',
                  'Pay suppliers and teams via transfers and bulk payments',
                  'Deposit and withdraw through agents and ATMs',
                  'Access business prepaid and credit cards',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-[#5a6a7e] text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#5a6a7e] text-sm leading-relaxed italic mt-6">
                Built for SMEs, startups, and growing enterprises — MyMonty Business combines flexibility, security, and compliance to support smarter financial management and sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* MontyPay Section */}
        <div className="bg-[#f0f3f8] rounded-3xl p-8 lg:p-14 mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white text-[#0f1c2e] px-4 py-1.5 rounded-full text-sm font-medium mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Payment Solutions Platform
              </span>

              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 bg-[#2d4a9e] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MP</span>
                </div>
                <div>
                  <span className="font-bold text-[#0f1c2e] text-3xl">
                    Monty<span className="text-[#2d4a9e]">Pay</span>
                  </span>
                </div>
              </div>
              <p className="text-[#5a6a7e] text-lg font-medium mb-6">Beyond Payments.</p>

              <p className="text-[#5a6a7e] text-base leading-relaxed mb-8">
                A full-spectrum commerce and payment solutions platform designed to help businesses accept, manage, and grow their payments with confidence across Lebanon.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Smart POS', 'Online Gateway', 'QR Payments'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActivePayTag(tag)}
                    className={`px-6 py-3 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                      activePayTag === tag
                        ? 'bg-[#0f1c2e] text-white border-[#0f1c2e]'
                        : 'bg-transparent text-[#0f1c2e] border-[#0f1c2e] hover:bg-[#0f1c2e] hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 lg:w-72">
                <img
                  src={POS_IMG}
                  alt="MontyPay POS terminal"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MontyPay Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {montyPayServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#f8f9fb] rounded-2xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2d4a9e] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif font-bold text-[#0f1c2e] text-lg mb-3">{service.title}</h3>
              <p className="text-[#5a6a7e] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Complete Ecosystem Banner */}
        <div className="bg-gradient-to-r from-[#0f1c2e] to-[#1a2d45] rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="font-serif font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-4">
            A Complete Financial Ecosystem
          </h2>
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
            Together, MyMonty, MyMonty Business, and MontyPay form a powerful fintech ecosystem that connects people and businesses, shaping a smarter and more inclusive financial future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
