import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-28 bg-[#09090B] overflow-hidden">
      {/* Visual backgrounds */}
      <div className="absolute top-[30%] left-[5%] w-72 h-72 rounded-full bg-[#22D3EE]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-72 h-72 rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#22D3EE]" />
            <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest font-semibold">
              Client Appreciations
            </span>
            <span className="h-px w-8 bg-[#22D3EE]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAFAFA]">
            What Clients Say
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mt-4 leading-relaxed">
            Kind words and recommendations from industry leaders and technology partners who have trusted my execution.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-3xl bg-[#18181B]/40 border border-white/10 hover:border-[#7C3AED]/35 hover:bg-[#18181B]/50 backdrop-blur-md flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Card visual layout */}
              <div className="absolute top-6 right-8 text-[#7C3AED]/20 group-hover:text-[#7C3AED]/35 transition-colors">
                <Quote size={40} className="transform rotate-180" />
              </div>

              <div>
                {/* 5-Star Ratings */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#E4E4E7] leading-relaxed italic mb-8 relative z-10">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-[#09090B]">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FAFAFA] tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#A1A1AA] uppercase mt-0.5 tracking-wider">
                    {testimonial.role} at <span className="text-[#22D3EE]">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
