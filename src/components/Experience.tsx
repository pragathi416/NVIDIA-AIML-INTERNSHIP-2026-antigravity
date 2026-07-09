import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Building, Sparkles } from 'lucide-react';
import { experiencesData } from '../data';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 bg-[#09090B] overflow-hidden">
      {/* Dynamic atmospheric backgrounds */}
      <div className="absolute top-[30%] right-[10%] w-80 h-80 rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-80 h-80 rounded-full bg-[#A855F7]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#A855F7]" />
            <span className="text-xs font-mono text-[#A855F7] uppercase tracking-widest font-semibold">
              Professional Journey
            </span>
            <span className="h-px w-8 bg-[#A855F7]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAFAFA]">
            Experience Timeline
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mt-4 leading-relaxed">
            A comprehensive look at my professional engineering roles, core contributions, and technology domains.
          </p>
        </div>

        {/* Timeline Grid Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 md:ml-32 py-4 space-y-12">
          {/* Timeline continuous gradient line tracking */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#A855F7] to-[#22D3EE] z-0" />

          {experiencesData.map((job, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[1px] top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="relative h-4 w-4 rounded-full bg-[#09090B] border border-[#7C3AED] flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]"
                  />
                </div>
              </div>

              {/* Offset Time Indicator (Visible on MD and larger screens) */}
              <div className="absolute -left-36 top-5 hidden md:block w-28 text-right">
                <span className="text-xs font-mono font-bold text-[#A1A1AA] uppercase tracking-wider group-hover:text-[#22D3EE] transition-colors">
                  {job.duration}
                </span>
              </div>

              {/* Job Card (Slides in with Framer Motion) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="ml-6 sm:ml-8 p-6 rounded-3xl bg-[#18181B]/40 border border-white/10 backdrop-blur-md hover:border-[#7C3AED]/35 hover:bg-[#18181B]/50 transition-all shadow-xl"
              >
                {/* Mobile-only duration indicator */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider md:hidden mb-4">
                  <Calendar size={10} />
                  <span>{job.duration}</span>
                </div>

                {/* Company & Role Details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#FAFAFA] tracking-tight group-hover:text-[#22D3EE] transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#A1A1AA] mt-1 font-mono">
                      <Building size={12} className="text-[#7C3AED]" />
                      <span className="text-[#E4E4E7] font-semibold">{job.company}</span>
                    </div>
                  </div>
                </div>

                {/* Role description */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#A855F7] hover:bg-[#7C3AED]/20 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
