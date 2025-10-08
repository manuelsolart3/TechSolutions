import { Plus, Menu } from 'lucide-react';

export default function DashboardHeader({ onNewService, onMenuClick }) {
  return (
    <header style={{ 
      borderBottom: '1px solid rgba(255,255,255,0.08)', 
      background: 'rgba(0,0,0,0.4)', 
      backdropFilter: 'blur(24px)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 20 
    }}>
      <div className="header-padding" style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '40px 80px' 
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '16px' 
        }}>
          <button 
            className="mobile-menu-btn"
            onClick={onMenuClick}
            style={{ 
              display: 'none', 
              padding: '8px', 
              background: 'transparent', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer' 
            }}
          >
            <Menu style={{ width: '24px', height: '24px' }} />
          </button>

          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 className="header-title" style={{ 
              fontSize: '32px', 
              fontWeight: 600, 
              marginBottom: '8px', 
              margin: 0,
              color: 'white'
            }}>
              Gestión de Servicios
            </h1>
            <p style={{ fontSize: '16px', color: 'rgb(156,163,175)', margin: 0 }}>
              Administra tu catálogo completo de servicios
            </p>
          </div>

          <button
            onClick={onNewService}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '14px 24px', 
              background: '#84cc16', 
              color: 'black', 
              fontSize: '16px', 
              fontWeight: 600, 
              borderRadius: '12px', 
              border: 'none', 
              cursor: 'pointer', 
              transition: 'all 0.2s', 
              boxShadow: '0 0 20px rgba(132,204,22,0.2)', 
              flexShrink: 0 
            }}
          >
            <Plus style={{ width: '20px', height: '20px' }} />
            <span>Nuevo servicio</span>
          </button>
        </div>
      </div>
    </header>
  );
}