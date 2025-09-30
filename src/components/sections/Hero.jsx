import { Zap } from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section id="inicio" className="w-full min-h-screen flex items-center justify-center py-20 sm:py-32 px-6 md:px-12 relative">
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-cyan-400/10 pointer-events-none"></div>
      
      {/* Grid animado */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(132 204 22 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="w-full max-w-5xl mx-auto text-center animate-fade-in-up space-y-12">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-lime-500" />
              <span className="text-sm sm:text-base text-lime-400 font-medium">
                Desarrollo de software de clase mundial
              </span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Construimos el{' '}
            <span className="text-gradient-lime block mt-4">
              futuro digital
            </span>{' '}
            de tu empresa
          </h1>

          {/* Descripción */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
            Desarrollamos soluciones tecnológicas personalizadas que transforman
            ideas en productos excepcionales. Diseño premium, código limpio,
            resultados reales.
          </p>

         
        </div>

        {/* Stats flotantes */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
          {[
            { value: '50+', label: 'Proyectos completados' },
            { value: '98%', label: 'Clientes satisfechos' },
            { value: '24/7', label: 'Soporte continuo' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-3xl p-10 text-center hover:border-lime-500/50 transition-all duration-300 group"
            >
              <div className="text-5xl sm:text-6xl font-bold text-lime-500 mb-4 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-400 text-base sm:text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}