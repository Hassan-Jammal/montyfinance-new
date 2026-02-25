import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const navLinks = [
    { label: 'MyMonty', to: 'https://mymonty.com' },
    { label: 'MyMonty Business', to: 'https://mymonty.com.lb/business' },
    { label: 'MontyPay', to: 'https://montypay.com' },
  ];

  return (
    <footer id="footer" className="bg-[#0f1c2e] text-white">
      {/* Newsletter */}
      {/* <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 border-b border-white/10">
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
      </div> */}

      {/* Main Footer */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="223" height="28" viewBox="0 0 223 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.7615 19.1119L25.8266 19.3162V21.0776H15.6302V19.3162L17.6953 19.0822C17.7297 16.6996 17.7168 14.4233 17.7426 12.6916L17.8243 6.62023L12.9154 21.0776H10.2609L4.98204 6.47557L5.0982 12.513V18.9375L7.60213 19.3119V21.0734H0V19.3119L2.98578 18.946V3.68025L0.361391 3.38242V1.62524H9.29292L13.4532 13.3937L17.3769 1.62524H25.676V3.38668L23.7615 3.58239C23.7185 6.01181 23.7142 8.45399 23.7142 10.8792V11.8322C23.7142 14.2872 23.7142 16.7251 23.7615 19.1162M41.9902 13.7085C41.9902 18.244 39.1852 21.5541 34.0267 21.5541C28.8683 21.5541 26.0632 18.1546 26.0632 13.7085C26.0632 9.26238 29.3803 6.07138 34.0267 6.07138C38.6732 6.07138 41.9902 9.17304 41.9902 13.7085ZM35.9541 13.7979C35.9541 9.47086 35.3518 7.70943 34.0224 7.70943C32.693 7.70943 32.0907 9.47086 32.0907 13.7979C32.0907 18.1249 32.6973 19.9118 34.0224 19.9118C35.3475 19.9118 35.9541 18.1504 35.9541 13.7979ZM58.5841 14.8105V11.0493C58.5841 7.79877 56.6524 6.06712 54.028 6.06712C52.3243 6.06712 51.0594 6.55216 49.4418 8.43698L49.2912 6.39473L48.7491 6.06712L42.0806 8.12638V9.34748L43.7111 9.61552C43.7714 10.8068 43.8015 11.3174 43.8015 12.9554V14.8062C43.8015 16.0316 43.7886 17.793 43.7585 19.2353L42.3817 19.5502V21.0734H50.7067V19.5502L49.5709 19.3077C49.545 17.8526 49.5278 16.0528 49.5278 14.8062V10.0452C50.242 9.54319 50.9691 9.25813 51.4897 9.25813C52.4534 9.25813 52.8449 9.85378 52.8449 11.4365V14.8105C52.8449 16.0741 52.832 17.8228 52.8062 19.2481L51.5198 19.5544V21.0776H59.8791V19.5544L58.6228 19.2992C58.597 17.8653 58.5798 16.0911 58.5798 14.8105M70.0325 18.1546C69.5205 18.5418 69.0688 18.7503 68.5568 18.7503C67.7136 18.7503 67.0768 18.1249 67.0768 16.7804V8.78586H69.8518V6.5479H67.0768V2.31025H63.4844L61.6646 6.55641L59.6253 6.81595V8.78586H61.3462V13.917C61.3462 15.0828 61.3161 15.9465 61.3161 17.108C61.3161 20.299 63.037 21.5541 66.0228 21.5541C68.4966 21.5541 69.9723 20.567 70.7897 18.8397L70.0325 18.1546ZM86.4758 6.5479H80.8656V7.95194L82.6037 8.29657L80.0611 15.5125L77.4582 8.30508L79.2394 7.92216V6.5479H70.097V7.95194L71.4221 8.19021L77.6561 22.3583C77.2259 23.5326 76.6064 24.5196 75.918 25.294L75.7115 24.9621C74.8984 23.6474 73.7798 23.4687 72.9666 23.4687C71.6717 23.4687 70.5531 24.1537 70.282 25.6471C70.4326 26.9618 71.8825 28.0042 73.5388 28.0042C76.4644 28.0042 77.6992 26.0641 78.9683 22.8433L84.6731 8.24552L86.4801 7.9562V6.55216L86.4758 6.5479Z" fill="#FFFFFF"/>
              <path d="M207.834 19.9756C207.834 21.0776 207.099 21.5328 205.473 21.5328C204.057 21.5328 203.179 21.0691 203.179 19.7501H204.048C204.048 20.5798 204.763 20.6861 205.554 20.6861C206.449 20.6861 206.888 20.4904 206.888 20.0267C206.888 19.3757 205.972 19.3587 205.283 19.2353C204.074 19.0055 203.222 18.7205 203.222 17.627C203.222 16.5336 203.941 16.0698 205.533 16.0698C206.927 16.0698 207.774 16.5336 207.774 17.8525H206.905C206.905 17.0271 206.23 16.9335 205.46 16.9335C204.496 16.9335 204.173 17.159 204.173 17.576C204.173 18.0185 204.659 18.1589 205.658 18.3163C207.051 18.5333 207.839 18.8864 207.839 19.9799M209.005 20.4862C208.635 20.4862 208.476 20.6564 208.476 21.0095C208.476 21.3626 208.635 21.5328 209.005 21.5328C209.375 21.5328 209.534 21.3541 209.534 21.0095C209.534 20.6649 209.375 20.4862 209.005 20.4862ZM212.954 16.1804L215.127 21.4179H214.142L213.763 20.5117H211.152L210.782 21.4179H209.801L211.973 16.1804H212.958H212.954ZM213.423 19.6906L212.464 17.3632L211.496 19.6906H213.423ZM215.923 20.4862C215.553 20.4862 215.394 20.6564 215.394 21.0095C215.394 21.3626 215.553 21.5328 215.923 21.5328C216.293 21.5328 216.452 21.3541 216.452 21.0095C216.452 20.6649 216.293 20.4862 215.923 20.4862ZM218.156 16.1804H217.248V21.4179H221.374V20.5925H218.16V16.1762L218.156 16.1804ZM222.471 20.4862C222.101 20.4862 221.942 20.6564 221.942 21.0095C221.942 21.3626 222.101 21.5328 222.471 21.5328C222.841 21.5328 223 21.3541 223 21.0095C223 20.6649 222.841 20.4862 222.471 20.4862Z" fill="#D3A23C"/>
              <path d="M106.95 1.77853L107.161 6.8501H104.326L103.754 3.53571H99.2449C99.2019 5.72261 99.1933 7.9478 99.1933 10.19H102.007L102.364 8.04141H104.266V14.517H102.364L101.986 12.1004H99.1976C99.1976 14.4745 99.1976 16.8486 99.2406 19.2057L101.908 19.4652V21.2266H91.1093V19.4652L93.1744 19.261C93.2175 16.8699 93.2175 14.4319 93.2175 11.9727V11.0197C93.2175 8.59877 93.2175 6.16084 93.1744 3.73568L91.1093 3.53145V1.77002H106.946L106.95 1.77853ZM114.613 14.9638V10.9984L114.703 6.55227L114.161 6.22466L107.161 8.28392V9.50501L108.792 9.77306C108.852 10.9644 108.882 11.8919 108.882 13.5342V14.9638C108.882 16.1934 108.869 17.959 108.843 19.4014L107.497 19.712V21.2351H115.912V19.712L114.656 19.4524C114.63 18.0016 114.613 16.2104 114.613 14.9638ZM132.665 14.9638V11.2069C132.665 7.95206 130.733 6.22466 128.109 6.22466C126.405 6.22466 125.14 6.7097 123.523 8.59452L123.372 6.55227L122.83 6.22466L116.162 8.28392V9.50501L117.792 9.77306C117.852 10.9644 117.882 11.4749 117.882 13.113V14.9595C117.882 16.1849 117.87 17.9463 117.844 19.3886L116.463 19.7077V21.2309H124.792V19.7077L123.656 19.4652C123.63 18.0144 123.613 16.2104 123.613 14.9638V10.2028C124.327 9.70073 125.054 9.41567 125.575 9.41567C126.539 9.41567 126.93 10.0113 126.93 11.5941V14.9638C126.93 16.2274 126.917 17.9761 126.891 19.4014L125.605 19.7077V21.2309H133.96V19.7077L132.704 19.4524C132.678 18.0186 132.661 16.2444 132.661 14.9638M149.397 18.6951L150.27 19.1716C149.547 20.9926 148.368 21.7074 146.226 21.7074C144.324 21.7074 143.214 20.9501 142.711 19.5971C141.515 20.8735 140.581 21.7074 138.413 21.7074C136.029 21.7074 134.489 20.3034 134.489 17.8569C134.489 15.5594 135.784 14.0107 140.672 12.7258C141.166 12.5939 141.82 12.428 142.513 12.2493V11.1771C142.513 8.64132 142.121 7.83718 140.22 7.83718C140.069 7.83718 139.923 7.84144 139.768 7.84995V8.84979C139.768 11.2664 138.594 12.1897 137.294 12.1897C136.115 12.1897 135.302 11.6536 135.001 10.5772C135.001 8.01162 137.505 6.22041 142.362 6.22041C146.523 6.22041 148.063 7.92228 148.063 12.0068V18.8398C148.063 19.1376 148.244 19.3461 148.575 19.3461C148.816 19.3461 149.027 19.2269 149.388 18.6909M142.517 18.593V13.6406C142.186 13.7512 141.885 13.8661 141.64 13.9809C140.796 14.3681 139.678 15.3212 139.678 16.9337C139.678 18.393 140.37 19.1121 141.248 19.1121C141.605 19.1121 141.992 18.9589 142.517 18.593ZM166.7 14.9638V11.2069C166.7 7.95206 164.769 6.22466 162.144 6.22466C160.436 6.22466 159.176 6.7097 157.558 8.59452L157.407 6.55227L156.865 6.22466L150.197 8.28392V9.50501L151.827 9.77306C151.888 10.9644 151.918 11.4749 151.918 13.113V14.9595C151.918 16.1849 151.905 17.9463 151.879 19.3886L150.502 19.7077V21.2309H158.827V19.7077L157.691 19.4652C157.666 18.0144 157.648 16.2104 157.648 14.9638V10.2028C158.363 9.70073 159.09 9.41567 159.61 9.41567C160.574 9.41567 160.965 10.0113 160.965 11.5941V14.9638C160.965 16.2274 160.953 17.9761 160.927 19.4014L159.64 19.7077V21.2309H168V19.7077L166.743 19.4524C166.718 18.0186 166.705 16.2444 166.705 14.9638M177.482 7.83293C177.525 7.83293 177.564 7.83293 177.602 7.83293L177.663 9.0838C177.783 11.7089 178.992 12.4833 180.257 12.4833C181.522 12.4833 182.158 11.9472 182.55 10.7516C182.399 8.3052 180.167 6.21615 176.789 6.21615C171.932 6.21615 168.159 9.04976 168.159 14.0022C168.159 18.9546 171.867 21.6989 175.972 21.6989C178.837 21.6989 181.1 20.6225 182.399 18.2058L181.221 17.0698C180.377 17.8782 179.47 18.4739 178.14 18.4739C175.727 18.4739 174.191 16.6529 174.191 13.3427C174.191 9.22421 176.092 7.82442 177.478 7.82442M197.432 14.3383H189.064C189.348 17.2485 190.974 18.4866 192.755 18.4866C194.265 18.4866 195.349 17.891 196.192 17.0826L197.371 18.2186C196.076 20.6352 193.813 21.7117 190.823 21.7117C186.297 21.7117 182.98 18.8483 182.98 13.9256C182.98 9.00296 187.145 6.22892 191.094 6.22892C195.409 6.22892 197.582 9.15188 197.582 12.7641C197.582 13.3895 197.552 13.8065 197.432 14.3468M192.273 10.641C192.273 8.58175 191.52 7.83718 190.733 7.83718C189.799 7.83718 189.107 8.93914 189.021 12.6407H190.432C191.882 12.6407 192.273 12.1642 192.273 10.641Z" fill="#FFFFFF"/>
              <path d="M111.158 4.96946C112.546 4.96946 113.67 3.85701 113.67 2.48473C113.67 1.11245 112.546 0 111.158 0C109.77 0 108.645 1.11245 108.645 2.48473C108.645 3.85701 109.77 4.96946 111.158 4.96946Z" fill="#FFFFFF"/>
            </svg>
              {/* <span className="font-serif font-bold text-xl text-white">Monty Finance</span>
              <span className="text-[#c9a96e] font-serif text-xs font-medium">SAL</span> */}
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
              {/* {[
                { label: 'MyMonty', id: 'about' },
                { label: 'Vision & Mission', id: 'vision' },
                { label: 'Our Ecosystem', id: 'ecosystem' },
                '', 'MyMonty Business', 'MontyPay'
              ].map((platform) => (
                <li key={platform}>
                  <button
                    onClick={() => scrollToSection('ecosystem')}
                    className="text-gray-400 hover:text-[#c9a96e] text-sm transition-colors duration-200"
                  >
                    {platform}
                  </button>
                </li>
              ))} */}

              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    key={link.to}
                    to={link.to}
                    target="_blank"
                    className={`text-gray-400 hover:text-[#c9a96e] text-sm transition-colors duration-200 text-[#3a4a5e] hover:text-[#0f1c2e]`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#c9a96e] transition-all duration-300 w-0 group-hover:w-full'}`} />
                  </Link>
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
                <a href="tel:+9611734020" className="flex items-center gap-3 text-gray-400 hover:text-[#c9a96e] text-sm transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +961 1 734 020
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-6 space-y-4 border-t border-white/10">
        <h4 className="font-semibold text-white text-base">Disclaimer</h4>
        <p className="text-gray-500 text-sm">
          montypay.com provides information about payment acceptance products and services provided by Monty Finance SAL in Lebanon. It also provides information about other services offered in Lebanon and in other jurisdictions by affiliate companies, for which the relevant affiliates remain responsible.
        </p>
        <p className="text-gray-500 text-sm">
          Monty Finance SAL is registered in Lebanon (Beirut Register of Commerce No. 73215), Gefinor Center, Clemenceau St., Hamra, Beirut, Lebanon and is authorized by the Central Bank of Lebanon (“BDL”) to operate as a financial institution and payment service provider. Monty Finance SAL is listed on the BDL List of Financial Institutions under no. 23.
        </p>
        <p className="text-gray-500 text-sm">
          Disclaimermontypay.com provides information about payment acceptance products and services provided by Monty Finance SAL in Lebanon. It also provides information about other services offered in Lebanon and in other jurisdictions by affiliate companies, for which the relevant affiliates remain responsible.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-6 space-y-4 border-t border-white/10">
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
    </footer>
  );
};

export default FooterSection;
