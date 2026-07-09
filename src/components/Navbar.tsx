import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code } from 'lucide-react';
import { portfolioOwner } from '../data';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090B]/60 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleScrollTo('home')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Back to home"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:scale-105 transition-transform">
              <Code className="text-[#FAFAFA]" size={20} />
            </div>
            <div className="text-left">
              <span className="block font-sans font-bold text-base text-[#FAFAFA] tracking-tight leading-none group-hover:text-[#22D3EE] transition-colors">
                {portfolioOwner.name}
              </span>
              <span className="text-[10px] text-[#A1A1AA] font-mono tracking-wider leading-none">
                PORTFOLIO
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#18181B]/40 border border-white/10 rounded-full p-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer focus:outline-none ${
                  activeSection === link.id
                    ? 'text-[#FAFAFA]'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/40 to-[#A855F7]/40 border border-white/10 rounded-full z-[-1]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScrollTo('contact')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-all bg-[#18181B] border border-white/10"
            >
              <div className="absolute inset-0 w-3/12 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500 ease-out z-0 rounded-full" />
              <span className="relative z-10 text-[#FAFAFA] group-hover:text-white transition-colors duration-300">
                Let's Talk
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/5 text-[#FAFAFA] hover:text-[#22D3EE] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Content panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-[320px] bg-[#09090B] border-l border-white/10 p-8 z-50 md:hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-sans font-bold text-lg text-[#FAFAFA] tracking-tight">
                    Navigation
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-white/5 text-[#A1A1AA] hover:text-[#FAFAFA]"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleScrollTo(link.id)}
                      className={`text-left py-2 px-4 rounded-xl text-sm font-medium transition-colors ${
                        activeSection === link.id
                          ? 'bg-[#7C3AED]/20 text-[#22D3EE] border-l-2 border-[#22D3EE]'
                          : 'text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] font-semibold text-xs text-white shadow-lg shadow-[#7C3AED]/20 hover:shadow-[#7C3AED]/40 transition-shadow"
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
