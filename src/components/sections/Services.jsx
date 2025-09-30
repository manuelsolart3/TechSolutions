import { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import { ArrowRight, Tag } from 'lucide-react';
import ServiceModal from '../common/ServiceModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section
      id="servicios"
      className="w-full min-h-screen flex items-center justify-center py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Fondo base negro */}
      <div className="absolute inset-0 bg-black pointer-events-none z-0"></div>
      
      {/* Gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-500/5 to-transparent pointer-events-none z-0"></div>

      {/* Puntos espaciales */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      
  {/* Contenedor principal */}
  <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="w-full text-center animate-fade-in-up mb-20">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Nuestros <span className="text-gradient-lime">Servicios</span>
          </h2>
          <p className="sm:text-5sm font-light "> Soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel</p>
          <div className="lg:h-10"></div>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="glass-effect rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-lime-500/20 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => handleServiceClick(service)}
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badge de promoción */}
                {service.inPromotion && (
                  <div className="absolute top-4 right-4 bg-lime-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    <Tag className="w-4 h-4" />
                    -{service.discountPercent}%
                  </div>
                )}

                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                {/* Categoría */}
                <div className="text-lime-500 text-sm font-semibold uppercase tracking-wider">
                  {service.category}
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white group-hover:text-lime-500 transition-colors line-clamp-2">
                  {service.name}
                </h3>

                {/* Precio */}
                <div className="flex items-center gap-3">
                  {service.inPromotion ? (
                    <>
                      <span className="text-3xl font-bold text-lime-500">
                        ${(service.price * (1 - service.discountPercent / 100)).toFixed(0)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${service.price}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-lime-500">
                      ${service.price}
                    </span>
                  )}
                </div>

                {/* Botón */}
                <button className="w-full mt-4 py-3 px-6 bg-white/5 hover:bg-lime-500 border border-white/10 hover:border-lime-500 rounded-xl text-white hover:text-black font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Ver detalles
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
          {/* 🧱 Separación forzada (footer) */}
          <div className="h-32 md:h-40 lg:h-52"></div>
      </div>

      {/* Modal de detalle */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}