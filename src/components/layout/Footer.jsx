export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-white/10 md:h-20 py-8 md:py-0">
      {/* Desktop */}
      <div className="hidden md:block">
        {/* Logo izquierda */}
        <a
          href="#inicio"
          className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3 group"
        >
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-black font-bold text-base">TS</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            TechSolutions
          </span>
        </a>

        {/* Copyright  */}
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-sm text-center">
          &copy; {year}{' '}
          <span className="text-lime-500 font-semibold">TechSolutions</span>. Todos los derechos reservados.
        </p>

        {/* Redes */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors text-sm">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors text-sm">Twitter</a>
        </div>
      </div>

      {/* Mobile*/}
      <div className="md:hidden max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-black font-bold text-base">TS</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">TechSolutions</span>
        </a>

        <p className="text-gray-400 text-sm text-center">
          &copy; {year}{' '}
          <span className="text-lime-500 font-semibold">TechSolutions</span>. Todos los derechos reservados.
        </p>

        <div className="w-full flex justify-end items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors text-sm">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors text-sm">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
