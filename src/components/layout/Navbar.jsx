import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants/theme';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-2xl border-b border-white/[0.08]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <span className="text-black font-bold text-base">TS</span>
          </div>
          <span className="text-lg font-semibold tracking-tight hidden sm:block text-white">
            TechSolutions
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          {/* Admin Login Button */}
          <a
            href="/login"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white border border-white/[0.08] hover:border-white/[0.12] rounded-lg transition-all duration-200"
          >
            <User className="w-4 h-4" />
            <span>Admin</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/[0.08] animate-fade-in-up">
          <div className="px-6 py-8 flex flex-col gap-2">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            
            {/* Admin Login Mobile */}
            <a
              href="/login"
              className="flex items-center gap-2 px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
            >
              <User className="w-4 h-4" />
              <span>Admin</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}