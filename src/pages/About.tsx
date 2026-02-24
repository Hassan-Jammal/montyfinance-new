import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif font-bold text-2xl text-[#0f1c2e]">Monty Finance</span>
              <span className="text-[#c9a96e] font-serif text-sm font-medium">SAL</span>
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/about" className="text-[#0f1c2e] font-medium text-sm border-b-2 border-[#c9a96e] pb-0.5">About</Link>
              <Link to="/ecosystem" className="text-[#3a4a5e] hover:text-[#0f1c2e] text-sm font-medium transition-colors">Ecosystem</Link>
              <Link to="/careers" className="text-[#3a4a5e] hover:text-[#0f1c2e] text-sm font-medium transition-colors">Careers</Link>
              <Link to="/contact" className="text-[#3a4a5e] hover:text-[#0f1c2e] text-sm font-medium transition-colors">Contact</Link>
            </div>
            <Link to="/contact" className="hidden lg:block bg-[#0f1c2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2d45] transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#f8f9fb] py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-[#c9a96e] font-semibold text-sm tracking-widest uppercase mb-4">ABOUT US</p>
            <h1 className="font-serif font-bold text-[#0f1c2e] text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight">Monty Finance SAL</h1>
            <p className="text-[#5a6a7e] text-xl leading-relaxed">A Lebanese financial services company licensed by BDL and dedicated to building the future of digital finance in the region.</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
            <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl lg:text-4xl">Our Story</h2>
            <p className="text-[#5a6a7e] text-lg leading-relaxed">Monty Finance SAL is a Lebanese financial services company licensed by BDL and dedicated to building the future of digital finance in the region. We design and scale digital finance platforms anchored by MyMonty and MontyPay, that simplify the way people pay, move money, and manage their financial lives.</p>
            <p className="text-[#5a6a7e] text-lg leading-relaxed">Our role goes beyond technology. We design regulated, secure, and user-centric financial solutions that respond to real-world needs, from personal money management to business payments and growth.</p>
            <p className="text-[#5a6a7e] text-lg leading-relaxed">With a strong foundation in compliance, innovation, and market understanding, Monty Finance SAL serves as the backbone of a growing ecosystem of digital financial products for individuals, merchants, and enterprises across Lebanon and beyond.</p>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20 bg-[#f8f9fb]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-[#c9a96e] font-semibold text-sm tracking-widest uppercase mb-4">OUR APPROACH</p>
              <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl lg:text-4xl mb-6">Shaping the Future of Digital Finance in Lebanon</h2>
              <p className="text-[#5a6a7e] text-lg max-w-3xl mx-auto">At Monty Finance SAL, we believe that access to financial services is a fundamental right. Built on decades of local and international experience across leading financial and consulting institutions, our team brings deep insight into the realities people and businesses face in Lebanon.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Practical Solutions', desc: 'Designing relevant and forward-thinking financial solutions that respond to real needs.', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
                { title: 'Opening Doors', desc: 'Breaking down complexity and barriers to give individuals and merchants freedom to move, pay, and grow.', icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
                { title: 'Lasting Value', desc: "Every product we launch is designed to create lasting value and make a tangible impact on Lebanon's financial landscape.", icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' },
                { title: 'Compliance First', desc: 'Strong foundation in compliance, innovation, and market understanding to ensure security and trust.', icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#0f1c2e] flex items-center justify-center text-[#c9a96e] mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d={card.icon} /></svg>
                  </div>
                  <h3 className="font-bold text-[#0f1c2e] text-lg mb-3">{card.title}</h3>
                  <p className="text-[#5a6a7e] text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#c9a96e] font-semibold text-sm tracking-widest uppercase mb-4">VISION & MISSION</p>
              <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl lg:text-4xl">Guided by Purpose</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#f0f3f8] rounded-3xl p-8 lg:p-10">
                <div className="w-14 h-14 rounded-2xl bg-[#0f1c2e] flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
                </div>
                <h3 className="font-bold text-[#0f1c2e] text-2xl mb-4">Our Vision</h3>
                <p className="text-[#5a6a7e] text-base leading-relaxed">An inclusive financial future where every person can access essential financial services and every business can grow without barriers.</p>
              </div>
              <div className="bg-[#f0f3f8] rounded-3xl p-8 lg:p-10">
                <div className="w-14 h-14 rounded-2xl bg-[#0f1c2e] flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="font-bold text-[#0f1c2e] text-2xl mb-4">Our Mission</h3>
                <p className="text-[#5a6a7e] text-base leading-relaxed">To empower people with simple, secure digital finance and equip Lebanese businesses with modern payment solutions, reshaping Lebanon's financial landscape with impact and purpose.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto bg-[#0f1c2e] rounded-3xl p-8 lg:p-14">
            <div className="text-center mb-8">
              <span className="inline-block bg-white text-[#0f1c2e] px-5 py-2 rounded-full text-sm font-semibold mb-6">OUR COMMITMENT</span>
              <h2 className="font-serif font-bold text-white text-2xl sm:text-3xl lg:text-4xl">Building Meaningful Financial Infrastructure</h2>
            </div>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="border-l-4 border-white/30 pl-6">
                <p className="text-gray-300 text-base leading-relaxed">In a market where complexity and barriers have long limited access, we are committed to opening doors. We build platforms that simplify finance, restore confidence, and give individuals and merchants the freedom to move, pay, and grow with ease.</p>
              </div>
              <div className="border-l-4 border-white/30 pl-6">
                <p className="text-gray-300 text-base leading-relaxed">Our ambition is clear: to ensure that Lebanese people, residents, and the wider diaspora can access essential financial services without friction, wherever they are and whenever they need them.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 mt-8">
                <p className="text-gray-200 text-base leading-relaxed italic">"Guided by the visionary leadership of Mountasser Hachem, Chairman of Monty Holding, Monty Finance SAL was founded with a clear purpose: to build meaningful financial infrastructure that drives progress. We are shaping a more connected, resilient, and accessible future for finance in Lebanon and beyond."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-[#f8f9fb]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#c9a96e] font-semibold text-sm tracking-widest uppercase mb-4">LEADERSHIP</p>
              <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl lg:text-4xl">Our Leadership Team</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Mountasser Hachem', role: 'Chairman, Monty Holding', desc: 'Visionary leader driving the strategic direction of the Monty Finance ecosystem.' },
                { name: 'Ahmad Khalil', role: 'Chief Executive Officer', desc: 'Leading operational excellence and growth strategy across all platforms.' },
                { name: 'Nadia Saab', role: 'Chief Financial Officer', desc: 'Ensuring financial integrity, compliance, and sustainable growth.' },
                { name: 'Rami Haddad', role: 'Chief Technology Officer', desc: 'Architecting the technology infrastructure powering our digital platforms.' },
                { name: 'Sara El-Khoury', role: 'Head of Compliance', desc: 'Maintaining regulatory excellence and BDL compliance standards.' },
                { name: 'Omar Fares', role: 'VP of Product', desc: 'Shaping user-centric products that simplify financial experiences.' },
              ].map((person, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0f1c2e] to-[#2d4a9e] flex items-center justify-center text-white font-bold text-xl mb-4">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-[#0f1c2e] text-lg">{person.name}</h3>
                  <p className="text-[#c9a96e] text-sm font-medium mb-3">{person.role}</p>
                  <p className="text-[#5a6a7e] text-sm leading-relaxed">{person.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1c2e] text-white py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-serif font-bold text-xl">Monty Finance</span>
                <span className="text-[#c9a96e] font-serif text-xs">SAL</span>
              </div>
              <p className="text-gray-400 text-sm">Building the future of digital finance in Lebanon. Licensed by BDL.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-[#c9a96e] transition-colors">About Us</Link></li>
                <li><Link to="/ecosystem" className="hover:text-[#c9a96e] transition-colors">Ecosystem</Link></li>
                <li><Link to="/careers" className="hover:text-[#c9a96e] transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Platforms</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/ecosystem" className="hover:text-[#c9a96e] transition-colors">MyMonty</Link></li>
                <li><Link to="/ecosystem" className="hover:text-[#c9a96e] transition-colors">MyMonty Business</Link></li>
                <li><Link to="/ecosystem" className="hover:text-[#c9a96e] transition-colors">MontyPay</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Beirut, Lebanon</li>
                <li><a href="mailto:info@montyfinance.com" className="hover:text-[#c9a96e]">info@montyfinance.com</a></li>
                <li><a href="tel:+9611234567" className="hover:text-[#c9a96e]">+961 1 234 567</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; 2026 Monty Finance SAL. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <span className="hover:text-[#c9a96e] cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#c9a96e] cursor-pointer">Terms of Service</span>
              <span className="hover:text-[#c9a96e] cursor-pointer">Compliance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
