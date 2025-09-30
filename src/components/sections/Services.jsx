import { useState, useEffect } from 'react';
import { Code, Zap, Rocket } from 'lucide-react';

const ICONS = {
  Code: Code,
  Zap: Zap,
  Rocket: Rocket,
};

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: 'Code',
      title: 'Desarrollo Web',
      description:
        'Aplicaciones modernas y escalables con React, Next.js, Node.js y tecnologías de vanguardia.',
    },
    {
      icon: 'Zap',
      title: 'Automatización',
      description:
        'Optimiza procesos con IA, flujos automáticos y soluciones personalizadas.',
    },
    {
      icon: 'Rocket',
      title: 'Consultoría Tech',
      description:
        'Asesoría estratégica para convertir tu visión en productos digitales exitosos.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    
    <section
      id="servicios"
      className="w-full min-h-screen flex items-center justify-center py-40 px-6 bg-gradient-to-b from-transparent via-lime-500/5 to-transparent"
    >

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="w-full max-w-5xl mx-auto text-center animate-fade-in-up space-y-20">
          {/* Header */}
          <div className="space-y-10">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Servicios que{' '}
              <span className="text-gradient-lime">impulsan</span> tu negocio
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Soluciones integrales con enfoque moderno, seguro y escalable.
            </p>
          </div>


<div className="h-32"></div>  

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => {
              const IconComponent = ICONS[service.icon];
              return (
                <div
                  key={idx}
                  className={`glass-effect rounded-3xl px-10 py-16 flex flex-col justify-between h-full group transition-all duration-500 cursor-pointer ${
                    activeService === idx
                      ? 'border-lime-500/60 shadow-2xl shadow-lime-500/20 scale-[1.05]'
                      : 'hover:border-lime-500/30 hover:shadow-xl hover:scale-105'
                  }`}
                  onMouseEnter={() => setActiveService(idx)}
                >
                  <div>
                    {/* Ícono */}
                    <div className="bg-gradient-lime w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-md shadow-lime-500/30">
                      <IconComponent className="w-7 h-7 text-black" />
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-lime-500 transition-colors">
                      {service.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-400 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Línea activa */}
                  {activeService === idx && (
                    <div className="mt-10 h-1 bg-gradient-lime rounded-full animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
