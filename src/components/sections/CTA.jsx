import Button from '../common/Button';

export default function CTA() {
  return (
    <section
      id="contacto"
      className="w-full py-32 md:py-40 px-6 md:px-12 relative overflow-hidden bg-gradient-to-t from-gray900 via-gray800/90 to-black"
    >
      {/* Fondo tipo "espacio" con degradado suave y sin cortes */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(132, 204, 22, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      ></div>

      {/* Contenido centrado */}
      <div className="w-full max-w-6xl mx-auto text-center relative z-10">
        <div className="glass-effect rounded-3xl px-6 sm:px-12 md:px-20 lg:px-28 py-20 sm:py-24 md:py-28 animate-fade-in-up space-y-14">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-block bg-lime-500/10 border border-lime-500/30 rounded-full px-6 py-3">
              <span className="text-lime-400 text-sm sm:text-base font-medium">
                ¿Listo para comenzar?
              </span>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transformemos tu{' '}
            <span className="text-gradient-lime">visión en realidad</span>
          </h2>

          {/* Descripción */}
          <p className="text-gray-400 text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
            Agenda una consulta gratuita y descubre cómo podemos llevar tu
            proyecto al siguiente nivel con tecnología de vanguardia.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Button size="lg" icon>
              Contactar ahora
            </Button>
            <Button size="lg" variant="outline">
              Ver casos de éxito
            </Button>
          </div>

          {/* Info adicional */}
          <div className="pt-10 border-t border-white/10">
            <p className="text-gray-500 text-sm sm:text-base">
              💬 Respuesta en menos de 24 horas • 🚀 Primera consulta gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
