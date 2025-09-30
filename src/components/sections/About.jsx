import { Users, CheckCircle2 } from 'lucide-react';
import { STATS_DATA, FEATURES_DATA } from '../constants/theme';

export default function About() {
  return (
    <section
      id="nosotros"
      className="w-full min-h-screen flex items-center justify-center py-20 sm:py-30 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Fondo base negro */}
      <div className="absolute inset-0 bg-black pointer-events-none z-0"></div>
      {/* Puntos espaciales */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Contenido */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna izquierda */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-10 h-10 text-lime-500" />
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                ¿Quiénes <span className="text-lime-500">somos?</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6">
              Somos un equipo de ingenieros apasionados por la tecnología y el
              diseño. Desde 2025, ayudamos a empresas de todos los tamaños a
              digitalizarse y crecer con soluciones tecnológicas excepcionales.
            </p>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10">
              Cada proyecto es una oportunidad para innovar. Trabajamos con
              metodologías ágiles, código limpio y un obsesivo enfoque en la
              experiencia del usuario.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
              {STATS_DATA.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-lime-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Diferenciadores */}
          <div className="glass-effect rounded-3xl p-10 sm:p-12 md:p-16 bg-gray800/60 backdrop-blur-md border border-white/10 shadow-xl">
  <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-lime-500 text-center">
    Lo que nos diferencia
  </h3>
      <div className="space-y-8">
        {FEATURES_DATA.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-5 group">
            <CheckCircle2 className="w-6 h-6 text-lime-500 mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-lime-500 transition-colors mb-1">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
