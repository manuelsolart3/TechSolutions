import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Loader2 } from "lucide-react";
import ServiceModal from "../common/ServiceModal";
import { getAllServices } from "../../services/servicesService";

export default function Services() {
  // ═══════════════════════════════════════════════════════════
  // ESTADO DEL COMPONENTE
  // ═══════════════════════════════════════════════════════════
  
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ═══════════════════════════════════════════════════════════
  // CARGAR SERVICIOS AL MONTAR EL COMPONENTE
  // ═══════════════════════════════════════════════════════════

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Llamar al servicio para obtener los datos
      const data = await getAllServices();
      
      setServices(data);
      
    } catch (err) {
      console.error('Error al cargar servicios:', err);
      setError(err.message || 'Error al cargar los servicios');
      
    } finally {
      setIsLoading(false);
    }
  };

  // ═══════════════════════════════════════════════════════════
  // MANEJADORES DE EVENTOS
  // ═══════════════════════════════════════════════════════════

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  // ═══════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════

  return (
    <section
      id="servicios"
      className="w-full min-h-screen flex items-center justify-center py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Fondo base */}
      <div className="absolute inset-0 bg-black pointer-events-none z-0"></div>

      {/* Glow verde */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Puntos espaciales */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Contenedor principal */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="w-full mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-lime-500/10 border border-lime-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span className="text-xs font-medium text-lime-400 uppercase tracking-wider">
              Servicios
            </span>
          </div>

          {/* Header */}
          <div className="w-full text-center animate-fade-in-up mb-20">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Nuestros <span className="text-gradient-lime">Servicios</span>
            </h2>
            <p className="sm:text-lg font-light text-gray-400">
              Soluciones tecnológicas completas para impulsar tu negocio al
              siguiente nivel
            </p>
            <div className="lg:h-6"></div>
          </div>
        </div>
        <div className="lg:h-1"></div>

        {/* ═══════════════════════════════════════════════════════════
            ESTADOS DE CARGA Y ERROR
        ═══════════════════════════════════════════════════════════ */}

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-lime-500 animate-spin mb-4" />
            <p className="text-gray-400 text-lg">Cargando servicios...</p>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 max-w-md">
              <p className="text-red-400 text-center mb-4">{error}</p>
              <button
                onClick={loadServices}
                className="w-full px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
              >
                Reintentar
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && services.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-gray-400 text-lg mb-4">
              No hay servicios disponibles en este momento
            </p>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════
            GRID DE SERVICIOS
        ═══════════════════════════════════════════════════════════ */}

        {!isLoading && !error && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const finalPrice = service.inPromotion
                ? (service.price * (1 - service.discountPercent / 100)).toFixed(0)
                : service.price;

              return (
                <div
                  key={service.serviceId}
                  className="group relative bg-[#0A0A0A] rounded-xl border border-white/[0.08] hover:border-lime-500/30 overflow-hidden transition-all duration-300 cursor-pointer animate-fade-in-up hover:shadow-lg hover:shadow-lime-500/5"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => handleServiceClick(service)}
                >
                  {/* Glow al hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-lime-500/0 group-hover:from-lime-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>

                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden border-b border-white/[0.08]">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />

                    {/* Badge de promoción */}
                    {service.inPromotion && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-lime-500/20 backdrop-blur-xl border border-lime-500/30">
                        <span className="text-lime-300 text-xs font-medium">
                          -{service.discountPercent}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-6 relative">
                    {/* Categoría */}
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                      {service.category}
                    </div>

                    {/* Título */}
                    <h3 className="text-lg font-medium text-white mb-2 line-clamp-2 group-hover:text-lime-400 transition-colors">
                      {service.name}
                    </h3>

                    {/* Descripción */}
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Precio */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-semibold text-white group-hover:text-lime-400 transition-colors">
                        ${finalPrice}
                      </span>
                      {service.inPromotion && (
                        <span className="text-sm text-gray-500 line-through">
                          ${service.price}
                        </span>
                      )}
                    </div>

                    {/* Stock */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          service.stock > 10
                            ? "bg-emerald-500"
                            : service.stock > 5
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      />
                      <span>
                        {service.stock} disponible{service.stock !== 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Botón */}
                    <button className="cursor-pointer w-full h-10 bg-white/[0.03] hover:bg-lime-500/10 border border-white/[0.08] hover:border-lime-500/30 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                      Ver detalles
                      <ArrowRight className="cursor-pointer w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

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

