import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const jobs = [
  { id: 1, title: 'Senior Backend Engineer', dept: 'Engineering', type: 'Full-time', location: 'Beirut', desc: 'Build and scale our core financial infrastructure, APIs, and microservices powering MyMonty and MontyPay platforms.' },
  { id: 2, title: 'Product Designer (UX/UI)', dept: 'Design', type: 'Full-time', location: 'Beirut', desc: 'Design intuitive, user-centric interfaces for our digital wallet and payment platforms that serve thousands of users daily.' },
  { id: 3, title: 'Compliance Analyst', dept: 'Legal & Compliance', type: 'Full-time', location: 'Beirut', desc: 'Ensure regulatory compliance with BDL requirements and international financial standards across all platforms.' },
  { id: 4, title: 'Mobile Developer (React Native)', dept: 'Engineering', type: 'Full-time', location: 'Beirut / Remote', desc: 'Develop and maintain our cross-platform mobile applications for MyMonty personal and business wallets.' },
  { id: 5, title: 'Business Development Manager', dept: 'Commercial', type: 'Full-time', location: 'Beirut', desc: 'Drive merchant acquisition and partnership growth for MontyPay across Lebanon and the MENA region.' },
  { id: 6, title: 'Data Analyst', dept: 'Analytics', type: 'Full-time', location: 'Beirut / Remote', desc: 'Analyze transaction data, user behavior, and market trends to drive product decisions and business strategy.' },
  { id: 7, title: 'Customer Success Lead', dept: 'Operations', type: 'Full-time', location: 'Beirut', desc: 'Lead our customer support team and ensure exceptional service for both individual and business users.' },
  { id: 8, title: 'DevOps Engineer', dept: 'Engineering', type: 'Full-time', location: 'Remote', desc: 'Manage cloud infrastructure, CI/CD pipelines, and ensure 99.99% uptime for our financial platforms.' },
];

const values = [
  { title: 'Innovation First', desc: 'We push boundaries to create financial solutions that didn\'t exist before.', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
  { title: 'Inclusive Culture', desc: 'We celebrate diversity and believe the best ideas come from different perspectives.', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
  { title: 'Growth Mindset', desc: 'We invest in our people with learning opportunities, mentorship, and career development.', icon: 'M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' },
  { title: 'Impact Driven', desc: 'Every line of code, every design, every decision is made to improve financial lives.', icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3' },
];

const Careers: React.FC = () => {
  const [filterDept, setFilterDept] = useState('All');
  const [applyingTo, setApplyingTo] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume: '', cover: '' });
  const [submitted, setSubmitted] = useState(false);

  const departments = ['All', ...Array.from(new Set(jobs.map(j => j.dept)))];
  const filtered = filterDept === 'All' ? jobs : jobs.filter(j => j.dept === filterDept);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setApplyingTo(null); setFormData({ name: '', email: '', phone: '', resume: '', cover: '' }); }, 3000);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2"><span className="font-serif font-bold text-2xl text-[#0f1c2e]">Monty Finance</span><span className="text-[#c9a96e] font-serif text-sm font-medium">SAL</span></Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/about" className="text-[#3a4a5e] hover:text-[#0f1c2e] text-sm font-medium transition-colors">About</Link>
              <Link to="/ecosystem" className="text-[#3a4a5e] hover:text-[#0f1c2e] text-sm font-medium transition-colors">Ecosystem</Link>
              <Link to="/careers" className="text-[#0f1c2e] font-medium text-sm border-b-2 border-[#c9a96e] pb-0.5">Careers</Link>
              <Link to="/contact" className="text-[#3a4a5e] hover:text-[#0f1c2e] text-sm font-medium transition-colors">Contact</Link>
            </div>
            <Link to="/contact" className="hidden lg:block bg-[#0f1c2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2d45] transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#0f1c2e] py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-[#c9a96e] font-semibold text-sm tracking-widest uppercase mb-4">CAREERS</p>
            <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl mb-6">Build the Future With Us</h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">Join a team that's reshaping digital finance in Lebanon. We're looking for passionate people who want to make a real impact.</p>
            <div className="flex justify-center gap-8 mt-10">
              <div className="text-center"><p className="text-white font-bold text-3xl">50+</p><p className="text-gray-400 text-sm">Team Members</p></div>
              <div className="text-center"><p className="text-white font-bold text-3xl">3</p><p className="text-gray-400 text-sm">Platforms</p></div>
              <div className="text-center"><p className="text-white font-bold text-3xl">8</p><p className="text-gray-400 text-sm">Open Roles</p></div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20 bg-[#f8f9fb]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#c9a96e] font-semibold text-sm tracking-widest uppercase mb-4">OUR CULTURE</p>
              <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl lg:text-4xl">Why Work at Monty Finance</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#0f1c2e] flex items-center justify-center text-[#c9a96e] mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d={v.icon} /></svg>
                  </div>
                  <h3 className="font-bold text-[#0f1c2e] text-lg mb-2">{v.title}</h3>
                  <p className="text-[#5a6a7e] text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl lg:text-4xl text-center mb-14">Benefits & Perks</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Competitive Salary', desc: 'Market-leading compensation packages with performance bonuses.' },
                { title: 'Health Insurance', desc: 'Comprehensive medical coverage for you and your family.' },
                { title: 'Flexible Work', desc: 'Hybrid and remote options to support work-life balance.' },
                { title: 'Learning Budget', desc: 'Annual budget for courses, conferences, and certifications.' },
                { title: 'Team Events', desc: 'Regular team outings, retreats, and social activities.' },
                { title: 'Career Growth', desc: 'Clear advancement paths and mentorship programs.' },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#f8f9fb]">
                  <div className="w-10 h-10 rounded-lg bg-[#2d4a9e] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div><h3 className="font-semibold text-[#0f1c2e] mb-1">{b.title}</h3><p className="text-[#5a6a7e] text-sm">{b.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 bg-[#f8f9fb]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-[#c9a96e] font-semibold text-sm tracking-widest uppercase mb-4">OPEN POSITIONS</p>
              <h2 className="font-serif font-bold text-[#0f1c2e] text-3xl lg:text-4xl">Join Our Team</h2>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {departments.map(d => (
                <button key={d} onClick={() => setFilterDept(d)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterDept === d ? 'bg-[#0f1c2e] text-white' : 'bg-white text-[#3a4a5e] hover:bg-gray-100 border border-gray-200'}`}>{d}</button>
              ))}
            </div>

            <div className="space-y-4">
              {filtered.map(job => (
                <div key={job.id} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0f1c2e] text-lg">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="text-xs bg-[#f0f3f8] text-[#2d4a9e] px-3 py-1 rounded-full font-medium">{job.dept}</span>
                        <span className="text-xs bg-[#f0f3f8] text-[#5a6a7e] px-3 py-1 rounded-full">{job.type}</span>
                        <span className="text-xs bg-[#f0f3f8] text-[#5a6a7e] px-3 py-1 rounded-full">{job.location}</span>
                      </div>
                      <p className="text-[#5a6a7e] text-sm mt-3">{job.desc}</p>
                    </div>
                    <button onClick={() => setApplyingTo(job.id)} className="bg-[#0f1c2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2d45] transition-colors whitespace-nowrap">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Application Modal */}
      {applyingTo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setApplyingTo(null)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-in">
            <button onClick={() => setApplyingTo(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200" aria-label="Close">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {submitted ? (
              <div className="p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg></div>
                <h3 className="font-serif font-bold text-[#0f1c2e] text-2xl mb-2">Application Submitted!</h3>
                <p className="text-[#5a6a7e]">Thank you for your interest. Our team will review your application and get back to you soon.</p>
              </div>
            ) : (
              <div className="p-8">
                <h3 className="font-serif font-bold text-[#0f1c2e] text-2xl mb-1">Apply for {jobs.find(j => j.id === applyingTo)?.title}</h3>
                <p className="text-[#5a6a7e] text-sm mb-6">Fill in your details below to submit your application.</p>
                <form onSubmit={handleApply} className="space-y-4">
                  <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Full Name *</label><input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2d4a9e] text-sm" placeholder="Your full name" /></div>
                  <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Email *</label><input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2d4a9e] text-sm" placeholder="your@email.com" /></div>
                  <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Phone</label><input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2d4a9e] text-sm" placeholder="+961 XX XXX XXX" /></div>
                  <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Resume/LinkedIn URL *</label><input type="url" required value={formData.resume} onChange={e => setFormData({...formData, resume: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2d4a9e] text-sm" placeholder="https://linkedin.com/in/..." /></div>
                  <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Cover Letter</label><textarea value={formData.cover} onChange={e => setFormData({...formData, cover: e.target.value})} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2d4a9e] text-sm resize-none" placeholder="Tell us why you'd be a great fit..." /></div>
                  <button type="submit" className="w-full bg-[#0f1c2e] text-white py-3.5 rounded-full text-sm font-semibold hover:bg-[#1a2d45] transition-colors">Submit Application</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="bg-[#0f1c2e] text-white py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div><div className="flex items-center gap-2 mb-4"><span className="font-serif font-bold text-xl">Monty Finance</span><span className="text-[#c9a96e] font-serif text-xs">SAL</span></div><p className="text-gray-400 text-sm">Building the future of digital finance in Lebanon.</p></div>
            <div><h4 className="font-semibold mb-5">Company</h4><ul className="space-y-3 text-sm text-gray-400"><li><Link to="/about" className="hover:text-[#c9a96e]">About Us</Link></li><li><Link to="/ecosystem" className="hover:text-[#c9a96e]">Ecosystem</Link></li></ul></div>
            <div><h4 className="font-semibold mb-5">Platforms</h4><ul className="space-y-3 text-sm text-gray-400"><li><Link to="/ecosystem" className="hover:text-[#c9a96e]">MyMonty</Link></li><li><Link to="/ecosystem" className="hover:text-[#c9a96e]">MontyPay</Link></li></ul></div>
            <div><h4 className="font-semibold mb-5">Contact</h4><ul className="space-y-3 text-sm text-gray-400"><li>Beirut, Lebanon</li><li><a href="mailto:careers@montyfinance.com" className="hover:text-[#c9a96e]">careers@montyfinance.com</a></li></ul></div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">&copy; 2026 Monty Finance SAL. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
