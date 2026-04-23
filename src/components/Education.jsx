import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    institution: "LDRP Institute Of Technology and Research",
    degree: "Master of Computer Applications (MCA)",
    duration: "Aug 2025 - Present",
    location: "Gandhinagar, Gujarat",
    description: "Currently pursuing MCA to deepen my expertise in computer applications, advanced software development, and specialized technologies."
  },
  {
    institution: "CMPICA, CHARUSAT",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "June 2022 - April 2025",
    location: "Changa, Gujarat",
    description: "Focused on foundational computer science principles, web development, and database management. Gained hands-on experience in building various applications."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-100 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-green-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-2xl" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel p-8 relative group hover:border-green-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-2xl blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/10 transition-colors" />
              
              <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row gap-6">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-green-500" size={28} />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-slate-200 dark:bg-slate-800/50 text-green-400 text-[10px] sm:text-xs font-semibold border border-slate-700/50 w-fit mx-auto sm:mx-0">
                      <Calendar size={12} />
                      {edu.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-500 text-[10px] sm:text-xs justify-center">
                      <MapPin size={12} />
                      {edu.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-green-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-green-500 font-medium text-sm mb-4">
                    {edu.institution}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
