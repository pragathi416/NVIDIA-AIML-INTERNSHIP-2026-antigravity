import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { portfolioOwner, contactInfoData } from '../data';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Please fill in all fields before sending.');
      setStatus('error');
      return;
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulated network request delay for high fidelity feel
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="text-[#7C3AED]" size={20} />;
      case 'phone': return <Phone className="text-[#22D3EE]" size={20} />;
      case 'location': return <MapPin className="text-[#A855F7]" size={20} />;
      default: return <Mail className="text-[#7C3AED]" size={20} />;
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#09090B] overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[30%] right-[-10%] w-96 h-96 rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#22D3EE]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#7C3AED]" />
            <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAFAFA]">
            Let's Collaborate On Something Awesome
          </h2>
        </div>

        {/* Dual Grid Layout: Contact Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#FAFAFA] tracking-tight mb-4">
                Reach Out Directly
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Have an exciting project, full-time opening, or general technical query? Drop me a message! I usually respond within a few hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfoData.map((info) => (
                <div
                  key={info.type}
                  className="group flex items-center gap-4 p-5 rounded-3xl bg-[#18181B]/40 border border-white/10 backdrop-blur-md hover:border-[#7C3AED]/35 hover:bg-[#18181B]/50 transition-all duration-300 shadow-md"
                >
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {getContactIcon(info.type)}
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                      {info.label}
                    </span>
                    <span className="block text-sm font-semibold text-[#FAFAFA] tracking-tight mt-0.5">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Callout Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#7C3AED]/10 to-[#A855F7]/10 border border-[#7C3AED]/20 mt-2">
              <div className="flex items-center gap-3">
                <Sparkles className="text-[#22D3EE] shrink-0" size={18} />
                <p className="text-xs text-[#E4E4E7] leading-relaxed">
                  Available for freelance contracts, full-time software engineering roles, and system consultancy.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-3xl bg-[#18181B]/40 border border-white/10 backdrop-blur-md overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#7C3AED]/5 blur-2xl pointer-events-none" />

              <h3 className="text-lg font-bold text-[#FAFAFA] tracking-tight mb-8">
                Send A Fast Secure Message
              </h3>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-12 px-4"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 size={36} className="animate-bounce" />
                    </div>
                    <h4 className="text-xl font-bold text-[#FAFAFA] tracking-tight mb-3">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm mb-8">
                      Thank you for reaching out! Your message was delivered safely to Kabir. You will receive an email response shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-[#FAFAFA] hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Input Validation Error */}
                    {status === 'error' && (
                      <div className="flex items-center gap-2.5 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
                        <AlertCircle size={16} className="shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[11px] font-mono font-semibold text-[#A1A1AA] uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Alex Mercer"
                          className="w-full px-4 py-3 rounded-xl bg-[#09090B]/60 border border-white/10 focus:border-[#7C3AED]/40 focus:ring-1 focus:ring-[#7C3AED]/40 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition-all outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[11px] font-mono font-semibold text-[#A1A1AA] uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#09090B]/60 border border-white/10 focus:border-[#7C3AED]/40 focus:ring-1 focus:ring-[#7C3AED]/40 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-[11px] font-mono font-semibold text-[#A1A1AA] uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Collaboration on high-performance product development"
                        className="w-full px-4 py-3 rounded-xl bg-[#09090B]/60 border border-white/10 focus:border-[#7C3AED]/40 focus:ring-1 focus:ring-[#7C3AED]/40 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition-all outline-none"
                      />
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[11px] font-mono font-semibold text-[#A1A1AA] uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Hello Kabir, I'm interested in building a scalable web application for my fintech start-up..."
                        className="w-full px-4 py-3 rounded-xl bg-[#09090B]/60 border border-white/10 focus:border-[#7C3AED]/40 focus:ring-1 focus:ring-[#7C3AED]/40 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition-all outline-none resize-none"
                      />
                    </div>

                    {/* Submit Action */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] font-semibold text-xs text-white shadow-lg shadow-[#7C3AED]/10 hover:shadow-[#7C3AED]/30 disabled:opacity-75 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Send Instant Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
