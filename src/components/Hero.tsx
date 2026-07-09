import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, ArrowDown, FileText, ChevronRight } from 'lucide-react';
import { portfolioOwner } from '../data';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for interactive glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B] pt-24 pb-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 z-0" />

      {/* 2. Interactive Mouse Glow Accent */}
      {isHovered && (
        <div
          className="pointer-events-none absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#7C3AED]/12 to-[#22D3EE]/12 blur-[100px] transition-all duration-300 ease-out z-10"
          style={{
            left: `${mousePos.x - 200}px`,
            top: `${mousePos.y - 200}px`,
            transform: 'translate3d(0,0,0)',
            position: 'fixed' // Ensures proper reference relative to viewport
          }}
        />
      )}

      {/* 3. Floating Glow Blobs */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-[#7C3AED]/10 blur-[80px] animate-float-slow z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#22D3EE]/8 blur-[100px] animate-float-delayed z-0" />

      {/* Hero Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center z-20 flex flex-col items-center">
        {/* Animated Greeting Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
          <span className="text-xs font-mono text-[#22D3EE] tracking-wide uppercase">
            Available For Remote & Global Opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#FAFAFA] max-w-4xl leading-[1.1] mb-6"
        >
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE]">{portfolioOwner.name}</span>
          <br />
          <span className="text-3xl sm:text-5xl md:text-6xl text-[#E4E4E7] font-sans">
            {portfolioOwner.headline}
          </span>
        </motion.h1>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-10"
        >
          {portfolioOwner.shortBio}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full justify-center"
        >
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] font-semibold text-sm text-white shadow-[0_10px_30px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View My Work</span>
            <ChevronRight size={16} />
          </button>

          <a
            href={portfolioOwner.resumeUrl}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#18181B] border border-white/10 text-[#FAFAFA] font-semibold text-sm hover:bg-[#27272A] hover:border-white/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FileText size={16} className="text-[#22D3EE]" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Accounts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-6"
        >
          <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-widest mr-2">
            Socials
          </span>
          <a
            href={portfolioOwner.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={portfolioOwner.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#22D3EE]/20 hover:border-[#22D3EE]/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={portfolioOwner.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#A855F7]/20 hover:border-[#A855F7]/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300"
            aria-label="Twitter Profile"
          >
            <Twitter size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* 4. Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={handleScrollToProjects}
        >
          <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
            Scroll To Explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
