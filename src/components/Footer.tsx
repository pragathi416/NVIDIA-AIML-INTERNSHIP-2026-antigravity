import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, ArrowUp, Code } from 'lucide-react';
import { portfolioOwner } from '../data';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="relative bg-[#09090B] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Absolute decorative gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 rounded-full bg-[#7C3AED]/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 flex flex-col items-center">
        {/* Animated divider with gradient */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center">
              <Code className="text-white" size={16} />
            </div>
            <div className="text-left">
              <span className="block font-sans font-bold text-sm text-[#FAFAFA] tracking-tight leading-none">
                {portfolioOwner.name}
              </span>
              <span className="text-[9px] text-[#A1A1AA] font-mono tracking-wider leading-none">
                BUILDING DIGITAL FUTURES
              </span>
            </div>
          </div>

          {/* Center: Quick Section Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-xs text-[#A1A1AA] hover:text-[#22D3EE] transition-colors cursor-pointer focus:outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right: Floating Social Accounts */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioOwner.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-lg bg-[#18181B]/40 border border-white/10 text-[#A1A1AA] hover:text-white hover:bg-[#18181B]/60 flex items-center justify-center transition-all"
              aria-label="GitHub Link"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolioOwner.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-lg bg-[#18181B]/40 border border-white/10 text-[#A1A1AA] hover:text-white hover:bg-[#18181B]/60 flex items-center justify-center transition-all"
              aria-label="LinkedIn Link"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={portfolioOwner.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-lg bg-[#18181B]/40 border border-white/10 text-[#A1A1AA] hover:text-white hover:bg-[#18181B]/60 flex items-center justify-center transition-all"
              aria-label="Twitter Link"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Lower footer: Copyright & Scroll to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-[11px] font-mono text-[#A1A1AA] text-center sm:text-left">
            &copy; {new Date().getFullYear()} {portfolioOwner.name}. Designed & engineered to premium standards.
          </p>

          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
