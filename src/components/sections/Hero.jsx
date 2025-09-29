import { Zap } from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-cyan-400/10"></div>
      
      {/* Grid animado */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(132 204 22 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-lime-500" />
            <span className="text-sm text-lime-400 font-medium">
              Desarrollo de software de clase mundial
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Construimos el{' '}
            <span className="text-gradient-lime block mt-2">
              futuro digital
            </span>{' '}
            de tu empresa
          </h1>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Desarrollamos soluciones tecnológicas personalizadas que transforman
            ideas en productos excepcionales. Diseño premium, código limpio,
            resultados reales.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" icon>
              Agendar consulta
            </Button>
            <Button size="lg" variant="secondary">
              Ver portafolio
            </Button>
          </div>
        </div>

        {/* Stats flotantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { value: '50+', label: 'Proyectos completados' },
            { value: '98%', label: 'Clientes satisfechos' },
            { value: '24/7', label: 'Soporte continuo' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-2xl p-6 text-center hover:border-lime-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl font-bold text-lime-500 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}