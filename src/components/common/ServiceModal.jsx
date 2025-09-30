import { useEffect } from 'react';
import { X, Check, Sparkles } from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const finalPrice = service.inPromotion 
    ? (service.price * (1 - service.discountPercent / 100)).toFixed(0)
    : service.price;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop minimalista */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-[#0A0A0A] rounded-2xl border border-white/[0.08] animate-scale-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button*/}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 w-9 h-9 rounded-lg bg-[#0A0A0A]/80 backdrop-blur-xl hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center transition-all duration-200 group"
        >
          <X className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        {/* Scrollable */}
        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          {/* Hero Image */}
          <div className="relative w-full h-[320px] overflow-hidden border-b border-white/[0.08]">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
            
            {/* Badge  */}
            {service.inPromotion && (
              <div className="absolute top-6 left-6 px-3 py-1.5 rounded-md bg-white/[0.08] backdrop-blur-xl border border-white/[0.12]">
                <span className="text-white text-xs font-medium">
                  Ahorra {service.discountPercent}%
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="w-full px-16 py-12">
            
            {/* Category badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08]">
                <Sparkles className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {service.category}
                </span>
              </div>
            </div>

            <div className="h-2"></div>

            {/* Title  */}
            <h2 className="text-4xl font-semibold text-white tracking-tight leading-snug text-center">
              {service.name}
            </h2>

            <div className="h-3"></div>

            {/* Price - CENTRADO */}
            <div className="flex items-baseline justify-center gap-3">
              {service.inPromotion ? (
                <>
                  <span className="text-5xl font-semibold text-white">
                    ${finalPrice}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${service.price}
                  </span>
                </>
              ) : (
                <span className="text-5xl font-semibold text-white">
                  ${service.price}
                </span>
              )}
            </div>

            <div className="h-2"></div>

            {/* Stock indicator - CENTRADO */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <div className={`w-1.5 h-1.5 rounded-full ${
                service.stock > 10 ? 'bg-emerald-500' : 
                service.stock > 5 ? 'bg-yellow-500' : 'bg-red-500'
              }`} />
              <span className="text-gray-400">
                {service.stock} disponible{service.stock !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="h-2"></div>

            {/* Divider */}
            <div className="h-px bg-white/[0.1]" />

            <div className="h-4"></div>

            {/* Description */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider text-center">
                Descripción
              </h3>

              <div className="h-4"></div>

              <p className="text-base leading-[1.8] text-gray-300 text-center max-w-xl">
                {service.description}
              </p>
            </div>

            <div className="h-10"></div>

            {/* Features */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider text-center">
                Qué incluye
              </h3>

              <div className="h-4"></div>

              <div className="space-y-5 w-full max-w-lg">
                {service.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4"
                  >
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-gray-400" />
                    </div>
                    <span className="text-[15px] text-gray-300 leading-[1.7]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-10"></div>

            {/* CTA Section */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full max-w-md">
                <button className="cursor-pointer  w-full h-12 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-lg transition-all duration-200 active:scale-[0.98]">
                  Comenzar proyecto
                </button>

                <div className="h-2"></div>

                <button className=" w-full h-12 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-white text-sm font-medium rounded-lg transition-all duration-200">
                  Contactar ventas
                </button>
              </div>
            </div>

            <div className="h-6"></div>

            {/* Divider */}
            <div className="h-px bg-white/[0.08]" />

            <div className="h-6"></div>

            {/* Footer info */}
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              Respuesta en menos de 24 horas • Consulta gratuita • Garantía de satisfacción
            </p>

            <div className="h-2"></div>

          </div>
        </div>
      </div>
    </div>
  );
}