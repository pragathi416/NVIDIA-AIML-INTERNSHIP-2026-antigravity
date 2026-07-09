import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Code, Database, Compass, CheckCircle } from 'lucide-react';
import { skillsData } from '../data';
import { IconMapper } from './IconMapper';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools'>('All');

  const categories: ('All' | 'Frontend' | 'Backend' | 'Database' | 'Tools')[] = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Tools'
  ];

  // Helper icons for categories
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Frontend': return <Code size={14} />;
      case 'Backend': return <Terminal size={14} />;
      case 'Database': return <Database size={14} />;
      case 'Tools': return <Compass size={14} />;
      default: return <Sparkles size={14} />;
    }
  };

  const filteredSkills = activeTab === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="relative py-28 bg-[#09090B] overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 rounded-full bg-[#7C3AED]/5 blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 rounded-full bg-[#22D3EE]/5 blur-[120px] z-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#22D3EE]" />
              <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest font-semibold">
                Core Abilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAFAFA]">
              My Technical Stack
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-2 bg-[#18181B]/40 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all focus:outline-none cursor-pointer ${
                  activeTab === cat
                    ? 'text-[#FAFAFA]'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                }`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeSkillsTab"
                    className="absolute inset-0 bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-xl z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {getCategoryIcon(cat)}
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4 }}
                key={skill.name}
                className="group relative p-5 rounded-3xl bg-[#18181B]/40 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#22D3EE]/35 hover:bg-[#18181B]/50 transition-all overflow-hidden shadow-lg"
              >
                {/* Glowing inner shadow border on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#22D3EE]/0 to-[#22D3EE]/5 blur-xl group-hover:from-[#22D3EE]/5 transition-all duration-300" />

                {/* Skill Title & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FAFAFA] group-hover:bg-[#22D3EE]/10 group-hover:border-[#22D3EE]/25 group-hover:text-[#22D3EE] transition-all">
                      <IconMapper name={skill.iconName} size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#FAFAFA] tracking-tight mb-2">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress bar logic */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="text-[#A1A1AA] font-mono">Proficiency</span>
                    <span className="text-[#FAFAFA] font-bold font-mono">{skill.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#09090B] border border-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE]"
                    />
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
export default Skills;
