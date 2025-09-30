import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { NAVIGATION_LINKS } from "../constants/theme";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-20 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="relative h-full w-full">
        {/* LOGO IZQUIERDA con espacio */}
        <a
          href="#inicio"
          className="absolute left-8 top-1/2 -translate-y-1/2 flex items-center gap-3 group"
        >
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-black font-bold text-base">TS</span>
          </div>
          <span className="text-lg font-semibold tracking-tight hidden sm:block text-white">
            TechSolutions
          </span>
        </a>

        {/* NAV DESKTOP DERECHA con espacio */}
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/login"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200"
          >
            <User className="w-4 h-4" />
            <span>Admin</span>
          </a>
        </div>

        {/* BOTÓN MÓVIL a la derecha con espacio */}
        <button
          className="md:hidden absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-20 right-0 w-full sm:w-80 z-[110] ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-0 sm:mr-6 bg-black/95 backdrop-blur-2xl border border-white/10 sm:rounded-xl overflow-hidden animate-fade-in-up">
          <div className="px-6 py-2 flex flex-col">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Admin</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
