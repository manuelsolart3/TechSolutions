export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="border-t border-white/10 py-8 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-lime-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">TS</span>
              </div>
              <span className="text-lg font-bold">
                Tech<span className="text-lime-500">Solutions</span>
              </span>
            </div>
  
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              &copy; {year}{' '}
              <span className="text-lime-500 font-semibold">TechSolutions</span>.
              Todos los derechos reservados.
            </p>
  
            {/* Social Links (opcional) */}
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