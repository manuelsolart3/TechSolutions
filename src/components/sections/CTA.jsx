import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';

export default function CTA() {
  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-cyan-400/10"></div>
      
      {/* Grid de fondo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(132 204 22 / 0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="glass-effect rounded-3xl p-12 md:p-16 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-block bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-lime-400 text-sm font-medium">
              ¿Listo para comenzar?
            </span>
          </div>

          {/* Título */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformemos tu{' '}
            <span className="text-gradient-lime">visión en realidad</span>
          </h2>

          {/* Descripción */}
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos llevar tu
            proyecto al siguiente nivel con tecnología de vanguardia
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" icon>
              Contactar ahora
            </Button>
            <Button size="lg" variant="outline">
              Ver casos de éxito
            </Button>
          </div>

          {/* Info adicional */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              💬 Respuesta en menos de 24 horas • 🚀 Primera consulta gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}