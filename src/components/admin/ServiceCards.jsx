import { Edit2, Trash2, Package } from 'lucide-react';

export default function ServiceCards({ services, onEdit, onDelete }) {
  if (services.length === 0) {
    return (
      <div className="mobile-cards" style={{ display: 'none' }}>
        <div style={{ padding: '80px 20px', textAlign: 'center' }}>
          <Package style={{ 
            width: '64px', 
            height: '64px', 
            color: 'rgb(75,85,99)', 
            margin: '0 auto 16px' 
          }} />
          <p style={{ fontSize: '16px', color: 'rgb(156,163,175)' }}>
            No se encontraron servicios
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-cards" style={{ display: 'none' }}>
      {services.map((service) => (
        <div 
          key={service.id} 
          style={{ 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.08)', 
            borderRadius: '16px', 
            padding: '20px', 
            marginBottom: '16px' 
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'start', 
            justifyContent: 'space-between', 
            marginBottom: '12px' 
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                fontSize: '17px', 
                fontWeight: 600, 
                color: 'white', 
                marginBottom: '8px' 
              }}>
                {service.name}
              </h3>
              <span style={{ 
                display: 'inline-flex', 
                padding: '4px 10px', 
                fontSize: '13px', 
                fontWeight: 500, 
                background: 'rgba(255,255,255,0.06)', 
                color: 'rgb(209,213,219)', 
                borderRadius: '8px' 
              }}>
                {service.category}
              </span>
            </div>
            {service.inPromotion && (
              <span style={{ 
                display: 'inline-flex', 
                padding: '4px 10px', 
                fontSize: '13px', 
                fontWeight: 600, 
                background: 'rgba(132,204,22,0.1)', 
                color: '#84cc16', 
                borderRadius: '8px', 
                border: '1px solid rgba(132,204,22,0.2)', 
                flexShrink: 0, 
                marginLeft: '8px' 
              }}>
                -{service.discountPercent}%
              </span>
            )}
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '16px' 
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
              ${service.price.toLocaleString()}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                background: service.stock > 10 ? '#10b981' : service.stock > 5 ? '#eab308' : '#ef4444'
              }} />
              <span style={{ fontSize: '14px', color: 'rgb(156,163,175)' }}>
                {service.stock} en stock
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => onEdit(service)}
              style={{ 
                flex: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '8px', 
                padding: '12px', 
                fontSize: '14px', 
                fontWeight: 500, 
                color: 'white', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '10px', 
                cursor: 'pointer' 
              }}
            >
              <Edit2 style={{ width: '16px', height: '16px' }} />
              Editar
            </button>
            <button
              onClick={() => onDelete(service.id)}
              style={{ 
                flex: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '8px', 
                padding: '12px', 
                fontSize: '14px', 
                fontWeight: 500, 
                color: '#ef4444', 
                background: 'rgba(239,68,68,0.1)', 
                border: '1px solid rgba(239,68,68,0.2)', 
                borderRadius: '10px', 
                cursor: 'pointer' 
              }}
            >
              <Trash2 style={{ width: '16px', height: '16px' }} />
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}