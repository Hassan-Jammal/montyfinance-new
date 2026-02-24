import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onContactClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Ecosystem', to: '/ecosystem' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-serif font-bold text-2xl text-[#0f1c2e] tracking-tight">Monty Finance</span>
            <span className="text-[#c9a96e] font-serif text-sm font-medium">SAL</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 relative group ${location.pathname === link.to ? 'text-[#0f1c2e]' : 'text-[#3a4a5e] hover:text-[#0f1c2e]'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#c9a96e] transition-all duration-300 ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {onContactClick ? (
              <button onClick={onContactClick} className="bg-[#0f1c2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2d45] transition-colors duration-200">Get Started</button>
            ) : (
              <Link to="/contact" className="bg-[#0f1c2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2d45] transition-colors duration-200">Get Started</Link>
            )}
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-[#0f1c2e]" aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>) : (<><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>)}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)} className="block w-full text-left text-[#3a4a5e] hover:text-[#0f1c2e] py-2 text-base font-medium transition-colors">{link.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-[#0f1c2e] text-white px-6 py-3 rounded-full text-sm font-medium text-center hover:bg-[#1a2d45] transition-colors mt-2">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
