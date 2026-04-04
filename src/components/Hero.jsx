import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Link2, Mail } from 'lucide-react';
const Github = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center md:items-start md:text-left gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel w-fit border-orange-500/20 bg-orange-500/5">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-sm font-medium text-orange-400">Available for work</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Hi, I'm <br />
            <span className="text-gradient">Devansh Dholiya</span>
          </h1>
          
          <h2 className="text-lg md:text-2xl font-medium text-slate-400">
            Full Stack Developer <span className="text-orange-500">(</span>MERN Stack<span className="text-orange-500">)</span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed">
            I build modern, scalable, and responsive web applications. Passionate about clean UI and solving complex problems with elegant code.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full md:w-auto">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] group whitespace-nowrap">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-bold hover:bg-slate-800 transition-colors text-center border-slate-700/50">
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8 pt-8 md:pt-6 border-t border-slate-800/50 md:border-t-0 mt-2 md:mt-0 w-full md:w-auto">
            <a href="https://github.com/DEVANSHDHOLIYA" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/devansh-dholiya-274017249/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devanshdholiya2568@gmail.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Abstract geometric shape / code window representation */}
          <div className="relative w-full aspect-square max-w-lg ml-auto">
            <div className="absolute inset-0 glass-panel border-slate-700/50 bg-slate-900/80 shadow-2xl flex flex-col overflow-hidden group hover:shadow-orange-500/10 transition-all duration-500">
              <div className="h-10 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-950/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">portfolio.js</div>
              </div>
              <div className="p-8 font-mono text-sm leading-relaxed flex-1 overflow-hidden">
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">01</span>
                  <p className="text-orange-400">class <span className="text-white">Developer</span> {'{'}</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">02</span>
                  <p className="pl-4 text-slate-400">constructor() {'{'}</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">03</span>
                  <p className="pl-8 text-slate-400">this.<span className="text-orange-400">name</span> = <span className="text-green-400">'Devansh Dholiya'</span>;</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">04</span>
                  <p className="pl-8 text-slate-400">this.<span className="text-orange-400">stack</span> = [<span className="text-green-400">'React.js'</span>, <span className="text-green-400">'MERN'</span>,<span className="text-green-400">'Node.js'</span>];</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">05</span>
                  <p className="pl-4 text-slate-400">{'}'}</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">06</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">07</span>
                  <p className="pl-4 text-blue-400">isAvailable() {'{'}</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">08</span>
                  <p className="pl-8 text-orange-400">return <span className="text-white">true</span>;</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">09</span>
                  <p className="pl-4 text-blue-400">{'}'}</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">10</span>
                  <p className="text-orange-400">{'}'}</p>
                </div>
              </div>
              
              {/* Terminal mock bottom */}
              <div className="h-32 bg-slate-950/80 p-4 border-t border-slate-800 font-mono text-xs">
                <div className="flex gap-2 text-slate-400 mb-1">
                  <span className="text-green-500">➜</span>
                  <span>portfolio-v2</span>
                  <span className="text-blue-500">git:(main)</span>
                </div>
                <div className="text-slate-500 typing-cursor">npm run dev</div>
                <div className="text-orange-500/80 mt-2 italic">Ready for production...</div>
              </div>
            </div>
            
            {/* Soft decorative elements behind */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] -z-10 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
