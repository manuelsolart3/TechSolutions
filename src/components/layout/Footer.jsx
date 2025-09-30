export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="border-t border-white/10 py-8 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <span className="text-black font-bold text-base">TS</span>
          </div>
          <span className="text-lg font-semibold tracking-tight hidden sm:block text-white">
            TechSolutions
          </span>
        </a>
  
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              &copy; {year}{' '}
              <span className="text-lime-500 font-semibold">TechSolutions</span>.
              Todos los derechos reservados.
            </p>
  
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }