import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Sparkles, Folder, Eye } from 'lucide-react';
import { projectsData } from '../data';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'SaaS Dashboard',
    'E-commerce Platform',
    'AI Assistant',
    'Portfolio Website',
    'Task Manager',
    'Analytics Dashboard'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 bg-[#09090B] overflow-hidden">
      {/* Dynamic atmospheric backdrops */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#22D3EE]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#7C3AED]" />
              <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest font-semibold">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAFAFA]">
              Projects Showcase
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 max-w-2xl bg-[#18181B]/40 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-3 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all focus:outline-none cursor-pointer ${
                  selectedCategory === category
                    ? 'text-[#FAFAFA]'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                }`}
              >
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-xl z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={project.title}
                className="group relative rounded-3xl bg-[#18181B]/40 border border-white/10 hover:border-[#7C3AED]/35 hover:bg-[#18181B]/50 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Image Placeholder Frame */}
                <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-[#09090B]">
                  {/* Subtle glassmorphic overlay on image hover */}
                  <div className="absolute inset-0 bg-[#09090B]/40 group-hover:bg-[#09090B]/10 transition-colors duration-300 z-10" />

                  {/* Gradient Light Spill */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#7C3AED]/10 blur-xl group-hover:bg-[#7C3AED]/20 transition-all duration-300" />

                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Category Label Overlay */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#09090B]/90 border border-white/10 text-[#22D3EE] backdrop-blur-md shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#FAFAFA] tracking-tight group-hover:text-[#22D3EE] transition-colors mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges & Actions */}
                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#E4E4E7]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#7C3AED]/25 hover:border-[#7C3AED]/30 transition-all cursor-pointer"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-xs font-semibold text-white shadow-md shadow-[#7C3AED]/10 hover:shadow-[#7C3AED]/30 hover:-translate-y-0.5 transition-all cursor-pointer"
                      >
                        <ExternalLink size={14} />
                        <span>Live Preview</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
