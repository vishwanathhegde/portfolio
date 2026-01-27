'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-2 md:top-4 left-0 right-0 z-50 px-3 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center justify-between gap-2">
            {/* Logo - Top Left */}
            <a
              href="#home"
              className="text-lg md:text-2xl font-bold text-black hover:scale-110 transition-transform flex-shrink-0"
            >
              VH.
            </a>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-black hover:font-bold transition-all duration-200 relative group px-2 py-1 rounded-md hover:bg-white/60 hover:scale-110 hover:shadow-md"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:bg-white/60 p-2 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:bg-white/60 p-2 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>

            {/* Mobile Navigation - Right Side */}
            <div className="md:hidden flex items-center space-x-2 flex-shrink-0">
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-1.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:scale-110 transition-all duration-200 p-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:scale-110 transition-all duration-200 p-1"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              </div>
              {/* Mobile Menu Button */}
              <button
                className="text-black p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Expanded Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-gray-300/50 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm text-black hover:font-bold transition-all duration-200 text-center hover:bg-white/30 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
