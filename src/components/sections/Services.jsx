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
      description: 'Aplicaciones web modernas y escalables con React, Next.js, Node.js y las últimas tecnologías del mercado.',
    },
    {
      icon: 'Zap',
      title: 'Automatización',
      description: 'Optimiza procesos empresariales con inteligencia artificial, workflows automatizados y soluciones personalizadas.',
    },
    {
      icon: 'Rocket',
      title: 'Consultoría Tech',
      description: 'Asesoría estratégica para transformar tu visión en productos digitales exitosos con metodologías ágiles.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="servicios" className="py-24 px-6 bg-gradient-to-b from-transparent via-lime-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Servicios que{' '}
            <span className="text-gradient-lime">impulsan</span> tu negocio
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Ofrecemos soluciones completas de desarrollo con tecnologías de
            vanguardia y un equipo altamente calificado
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = ICONS[service.icon];
            return (
              <div
                key={idx}
                className={`glass-effect rounded-2xl p-8 transition-all duration-500 cursor-pointer group ${
                  activeService === idx
                    ? 'border-lime-500/50 shadow-xl shadow-lime-500/20 scale-105'
                    : 'hover:border-lime-500/30 hover:shadow-lg hover:shadow-lime-500/10'
                }`}
                onMouseEnter={() => setActiveService(idx)}
              >
                {/* Icono */}
                <div className="bg-gradient-lime w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-lime-500/30">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>

                {/* Contenido */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-lime-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Indicador activo */}
                {activeService === idx && (
                  <div className="mt-6 h-1 bg-gradient-lime rounded-full animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}