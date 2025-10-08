import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const categories = [
  "Desarrollo",
  "E-commerce",
  "Automatización",
  "Mobile",
  "Consultoría",
  "Diseño",
  "Marketing",
  "IA",
  "Cloud"
];

export default function ServiceModal({ isOpen, service, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    inPromotion: false,
    discountPercent: 0,
    imageUrl: '',
    features: '' 
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (service) {
      setFormData(service);
    } else {
      // Nuevo servicio
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        inPromotion: false,
        discountPercent: 0,
        imageUrl: '',
        features: ''
      });
    }
  }, [service, isOpen]);

  if (!isOpen) return null;
else {
      // Nuevo servicio
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        inPromotion: false,
        discountPercent: 0,
        imageUrl: '',
        features: ''
      });
    }

    // ✅ VALIDACIÓN ANTES DE ENVIAR
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'El precio debe ser mayor a 0';
    }

    if (!formData.category) {
      newErrors.category = 'La categoría es obligatoria';
    }

    if (!formData.stock || parseInt(formData.stock) < 0) {
      newErrors.stock = 'El stock debe ser mayor o igual a 0';
    }

    if (!formData.imageUrl.trim()) {
      newErrors.imageUrl = 'La URL de la imagen es obligatoria';
    }

    if (formData.inPromotion && (!formData.discountPercent || parseInt(formData.discountPercent) <= 0)) {
      newErrors.discountPercent = 'El descuento debe ser mayor a 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // ✅ Detectar si es modo lectura
  const isReadOnly = typeof onSubmit !== 'function';

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('📝 Formulario enviado:', formData); // Debug
    
    // ✅ VALIDAR ANTES DE ENVIAR
    if (!validateForm()) {
      console.log('❌ Validación fallida:', errors);
      return;
    }
    
    // ✅ Verificar que onSubmit existe
    if (typeof onSubmit !== 'function') {
      console.error('❌ ERROR: onSubmit no es una función');
      return;
    }
    
    // ✅ Llamar a onSubmit con los datos
    onSubmit(formData);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.9)',
          backdropFilter: 'blur(8px)'
        }}
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '700px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#0A0A0A',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '32px 40px',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 600, margin: 0, color: 'white' }}>
            {isReadOnly
              ? service?.name
              : service
              ? 'Editar servicio'
              : 'Nuevo servicio'}
          </h2>
          <button
            onClick={onClose}
            style={{
              padding: '8px',
              color: 'rgb(156,163,175)',
              background: 'transparent',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            <X style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        {isReadOnly ? (
          // ✅ MODO SOLO LECTURA
          <div style={{ padding: '40px', color: 'white' }}>
            <p style={{ marginBottom: '12px' }}>{service?.description}</p>
            <p style={{ marginBottom: '8px' }}>
              <strong>Precio:</strong> ${service?.price}
            </p>
            <p style={{ marginBottom: '8px' }}>
              <strong>Categoría:</strong> {service?.category}
            </p>
            <p style={{ marginBottom: '8px' }}>
              <strong>Stock:</strong> {service?.stock}
            </p>
            {service?.inPromotion && (
              <p style={{ marginBottom: '8px', color: '#84cc16' }}>
                En promoción: {service.discountPercent}% OFF
              </p>
            )}
            <button
              onClick={onClose}
              style={{
                marginTop: '24px',
                width: '100%',
                height: '48px',
                background: '#84cc16',
                border: 'none',
                borderRadius: '12px',
                color: 'black',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Cerrar
            </button>
          </div>
        ) : (
          // ✅ MODO EDICIÓN / CREACIÓN
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px'
            }}
          >
            <div>
              <label style={labelStyle}>Nombre del servicio</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
                placeholder="Ej: Desarrollo Web Premium"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={labelStyle}>Precio (USD)</label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  style={inputStyle}
                  placeholder="2500"
                />
              </div>

              <div>
                <label style={labelStyle}>Stock disponible</label>
                <input
                  type="number"
                  required
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  style={inputStyle}
                  placeholder="10"
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Categoría</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={inputStyle}
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '18px 20px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px'
              }}
            >
              <input
                type="checkbox"
                id="inPromotion"
                checked={formData.inPromotion}
                onChange={(e) => setFormData({ ...formData, inPromotion: e.target.checked })}
                style={{ width: '20px', height: '20px' }}
              />
              <label htmlFor="inPromotion" style={{ fontSize: '16px', color: 'white' }}>
                Servicio en promoción
              </label>
            </div>

            {formData.inPromotion && (
              <div>
                <label style={labelStyle}>Porcentaje de descuento</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.discountPercent}
                  onChange={(e) =>
                    setFormData({ ...formData, discountPercent: e.target.value })
                  }
                  style={inputStyle}
                  placeholder="20"
                />
              </div>
            )}

            <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  flex: 1,
                  height: '52px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  fontSize: '16px',
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                style={{
                  flex: 1,
                  height: '52px',
                  background: '#84cc16',
                  border: 'none',
                  color: 'black',
                  fontSize: '16px',
                  fontWeight: 600,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(132,204,22,0.2)'
                }}
              >
                {service ? 'Actualizar servicio' : 'Crear servicio'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// 🎨 Estilos comunes
const labelStyle = {
  display: 'block',
  fontSize: '15px',
  fontWeight: 500,
  color: 'rgb(209,213,219)',
  marginBottom: '12px'
};

const inputStyle = {
  width: '100%',
  height: '52px',
  padding: '0 20px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  fontSize: '16px',
  color: 'white',
  outline: 'none'
};
