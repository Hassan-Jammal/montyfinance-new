import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', interest: 'MyMonty', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email required';
    if (!formData.message.trim()) e.message = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) { setSubmitted(true); setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', interest: 'MyMonty', message: '' }); }, 4000); }
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
              <Link to="/careers" className="text-[#3a4a5e] hover:text-[#0f1c2e] text-sm font-medium transition-colors">Careers</Link>
              <Link to="/contact" className="text-[#0f1c2e] font-medium text-sm border-b-2 border-[#c9a96e] pb-0.5">Contact</Link>
            </div>
            <Link to="/contact" className="hidden lg:block bg-[#0f1c2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2d45] transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left */}
              <div>
                <p className="text-[#c9a96e] font-semibold text-sm tracking-widest uppercase mb-4">CONTACT US</p>
                <h1 className="font-serif font-bold text-[#0f1c2e] text-4xl sm:text-5xl mb-6 leading-tight">Get in Touch</h1>
                <p className="text-[#5a6a7e] text-lg leading-relaxed mb-10">Have questions about our platforms? Interested in a partnership? We'd love to hear from you.</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f3f8] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#2d4a9e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    </div>
                    <div><h3 className="font-semibold text-[#0f1c2e] mb-1">Office</h3><p className="text-[#5a6a7e] text-sm">Beirut, Lebanon</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f3f8] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#2d4a9e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </div>
                    <div><h3 className="font-semibold text-[#0f1c2e] mb-1">Email</h3><a href="mailto:info@montyfinance.com" className="text-[#2d4a9e] text-sm hover:underline">info@montyfinance.com</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f3f8] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#2d4a9e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </div>
                    <div><h3 className="font-semibold text-[#0f1c2e] mb-1">Phone</h3><a href="tel:+9611234567" className="text-[#2d4a9e] text-sm hover:underline">+961 1 234 567</a></div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-[#0f1c2e] rounded-2xl">
                  <h3 className="font-bold text-white text-lg mb-2">Business Hours</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <div className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span>9:00 AM - 1:00 PM</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div>
                {submitted ? (
                  <div className="bg-[#f8f9fb] rounded-3xl p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg></div>
                    <h3 className="font-serif font-bold text-[#0f1c2e] text-2xl mb-2">Message Sent!</h3>
                    <p className="text-[#5a6a7e]">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <div className="bg-[#f8f9fb] rounded-3xl p-8 lg:p-10">
                    <h2 className="font-serif font-bold text-[#0f1c2e] text-2xl mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Full Name *</label><input type="text" value={formData.name} onChange={e => { setFormData({...formData, name: e.target.value}); if(errors.name) setErrors({...errors, name: ''}); }} className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:border-[#2d4a9e] text-sm bg-white`} placeholder="Your full name" /></div>
                      <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Email *</label><input type="email" value={formData.email} onChange={e => { setFormData({...formData, email: e.target.value}); if(errors.email) setErrors({...errors, email: ''}); }} className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:border-[#2d4a9e] text-sm bg-white`} placeholder="your@email.com" /></div>
                      <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Company</label><input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2d4a9e] text-sm bg-white" placeholder="Company name" /></div>
                      <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">I'm interested in</label><select value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2d4a9e] text-sm bg-white"><option>MyMonty</option><option>MyMonty Business</option><option>MontyPay</option><option>Partnership</option><option>Other</option></select></div>
                      <div><label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Message *</label><textarea value={formData.message} onChange={e => { setFormData({...formData, message: e.target.value}); if(errors.message) setErrors({...errors, message: ''}); }} rows={5} className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:border-[#2d4a9e] text-sm bg-white resize-none`} placeholder="How can we help?" /></div>
                      <button type="submit" className="w-full bg-[#0f1c2e] text-white py-3.5 rounded-full text-sm font-semibold hover:bg-[#1a2d45] transition-colors">Send Message</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f1c2e] text-white py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div><div className="flex items-center gap-2 mb-4"><span className="font-serif font-bold text-xl">Monty Finance</span><span className="text-[#c9a96e] font-serif text-xs">SAL</span></div><p className="text-gray-400 text-sm">Building the future of digital finance in Lebanon.</p></div>
            <div><h4 className="font-semibold mb-5">Company</h4><ul className="space-y-3 text-sm text-gray-400"><li><Link to="/about" className="hover:text-[#c9a96e]">About Us</Link></li><li><Link to="/ecosystem" className="hover:text-[#c9a96e]">Ecosystem</Link></li><li><Link to="/careers" className="hover:text-[#c9a96e]">Careers</Link></li></ul></div>
            <div><h4 className="font-semibold mb-5">Platforms</h4><ul className="space-y-3 text-sm text-gray-400"><li><Link to="/ecosystem" className="hover:text-[#c9a96e]">MyMonty</Link></li><li><Link to="/ecosystem" className="hover:text-[#c9a96e]">MontyPay</Link></li></ul></div>
            <div><h4 className="font-semibold mb-5">Contact</h4><ul className="space-y-3 text-sm text-gray-400"><li>Beirut, Lebanon</li><li><a href="mailto:info@montyfinance.com" className="hover:text-[#c9a96e]">info@montyfinance.com</a></li><li><a href="tel:+9611234567" className="hover:text-[#c9a96e]">+961 1 234 567</a></li></ul></div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; 2026 Monty Finance SAL. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500"><span className="hover:text-[#c9a96e] cursor-pointer">Privacy Policy</span><span className="hover:text-[#c9a96e] cursor-pointer">Terms of Service</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
