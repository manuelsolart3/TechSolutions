import { AlertCircle } from 'lucide-react';

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm }) {
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
          maxWidth: '500px', 
          background: '#0A0A0A', 
          border: '1px solid rgba(255,255,255,0.1)', 
          borderRadius: '20px', 
          padding: '40px' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '20px', 
          marginBottom: '32px' 
        }}>
          <div style={{ 
            width: '52px', 
            height: '52px', 
            borderRadius: '12px', 
            background: 'rgba(239,68,68,0.1)', 
            border: '1px solid rgba(239,68,68,0.2)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexShrink: 0 
          }}>
            <AlertCircle style={{ width: '26px', height: '26px', color: '#f87171' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 600, 
              color: 'white', 
              marginBottom: '10px', 
              margin: 0 
            }}>
              ¿Eliminar servicio?
            </h3>
            <p style={{ 
              fontSize: '16px', 
              color: 'rgb(156,163,175)', 
              lineHeight: '1.6', 
              margin: '10px 0 0 0' 
            }}>
              Esta acción no se puede deshacer. El servicio será eliminado permanentemente del catálogo.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button
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
            onClick={onConfirm}
            style={{ 
              flex: 1, 
              height: '52px', 
              background: '#ef4444', 
              border: 'none', 
              color: 'white', 
              fontSize: '16px', 
              fontWeight: 600, 
              borderRadius: '12px', 
              cursor: 'pointer' 
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}