import { Users, CheckCircle2 } from 'lucide-react';
import { STATS_DATA, FEATURES_DATA } from '../constants/theme';

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierda */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-10 h-10 text-lime-500" />
              <h2 className="text-4xl md:text-5xl font-bold">
                ¿Quiénes <span className="text-lime-500">somos?</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Somos un equipo de ingenieros apasionados por la tecnología y el
              diseño. Desde 2025, ayudamos a empresas de todos los tamaños a
              digitalizarse y crecer con soluciones tecnológicas excepcionales.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Cada proyecto es una oportunidad para innovar. Trabajamos con
              metodologías ágiles, código limpio y un obsesivo enfoque en la
              experiencia del usuario.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {STATS_DATA.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-lime-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features derecha */}
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-lime-500">
              Lo que nos diferencia
            </h3>
            <div className="space-y-6">
              {FEATURES_DATA.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-lime-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-lime-500 transition-colors">
                      {feature}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Implementación profesional con las mejores prácticas del
                      mercado
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