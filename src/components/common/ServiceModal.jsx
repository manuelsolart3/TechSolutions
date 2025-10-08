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
    discountPercent: 0
  });

  useEffect(() => {
    if (service) {
      setFormData(service);
    } else {
      setFormData({
        name: '',
        price: '',
        category: '',
        stock: '',
        inPromotion: false,
        discountPercent: 0
      });
    }
  }, [service, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

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
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'rgba(0,0,0,0.9)', 
        backdropFilter: 'blur(8px)' 
      }} />
      
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
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '32px 40px', 
          borderBottom: '1px solid rgba(255,255,255,0.08)' 
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, margin: 0, color: 'white' }}>
            {service ? 'Editar servicio' : 'Nuevo servicio'}
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

        <form onSubmit={handleSubmit} style={{ 
          padding: '40px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '28px' 
        }}>
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '15px', 
              fontWeight: 500, 
              color: 'rgb(209,213,219)', 
              marginBottom: '12px' 
            }}>
              Nombre del servicio
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ 
                width: '100%', 
                height: '52px', 
                padding: '0 20px', 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px', 
                fontSize: '16px', 
                color: 'white', 
                outline: 'none' 
              }}
              placeholder="Ej: Desarrollo Web Premium"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '15px', 
                fontWeight: 500, 
                color: 'rgb(209,213,219)', 
                marginBottom: '12px' 
              }}>
                Precio (USD)
              </label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                style={{ 
                  width: '100%', 
                  height: '52px', 
                  padding: '0 20px', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '12px', 
                  fontSize: '16px', 
                  color: 'white', 
                  outline: 'none' 
                }}
                placeholder="2500"
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '15px', 
                fontWeight: 500, 
                color: 'rgb(209,213,219)', 
                marginBottom: '12px' 
              }}>
                Stock disponible
              </label>
              <input
                type="number"
                required
                value={formData.stock}
                onChange={(e) => setFormData({...formData, stock: e.target.value})}
                style={{ 
                  width: '100%', 
                  height: '52px', 
                  padding: '0 20px', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '12px', 
                  fontSize: '16px', 
                  color: 'white', 
                  outline: 'none' 
                }}
                placeholder="10"
              />
            </div>
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '15px', 
              fontWeight: 500, 
              color: 'rgb(209,213,219)', 
              marginBottom: '12px' 
            }}>
              Categoría
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              style={{ 
                width: '100%', 
                height: '52px', 
                padding: '0 20px', 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px', 
                fontSize: '16px', 
                color: 'white', 
                outline: 'none' 
              }}
            >
              <option value="" style={{ background: 'black' }}>Selecciona una categoría</option>
              {categories.map(cat => (
                <option key={cat} value={cat} style={{ background: 'black' }}>{cat}</option>
              ))}
            </select>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px', 
            padding: '18px 20px', 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.08)', 
            borderRadius: '12px' 
          }}>
            <input
              type="checkbox"
              id="inPromotion"
              checked={formData.inPromotion}
              onChange={(e) => setFormData({...formData, inPromotion: e.target.checked})}
              style={{ width: '20px', height: '20px' }}
            />
            <label htmlFor="inPromotion" style={{ 
              fontSize: '16px', 
              color: 'rgb(229,231,235)', 
              fontWeight: 500 
            }}>
              Servicio en promoción
            </label>
          </div>

          {formData.inPromotion && (
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '15px', 
                fontWeight: 500, 
                color: 'rgb(209,213,219)', 
                marginBottom: '12px' 
              }}>
                Porcentaje de descuento
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={formData.discountPercent}
                onChange={(e) => setFormData({...formData, discountPercent: e.target.value})}
                style={{ 
                  width: '100%', 
                  height: '52px', 
                  padding: '0 20px', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '12px', 
                  fontSize: '16px', 
                  color: 'white', 
                  outline: 'none' 
                }}
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
                fontWeight: 500, 
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
      </div>
    </div>
  );
}