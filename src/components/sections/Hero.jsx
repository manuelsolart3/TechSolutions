import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center py-20 sm:py-32 px-6 md:px-12"
    >
      {/* Fondo base */}
      <div className="absolute inset-0 bg-black z-0 pointer-events-none"></div>

      {/* Glow verde */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-3xl 
                   pointer-events-none z-0"
      ></div>

      {/* Puntos espaciales */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Contenido centrado */}
      <div className="relative z-10 w-full max-w-7xl text-center space-y-12">
        {/* Badge superior */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-lime-500/10 border border-lime-500/20 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-xs font-medium text-lime-400">
              Disponibles para nuevos proyectos
            </span>
          </div>
        </div>
        <div className="lg:h-12"></div>
        {/* Título principal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
          Construimos el{" "}
          <span className="block mt-2 text-lime-400">futuro digital</span> de tu
          empresa
        </h1>
        <div className="lg:h-12"></div>
        {/* Descripción */}
        <div className="flex justify-center">
          <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-3xl px-4 sm:px-8 md:px-12 text-center">
            Desarrollamos soluciones tecnológicas personalizadas que transforman
            ideas en productos excepcionales. Diseño premium, código limpio,
            resultados reales.
          </p>
        </div>
        <div className="lg:h-12"></div>
        {/* Stats minimalistas */}
        <div className="w-full flex items-center justify-center">
           <div className="lg:h-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full pt-16 border-t border-white/[0.08]">
            {[
              { value: "50+", label: "Proyectos completados" },
              { value: "98%", label: "Clientes satisfechos" },
              { value: "24/7", label: "Soporte continuo" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center group"
              >
                 <div className="lg:h-12"></div>
                <div className="text-4xl sm:text-5xl font-semibold text-white group-hover:text-lime-400 transition-colors mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
