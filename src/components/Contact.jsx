import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Linkedin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-slate-100 dark:bg-slate-900/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Let's <span className="text-green-500">Connect</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-2xl mb-8" />
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I'm always open to new opportunities and interesting collaborations. Feel free to reach out through any of these platforms!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gmail Card */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=devanshdholiya2568@gmail.com"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass-panel p-8 md:p-10 flex flex-col items-center gap-6 group hover:border-green-500/40 transition-all duration-300"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Mail className="text-green-500" size={32} />
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">Send an Email</h3>
              <p className="text-slate-500 text-xs md:text-sm mb-6">Direct communication via Gmail</p>
              <div className="flex items-center justify-center gap-2 text-green-400 font-mono text-xs md:text-sm group-hover:gap-4 transition-all">
                Compose Now <ArrowRight size={16} />
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/devansh-dholiya-274017249/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass-panel p-8 md:p-10 flex flex-col items-center gap-6 group hover:border-[#0A66C2]/40 transition-all duration-300"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0A66C2]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Linkedin className="text-[#0A66C2]" size={32} />
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-slate-500 text-xs md:text-sm mb-6">Connect for professional networking</p>
              <div className="flex items-center justify-center gap-2 text-[#0A66C2] font-mono text-xs md:text-sm group-hover:gap-4 transition-all">
                Visit Profile <ArrowRight size={16} />
              </div>
            </div>
          </motion.a>
        </div>

       
      </div>
    </section>
  );
}
