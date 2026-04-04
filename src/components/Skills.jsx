import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 text-lg">Technologies I work with every day</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-panel p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 cursor-default group hover:bg-slate-800/40 transition-all duration-300 border-slate-800/40"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-xl group-hover:bg-orange-500/10 transition-colors" />
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10 transition-transform duration-500 group-hover:rotate-6"
                style={skill.name === 'Express.js' || skill.name === 'GitHub' ? { filter: 'invert(1)' } : {}}
              />
            </div>
            <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-slate-500 group-hover:text-orange-400 transition-colors text-center leading-tight">
              {skill.name}
            </span>
          </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
