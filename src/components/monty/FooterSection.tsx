import React, { useState } from 'react';

const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="footer" className="bg-[#0f1c2e] text-white">
      {/* Newsletter */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm">Get the latest news about Monty Finance and our platforms.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[#c9a96e] text-[#0f1c2e] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#d4b87a] transition-colors whitespace-nowrap"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif font-bold text-xl text-white">Monty Finance</span>
              <span className="text-[#c9a96e] font-serif text-xs font-medium">SAL</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the future of digital finance in Lebanon. Licensed by BDL.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-base mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Vision & Mission', id: 'vision' },
                { label: 'Our Ecosystem', id: 'ecosystem' },
                { label: 'Careers', id: 'footer' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#c9a96e] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold text-white text-base mb-5">Platforms</h4>
            <ul className="space-y-3">
              {['MyMonty', 'MyMonty Business', 'MontyPay', 'For Businesses'].map((platform) => (
                <li key={platform}>
                  <button
                    onClick={() => scrollToSection('ecosystem')}
                    className="text-gray-400 hover:text-[#c9a96e] text-sm transition-colors duration-200"
                  >
                    {platform}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-base mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Beirut, Lebanon
              </li>
              <li>
                <a href="mailto:info@montyfinance.com" className="flex items-center gap-3 text-gray-400 hover:text-[#c9a96e] text-sm transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@montyfinance.com
                </a>
              </li>
              <li>
                <a href="tel:+9611234567" className="flex items-center gap-3 text-gray-400 hover:text-[#c9a96e] text-sm transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +961 1 234 567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Monty Finance SAL. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Compliance'].map((link) => (
              <button
                key={link}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-500 hover:text-[#c9a96e] text-sm transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
