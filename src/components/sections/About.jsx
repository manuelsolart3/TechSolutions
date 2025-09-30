import { Check, Sparkles } from 'lucide-react';
import { STATS_DATA, FEATURES_DATA } from '../constants/theme';

export default function About() {
  return (
    <section
      id="nosotros"
      className="w-full min-h-screen flex items-center justify-center py-20 sm:py-30 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Fondo base */}
      <div className="absolute inset-0 bg-black pointer-events-none z-0"></div>
      
      {/* Glow verde */}
      <div 
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none z-0"
      ></div>

      {/* Puntos espaciales */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Contenido */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="w-full mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-lime-500/10 border border-lime-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span className="text-xs font-medium text-lime-400 uppercase tracking-wider">
              Nosotros
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-4">
            Construimos <span className="text-lime-400">software</span>
            <br />
            que marca la diferencia
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Somos un equipo de ingenieros apasionados por la tecnología y el diseño. 
            Desde 2025, ayudamos a empresas de todos los tamaños a digitalizarse y 
            crecer con soluciones tecnológicas excepcionales.
          </p>
        </div>

        {/* Grid de contenido */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Columna izquierda */}
          <div className="animate-fade-in-up">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {STATS_DATA.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-4xl font-semibold text-white group-hover:text-lime-400 transition-colors mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-lime-500/20 to-transparent mb-12" />

            <div className="space-y-6">
              <h3 className="text-sm font-medium text-lime-400 uppercase tracking-wider">
                Nuestra filosofía
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Cada proyecto es una oportunidad para innovar. Trabajamos con 
                metodologías ágiles, código limpio y un obsesivo enfoque en la 
                experiencia del usuario.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                No creemos en soluciones genéricas. Cada línea de código está 
                pensada para resolver problemas reales y generar valor medible.
              </p>
            </div>
          </div>

          {/* Columna derecha - Features */}
          <div className="relative bg-[#0A0A0A] rounded-xl border border-white/[0.08] hover:border-lime-500/20 transition-all duration-300 p-8 sm:p-10 md:p-12 group">
            {/* Glow interno */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-lime-500/0 group-hover:from-lime-500/5 group-hover:to-transparent transition-all duration-500 rounded-xl pointer-events-none"></div>
            
            <h3 className="text-sm font-medium text-lime-400 uppercase tracking-wider mb-8 relative">
              Lo que nos diferencia
            </h3>
            
            <div className="space-y-6 relative">
              {FEATURES_DATA.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 group/item">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-lime-500/20 transition-colors">
                    <Check className="w-2.5 h-2.5 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-medium text-white mb-1 group-hover/item:text-lime-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="h-32 md:h-40 lg:h-52"></div>
      </div>
    </section>
  );
}