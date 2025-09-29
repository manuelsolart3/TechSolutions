import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-vermilion tracking-tight">
          Tech<span className="text-sunshine">Solutions</span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-10 text-base font-medium text-clean">
          <a href="#" className="hover:text-vermilion transition">Inicio</a>
          <a href="#" className="hover:text-vermilion transition">Servicios</a>
          <a href="#" className="hover:text-vermilion transition">Contacto</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="btn-primary text-sm px-5 py-2">Login</button>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white">
          <nav className="flex flex-col gap-4 text-base font-medium text-clean">
            <a href="#" className="hover:text-vermilion transition">Inicio</a>
            <a href="#" className="hover:text-vermilion transition">Servicios</a>
            <a href="#" className="hover:text-vermilion transition">Contacto</a>
            <button className="btn-primary w-full text-sm mt-2">Login</button>
          </nav>
        </div>
      )}
    </header>
  );
}
