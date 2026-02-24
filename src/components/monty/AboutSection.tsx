import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-[#0f1c2e] font-semibold text-sm tracking-widest uppercase mb-4">
          ABOUT US
        </p>
        <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl sm:text-4xl lg:text-5xl mb-8">
          Monty Finance SAL
        </h2>
        <div className="space-y-6 text-[#5a6a7e] text-lg leading-relaxed">
          <p>
            Monty Finance SAL is a Lebanese financial services company licensed by BDL and dedicated to building the future of digital finance in the region. We design and scale digital finance platforms anchored by MyMonty and MontyPay, that simplify the way people pay, move money, and manage their financial lives.
          </p>
          <p>
            Our role goes beyond technology. We design regulated, secure, and user-centric financial solutions that respond to real-world needs, from personal money management to business payments and growth.
          </p>
          <p>
            With a strong foundation in compliance, innovation, and market understanding, Monty Finance SAL serves as the backbone of a growing ecosystem of digital financial products for individuals, merchants, and enterprises across Lebanon and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
