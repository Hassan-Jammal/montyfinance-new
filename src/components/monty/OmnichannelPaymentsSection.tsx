import React, { useState } from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#2d4a9e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const montyPayServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Smart POS Terminals',
    description: 'Advanced point-of-sale solutions enable fast, flexible in-store checkout, offering both card & wallet payments.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Online Payment Gateway',
    description: 'A secure e-commerce gateway with multi-currency support, pay-by-link checkouts, recurring billing, and invoicing tools to streamline online sales and reduce checkout friction.',
  },
  
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Unified Merchant Dashboard',
    description: 'Through one dashboard and mobile app, businesses can manage transactions, monitor performance in real time, and make smarter, data-driven decisions.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Value-Added Services',
    description: 'Beyond payments, MontyPay offers loyalty programs, advanced analytics, and business insights.',
  },
]; 

const EcosystemSection: React.FC = () => {
  const [activePayTag, setActivePayTag] = useState('Smart POS');

  return (
    <section id="ecosystem" className="pb-20 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl sm:text-4xl lg:text-5xl mb-6">
            Omnichannel Payments
          </h2>
          <p className="text-[#5a6a7e] text-lg leading-relaxed max-w-3xl mx-auto">
            Accept payments online, in-store, or on the go. Process credit cards, digital wallets, and QR payments through one unified platform.
          </p>
        </div>

        {/* MontyPay Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20 lg:mb-28">
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
            Together, MyMonty, MyMonty Business, and MontyPay form a powerful digital finance ecosystem that connects people and businesses, shaping a smarter and more inclusive financial future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
