import { LayoutDashboard, Package, LogOut } from 'lucide-react';

export default function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem('techsolutions_auth_token');
    window.location.href = '/login';
  };

  return (
    <aside style={{ 
      width: '280px', 
      borderRight: '1px solid rgba(255,255,255,0.08)', 
      display: 'flex', 
      flexDirection: 'column', 
      position: 'relative', 
      zIndex: 10, 
      background: 'rgba(0,0,0,0.4)', 
      backdropFilter: 'blur(24px)' 
    }}>
      {/* Logo */}
      <div style={{ padding: '32px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            background: '#84cc16', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <span style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}>TS</span>
          </div>
          <span style={{ fontSize: '18px', fontWeight: 600, color: 'white' }}>TechSolutions</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button style={{ 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '14px 16px', 
            fontSize: '15px', 
            color: 'rgb(156,163,175)', 
            background: 'transparent', 
            border: 'none', 
            borderRadius: '12px', 
            cursor: 'pointer', 
            transition: 'all 0.2s' 
          }}>
            <LayoutDashboard style={{ width: '20px', height: '20px' }} />
            <span style={{ fontWeight: 500 }}>Dashboard</span>
          </button>
          
          <button style={{ 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '14px 16px', 
            fontSize: '15px', 
            color: 'white', 
            background: 'rgba(132,204,22,0.1)', 
            border: '1px solid rgba(132,204,22,0.2)', 
            borderRadius: '12px', 
            cursor: 'pointer' 
          }}>
            <Package style={{ width: '20px', height: '20px' }} />
            <span style={{ fontWeight: 500 }}>Servicios</span>
          </button>
        </div>
      </nav>

      {/* Logout */}
      <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button 
          onClick={handleLogout}
          style={{ 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '14px 16px', 
            fontSize: '15px', 
            color: 'rgb(156,163,175)', 
            background: 'transparent', 
            border: 'none', 
            borderRadius: '12px', 
            cursor: 'pointer', 
            transition: 'all 0.2s' 
          }}
        >
          <LogOut style={{ width: '20px', height: '20px' }} />
          <span style={{ fontWeight: 500 }}>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}