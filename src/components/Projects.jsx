import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, User, Store, Wallet, ChefHat,ArrowRight } from 'lucide-react';

const Github = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const projects = [
  {
    title: "MyMeal App",
    description: "A comprehensive meal planner and subscription-based application. Featuring distinct portals for users and vendors. Built with the full MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/DEVANSHDHOLIYA",
    bgColor: "from-orange-500/20 to-orange-500/5",
    icon: <ChefHat className="text-orange-500" size={56} />,
    links: [
      { name: "User App", url: "https://mymealuser.vercel.app", icon: <User size={14} /> },
      { name: "Vendor App", url: "https://mymealvendor.vercel.app", icon: <Store size={14} /> }
    ],
  },
  {
    title: "SpendWithMe",
    description: "A smart expense tracker for travelers and groups. Track shared expenses, split bills, and view spending breakdowns.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/SpendWithMe03",
    bgColor: "from-blue-500/20 to-blue-500/5",
    icon: <Wallet className="text-blue-500" size={56} />,
    links: [
      { name: "Live Site", url: "https://spendwithme.vercel.app", icon: <ExternalLink size={14} /> }
    ],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel overflow-hidden border-slate-800/50 hover:border-orange-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Simple Placeholder Visual */}
              <div className={`aspect-video bg-gradient-to-br ${project.bgColor} flex items-center justify-center border-b border-slate-800/50 relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative z-10 p-6 rounded-2xl bg-slate-950/40 backdrop-blur-sm border border-white/5 shadow-2xl"
                >
                  {project.icon}
                </motion.div>
                
                {/* Secondary decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex justify-between items-start w-full mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed flex-1 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-800/50 text-slate-400 text-[9px] md:text-[10px] uppercase tracking-wider font-semibold rounded-md border border-slate-700/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 pt-4 border-t border-slate-800/50 w-full">
                  {project.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors uppercase tracking-widest group/link"
                    >
                      {link.icon} {link.name}
                      <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
