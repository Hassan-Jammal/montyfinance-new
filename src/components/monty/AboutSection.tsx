import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <p className="text-[#0f1c2e] font-semibold text-sm tracking-widest uppercase mb-4">
          ABOUT US
        </p>
        <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl sm:text-4xl lg:text-5xl mb-8">
          Monty Finance SAL
        </h2>
        <div className="space-y-6 text-[#5a6a7e] text-lg leading-relaxed">
          <p>
            Monty Finance SAL is a Lebanese financial institution licensed by the Central Bank of Lebanon and dedicated to building the future of digital finance in Lebanon.
          </p>
          <p>
            Through our platforms MyMonty and MontyPay, we offer digital financial solutions that simplify how individuals and businesses pay, receive, and move money, and manage their finances..
          </p>
          <p>
            With a strong foundation in compliance, innovation, and market understanding, Monty Finance SAL serves as the backbone of a growing ecosystem of digital financial products for individuals, merchants, and enterprises across Lebanon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
