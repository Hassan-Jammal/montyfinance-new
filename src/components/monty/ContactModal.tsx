import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'MyMonty',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '', interest: 'MyMonty' });
        onClose();
      }, 3000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-[#0f1c2e] text-2xl mb-2">Thank You!</h3>
            <p className="text-[#5a6a7e]">We've received your message and will get back to you shortly.</p>
          </div>
        ) : (
          <div className="p-8">
            <h3 className="font-serif font-bold text-[#0f1c2e] text-2xl mb-1">Get in Touch</h3>
            <p className="text-[#5a6a7e] text-sm mb-6">
              Interested in our platforms? Let us know how we can help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:border-[#2d4a9e] transition-colors text-sm`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:border-[#2d4a9e] transition-colors text-sm`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Company (Optional)</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2d4a9e] transition-colors text-sm"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">I'm interested in</label>
                <select
                  value={formData.interest}
                  onChange={(e) => handleChange('interest', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2d4a9e] transition-colors text-sm bg-white"
                >
                  <option value="MyMonty">MyMonty - Personal Wallet</option>
                  <option value="MyMonty Business">MyMonty Business</option>
                  <option value="MontyPay">MontyPay - Payment Solutions</option>
                  <option value="Partnership">Partnership Opportunities</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f1c2e] mb-1.5">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:border-[#2d4a9e] transition-colors text-sm resize-none`}
                  placeholder="Tell us about your needs..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#0f1c2e] text-white py-3.5 rounded-full text-sm font-semibold hover:bg-[#1a2d45] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
