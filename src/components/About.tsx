import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Briefcase, Sparkles, User, Trophy, Award, Users } from 'lucide-react';
import { portfolioOwner } from '../data';

export const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: Briefcase, color: 'text-[#7C3AED]' },
    { label: 'Projects Completed', value: '30+', icon: Trophy, color: 'text-[#22D3EE]' },
    { label: 'Happy Clients', value: '15+', icon: Users, color: 'text-[#A855F7]' },
    { label: 'Core Technologies', value: '12+', icon: Award, color: 'text-amber-400' }
  ];

  const highlights = [
    'Specialized in complex React, Next.js, and Express architectures',
    'Proven track record reducing load times and optimizing database schemas',
    'Passionate about responsive layouts, deep accessibility, and clean typography',
    'Experienced working in agile, collaborative team structures globally'
  ];

  return (
    <section id="about" className="relative py-28 bg-[#09090B] overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-[40%] right-[5%] w-72 h-72 rounded-full bg-[#A855F7]/5 blur-[120px] z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-[#7C3AED]/5 blur-[120px] z-0" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#7C3AED]" />
            <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest font-semibold">
              Meet Pragathi
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAFAFA]">
            Engineering Beautiful & Scalable Digital Products
          </h2>
        </div>

        {/* Responsive Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story, Highlights & Stats */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-[#FAFAFA] mb-6 flex items-center gap-2">
                <User size={20} className="text-[#22D3EE]" />
                <span>My Creative Story</span>
              </h3>
              <p className="text-base text-[#A1A1AA] leading-relaxed mb-6">
                Hello! I am a software engineer based in Bengaluru, the silicon valley of India. I craft modern applications combining high-performance code pipelines with responsive, meticulously balanced user designs.
              </p>
              <p className="text-base text-[#A1A1AA] leading-relaxed mb-8">
                Throughout my professional journey, I have had the privilege to build multi-tenant SaaS dashboards, edge-computed headless storefronts, and automated full stack integrations. I focus deeply on high-standard UI systems inspired by giants like Vercel and Apple.
              </p>

              {/* Achievements Bullet List */}
              <div className="space-y-4 mb-10">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-md bg-[#7C3AED]/10 border border-[#7C3AED]/25 flex items-center justify-center shrink-0">
                      <Sparkles size={12} className="text-[#22D3EE]" />
                    </div>
                    <span className="text-sm text-[#E4E4E7] leading-tight">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Statistics Cards Bento Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 rounded-3xl bg-[#18181B]/40 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#7C3AED]/35 hover:bg-[#18181B]/50 transition-all shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                        {stat.label}
                      </span>
                      <StatIcon className={`${stat.color}`} size={18} />
                    </div>
                    <span className="text-3xl font-extrabold text-[#FAFAFA] tracking-tight">
                      {stat.value}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Premium Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-6 rounded-3xl bg-[#18181B]/40 border border-white/10 backdrop-blur-md max-w-sm w-full group overflow-hidden shadow-2xl"
            >
              {/* Card Inner Background Mesh */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#22D3EE]/5 opacity-50 z-0" />

              {/* Glowing Outer Light Rings */}
              <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#7C3AED]/20 blur-2xl group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-[#22D3EE]/10 blur-2xl group-hover:scale-125 transition-transform duration-500" />

              {/* Aesthetic Custom Profile Avatar Holder */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-6">
                  {/* Rotating visual rings */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#A855F7] to-[#22D3EE] animate-spin opacity-75 blur-[2px]" style={{ animationDuration: '8s' }} />
                  <div className="absolute -inset-0.5 rounded-full bg-[#18181B] z-0" />
                  
                  {/* Avatar Frame with High-Quality Silhouette Image */}
                  <div className="relative h-44 w-44 rounded-full overflow-hidden border border-white/10 bg-[#09090B] flex items-center justify-center z-10">
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400&q=80"
                      alt={portfolioOwner.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover grayscale brightness-90 contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Status Badges */}
                <div className="flex flex-col gap-3.5 w-full pt-4 border-t border-white/5">
                  {/* Title & Role */}
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-[#FAFAFA] tracking-tight">
                      {portfolioOwner.name}
                    </h4>
                    <p className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest mt-1">
                      {portfolioOwner.profession}
                    </p>
                  </div>

                  {/* Availability Badge */}
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-300">
                      Active & Available for Projects
                    </span>
                  </div>

                  {/* Location Badge */}
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
                    <MapPin size={14} className="text-[#7C3AED]" />
                    <span className="text-xs text-[#E4E4E7]">
                      Based in {portfolioOwner.location}
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
                    <Briefcase size={14} className="text-[#A855F7]" />
                    <span className="text-xs text-[#E4E4E7]">
                      Full Stack, 5+ Years Active Dev
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
