import { Edit2, Trash2, Package } from 'lucide-react';

export default function ServiceTable({ services, onEdit, onDelete }) {
  if (services.length === 0) {
    return (
      <div className="desktop-table" style={{ 
        background: 'rgba(255,255,255,0.02)', 
        border: '1px solid rgba(255,255,255,0.08)', 
        borderRadius: '16px', 
        overflow: 'hidden' 
      }}>
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
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
    <div className="desktop-table" style={{ 
      background: 'rgba(255,255,255,0.02)', 
      border: '1px solid rgba(255,255,255,0.08)', 
      borderRadius: '16px', 
      overflow: 'hidden' 
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ 
            borderBottom: '1px solid rgba(255,255,255,0.08)', 
            background: 'rgba(255,255,255,0.02)' 
          }}>
            <th style={{ 
              padding: '24px 32px', 
              textAlign: 'left', 
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'rgb(156,163,175)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}>
              SERVICIO
            </th>
            <th style={{ 
              padding: '24px 32px', 
              textAlign: 'left', 
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'rgb(156,163,175)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}>
              CATEGORÍA
            </th>
            <th style={{ 
              padding: '24px 32px', 
              textAlign: 'left', 
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'rgb(156,163,175)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}>
              PRECIO
            </th>
            <th style={{ 
              padding: '24px 32px', 
              textAlign: 'left', 
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'rgb(156,163,175)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}>
              STOCK
            </th>
            <th style={{ 
              padding: '24px 32px', 
              textAlign: 'left', 
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'rgb(156,163,175)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}>
              PROMOCIÓN
            </th>
            <th style={{ 
              padding: '24px 32px', 
              textAlign: 'right', 
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'rgb(156,163,175)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}>
              ACCIONES
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr 
              key={service.id} 
              style={{ 
                borderBottom: '1px solid rgba(255,255,255,0.06)', 
                transition: 'background 0.2s' 
              }}
            >
              <td style={{ padding: '24px 32px' }}>
                <div style={{ fontSize: '16px', fontWeight: 500, color: 'white' }}>
                  {service.name}
                </div>
              </td>
              <td style={{ padding: '24px 32px' }}>
                <span style={{ 
                  display: 'inline-flex', 
                  padding: '6px 14px', 
                  fontSize: '14px', 
                  fontWeight: 500, 
                  background: 'rgba(255,255,255,0.06)', 
                  color: 'rgb(209,213,219)', 
                  borderRadius: '10px' 
                }}>
                  {service.category}
                </span>
              </td>
              <td style={{ padding: '24px 32px' }}>
                <div style={{ fontSize: '17px', fontWeight: 600, color: 'white' }}>
                  ${service.price.toLocaleString()}
                </div>
              </td>
              <td style={{ padding: '24px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    background: service.stock > 10 ? '#10b981' : service.stock > 5 ? '#eab308' : '#ef4444'
                  }} />
                  <span style={{ fontSize: '16px', color: 'rgb(209,213,219)' }}>
                    {service.stock}
                  </span>
                </div>
              </td>
              <td style={{ padding: '24px 32px' }}>
                {service.inPromotion ? (
                  <span style={{ 
                    display: 'inline-flex', 
                    padding: '6px 14px', 
                    fontSize: '14px', 
                    fontWeight: 600, 
                    background: 'rgba(132,204,22,0.1)', 
                    color: '#84cc16', 
                    borderRadius: '10px', 
                    border: '1px solid rgba(132,204,22,0.2)' 
                  }}>
                    -{service.discountPercent}%
                  </span>
                ) : (
                  <span style={{ fontSize: '16px', color: 'rgb(75,85,99)' }}>-</span>
                )}
              </td>
              <td style={{ padding: '24px 32px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'flex-end', 
                  gap: '8px' 
                }}>
                  <button
                    onClick={() => onEdit(service)}
                    style={{ 
                      padding: '10px', 
                      color: 'rgb(156,163,175)', 
                      background: 'transparent', 
                      border: 'none', 
                      borderRadius: '10px', 
                      cursor: 'pointer', 
                      transition: 'all 0.2s' 
                    }}
                  >
                    <Edit2 style={{ width: '20px', height: '20px' }} />
                  </button>
                  <button
                    onClick={() => onDelete(service.id)}
                    style={{ 
                      padding: '10px', 
                      color: 'rgb(156,163,175)', 
                      background: 'transparent', 
                      border: 'none', 
                      borderRadius: '10px', 
                      cursor: 'pointer', 
                      transition: 'all 0.2s' 
                    }}
                  >
                    <Trash2 style={{ width: '20px', height: '20px' }} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}