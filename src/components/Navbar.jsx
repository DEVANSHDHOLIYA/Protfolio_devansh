import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      // Force reset if they were previously cached on light
      if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark');
      }
      return true;
    }
    return true;
  });
  const menuRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav py-4"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-200">
          Devansh<span className="text-green-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-green-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-slate-600 dark:text-slate-300 hover:text-green-500 transition-colors p-2"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#contact"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-bold tracking-wide rounded-full shadow-md border border-transparent dark:border-green-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-slate-600 dark:text-slate-300 hover:text-green-500 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:text-slate-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-nav border-t border-slate-200/50 dark:border-slate-800/50 p-6 md:hidden flex flex-col gap-4 shadow-2xl rounded-b-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-green-400 py-3 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between group"
              >
                {link.name}
                <div className="w-1.5 h-1.5 rounded-2xl bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-4 bg-green-500 hover:bg-green-600 text-white text-center font-bold rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
