import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants/theme';
import Button from '../common/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-lime-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-black font-extrabold text-sm">TS</span>
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block text-white">
            Tech<span className="text-lime-500">Solutions</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-lime-500 relative transition-colors"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <Button size="sm" className="ml-4">
            Empezar proyecto
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-lime-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 animate-fade-in-up">
          <div className="px-6 py-8 flex flex-col gap-6">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-gray-300 hover:text-lime-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="lg" className="w-full mt-2">
              Empezar proyecto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
