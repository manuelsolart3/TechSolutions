import { useState } from "react";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  X, 
  LogOut,
  LayoutDashboard,
  Package,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Menu
} from "lucide-react";

export default function AdminDashboard() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Desarrollo Web Personalizado',
      price: 2500,
      category: 'Desarrollo',
      stock: 15,
      inPromotion: true,
      discountPercent: 20
    },
    {
      id: 2,
      name: 'E-commerce Completo',
      price: 3500,
      category: 'E-commerce',
      stock: 8,
      inPromotion: false,
      discountPercent: 0
    },
    {
      id: 3,
      name: 'Automatización de Procesos',
      price: 1800,
      category: 'Automatización',
      stock: 20,
      inPromotion: true,
      discountPercent: 15
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    inPromotion: false,
    discountPercent: 0
  });

  const categories = ["Desarrollo", "E-commerce", "Automatización", "Mobile", "Consultoría", "Diseño", "Marketing", "IA", "Cloud"];

  const handleOpenModal = (service = null) => {
    if (service) {
      setEditingService(service);
      setFormData(service);
    } else {
      setEditingService(null);
      setFormData({
        name: "",
        price: "",
        category: "",
        stock: "",
        inPromotion: false,
        discountPercent: 0
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingService) {
      setServices(services.map(s => 
        s.id === editingService.id ? { ...formData, id: s.id } : s
      ));
    } else {
      const newService = {
        ...formData,
        id: Date.now(),
        price: Number(formData.price),
        stock: Number(formData.stock),
        discountPercent: Number(formData.discountPercent)
      };
      setServices([...services, newService]);
    }
    
    handleCloseModal();
  };

  const handleDelete = (id) => {
    setServices(services.filter(s => s.id !== id));
    setDeleteConfirm(null);
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalServices = services.length;
  const totalRevenue = services.reduce((sum, s) => sum + s.price, 0);
  const inPromotion = services.filter(s => s.inPromotion).length;

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .sidebar-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .desktop-table { display: none !important; }
          .mobile-cards { display: block !important; }
          .header-title { font-size: 24px !important; }
          .header-padding { padding: 24px 24px !important; }
          .content-padding { padding: 24px 24px !important; }
        }
        @media (min-width: 769px) {
          .desktop-table { display: block !important; }
          .mobile-cards { display: none !important; }
        }
        @media (min-width: 1025px) {
          .sidebar-desktop { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', display: 'flex', position: 'relative', overflow: 'hidden' }} className="bg-black text-white">
        {/* Imagen de fondo */}
        <div 
          style={{
            position: 'fixed',
            inset: '0',
            zIndex: 0,
            opacity: 0.2,
            backgroundImage: "url('https://i.pinimg.com/1200x/fb/7a/0e/fb7a0eb21f52f459f50fa7427e8bf848.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: 'linear-gradient(to bottom right, rgb(0,0,0), rgba(0,0,0,0.95), rgba(101,163,13,0.2))' }} />

        {/* Sidebar Desktop */}
        <aside className="sidebar-desktop" style={{ width: '280px', borderRight: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 10, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(24px)' }}>
          <div style={{ padding: '32px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: '#84cc16', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}>TS</span>
              </div>
              <span style={{ fontSize: '18px', fontWeight: 600 }}>TechSolutions</span>
            </div>
          </div>

          <nav style={{ flex: 1, padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', fontSize: '15px', color: 'rgb(156,163,175)', background: 'transparent', border: 'none', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
                <LayoutDashboard style={{ width: '20px', height: '20px' }} />
                <span style={{ fontWeight: 500 }}>Dashboard</span>
              </button>
              <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', fontSize: '15px', color: 'white', background: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)', borderRadius: '12px', cursor: 'pointer' }}>
                <Package style={{ width: '20px', height: '20px' }} />
                <span style={{ fontWeight: 500 }}>Servicios</span>
              </button>
            </div>
          </nav>

          <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <button 
              onClick={() => {
                localStorage.removeItem('techsolutions_auth_token');
                window.location.href = '/login';
              }}
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', fontSize: '15px', color: 'rgb(156,163,175)', background: 'transparent', border: 'none', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}
            >
              <LogOut style={{ width: '20px', height: '20px' }} />
              <span style={{ fontWeight: 500 }}>Cerrar sesión</span>
            </button>
          </div>
        </aside>

        {/* Sidebar Mobile Overlay */}
        {sidebarOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)' }} onClick={() => setSidebarOpen(false)} />
            <aside style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '280px', background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(24px)', borderRight: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: '#84cc16', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}>TS</span>
                  </div>
                  <span style={{ fontSize: '18px', fontWeight: 600 }}>TechSolutions</span>
                </div>
                <button onClick={() => setSidebarOpen(false)} style={{ padding: '8px', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
                  <X style={{ width: '20px', height: '20px' }} />
                </button>
              </div>

              <nav style={{ flex: 1, padding: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', fontSize: '15px', color: 'rgb(156,163,175)', background: 'transparent', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
                    <LayoutDashboard style={{ width: '20px', height: '20px' }} />
                    <span style={{ fontWeight: 500 }}>Dashboard</span>
                  </button>
                  <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', fontSize: '15px', color: 'white', background: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)', borderRadius: '12px', cursor: 'pointer' }}>
                    <Package style={{ width: '20px', height: '20px' }} />
                    <span style={{ fontWeight: 500 }}>Servicios</span>
                  </button>
                </div>
              </nav>

              <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button 
                  onClick={() => {
                    localStorage.removeItem('authToken');
                    window.location.href = '/login';
                  }}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', fontSize: '15px', color: 'rgb(156,163,175)', background: 'transparent', border: 'none', borderRadius: '12px', cursor: 'pointer' }}
                >
                  <LogOut style={{ width: '20px', height: '20px' }} />
                  <span style={{ fontWeight: 500 }}>Cerrar sesión</span>
                </button>
              </div>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main style={{ flex: 1, overflow: 'auto', position: 'relative', zIndex: 10 }}>
          {/* Header */}
          <header style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(24px)', position: 'sticky', top: 0, zIndex: 20 }}>
            <div className="header-padding" style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <button 
                  className="mobile-menu-btn"
                  onClick={() => setSidebarOpen(true)}
                  style={{ display: 'none', padding: '8px', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                  <Menu style={{ width: '24px', height: '24px' }} />
                </button>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h1 className="header-title" style={{ fontSize: '32px', fontWeight: 600, marginBottom: '8px', margin: 0 }}>Gestión de Servicios</h1>
                  <p style={{ fontSize: '16px', color: 'rgb(156,163,175)', margin: 0 }}>Administra tu catálogo completo de servicios</p>
                </div>
                <button
                  onClick={() => handleOpenModal()}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', background: '#84cc16', color: 'black', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 0 20px rgba(132,204,22,0.2)', flexShrink: 0 }}
                >
                  <Plus style={{ width: '20px', height: '20px' }} />
                  <span style={{ display: 'inline' }}>Nuevo servicio</span>
                </button>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="content-padding" style={{ maxWidth: '1400px', margin: '0 auto', padding: '48px 80px' }}>
            {/* Stats */}
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '48px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(132,204,22,0.1)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Package style={{ width: '28px', height: '28px', color: '#84cc16' }} />
                  </div>
                </div>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '6px' }}>{totalServices}</div>
                <div style={{ fontSize: '15px', color: 'rgb(156,163,175)' }}>Total de servicios</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(132,204,22,0.1)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <DollarSign style={{ width: '28px', height: '28px', color: '#84cc16' }} />
                  </div>
                </div>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '6px' }}>${totalRevenue.toLocaleString()}</div>
                <div style={{ fontSize: '15px', color: 'rgb(156,163,175)' }}>Valor total del catálogo</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(132,204,22,0.1)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TrendingUp style={{ width: '28px', height: '28px', color: '#84cc16' }} />
                  </div>
                </div>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '6px' }}>{inPromotion}</div>
                <div style={{ fontSize: '15px', color: 'rgb(156,163,175)' }}>En promoción</div>
              </div>
            </div>

            {/* Search */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ position: 'relative', maxWidth: '600px' }}>
                <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: 'rgb(107,114,128)' }} />
                <input
                  type="text"
                  placeholder="Buscar por nombre o categoría..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: '100%', height: '56px', paddingLeft: '56px', paddingRight: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', fontSize: '16px', color: 'white', outline: 'none', transition: 'all 0.2s' }}
                />
              </div>
            </div>

            {/* Desktop Table */}
            <div className="desktop-table" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                    <th style={{ padding: '24px 32px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'rgb(156,163,175)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SERVICIO</th>
                    <th style={{ padding: '24px 32px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'rgb(156,163,175)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CATEGORÍA</th>
                    <th style={{ padding: '24px 32px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'rgb(156,163,175)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PRECIO</th>
                    <th style={{ padding: '24px 32px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'rgb(156,163,175)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>STOCK</th>
                    <th style={{ padding: '24px 32px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'rgb(156,163,175)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PROMOCIÓN</th>
                    <th style={{ padding: '24px 32px', textAlign: 'right', fontSize: '13px', fontWeight: 600, color: 'rgb(156,163,175)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service) => (
                    <tr key={service.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', transition: 'background 0.2s' }}>
                      <td style={{ padding: '24px 32px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 500, color: 'white' }}>{service.name}</div>
                      </td>
                      <td style={{ padding: '24px 32px' }}>
                        <span style={{ display: 'inline-flex', padding: '6px 14px', fontSize: '14px', fontWeight: 500, background: 'rgba(255,255,255,0.06)', color: 'rgb(209,213,219)', borderRadius: '10px' }}>
                          {service.category}
                        </span>
                      </td>
                      <td style={{ padding: '24px 32px' }}>
                        <div style={{ fontSize: '17px', fontWeight: 600, color: 'white' }}>${service.price.toLocaleString()}</div>
                      </td>
                      <td style={{ padding: '24px 32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ 
                            width: '10px', 
                            height: '10px', 
                            borderRadius: '50%', 
                            background: service.stock > 10 ? '#10b981' : service.stock > 5 ? '#eab308' : '#ef4444'
                          }} />
                          <span style={{ fontSize: '16px', color: 'rgb(209,213,219)' }}>{service.stock}</span>
                        </div>
                      </td>
                      <td style={{ padding: '24px 32px' }}>
                        {service.inPromotion ? (
                          <span style={{ display: 'inline-flex', padding: '6px 14px', fontSize: '14px', fontWeight: 600, background: 'rgba(132,204,22,0.1)', color: '#84cc16', borderRadius: '10px', border: '1px solid rgba(132,204,22,0.2)' }}>
                            -{service.discountPercent}%
                          </span>
                        ) : (
                          <span style={{ fontSize: '16px', color: 'rgb(75,85,99)' }}>-</span>
                        )}
                      </td>
                      <td style={{ padding: '24px 32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                          <button
                            onClick={() => handleOpenModal(service)}
                            style={{ padding: '10px', color: 'rgb(156,163,175)', background: 'transparent', border: 'none', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}
                          >
                            <Edit2 style={{ width: '20px', height: '20px' }} />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(service.id)}
                            style={{ padding: '10px', color: 'rgb(156,163,175)', background: 'transparent', border: 'none', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}
                          >
                            <Trash2 style={{ width: '20px', height: '20px' }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredServices.length === 0 && (
                <div style={{ padding: '80px 0', textAlign: 'center' }}>
                  <Package style={{ width: '64px', height: '64px', color: 'rgb(75,85,99)', margin: '0 auto 16px' }} />
                  <p style={{ fontSize: '16px', color: 'rgb(156,163,175)' }}>No se encontraron servicios</p>
                </div>
              )}
            </div>

            {/* Mobile Cards */}
            <div className="mobile-cards" style={{ display: 'none' }}>
              {filteredServices.map((service) => (
                <div key={service.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>{service.name}</h3>
                      <span style={{ display: 'inline-flex', padding: '4px 10px', fontSize: '13px', fontWeight: 500, background: 'rgba(255,255,255,0.06)', color: 'rgb(209,213,219)', borderRadius: '8px' }}>
                        {service.category}
                      </span>
                    </div>
                    {service.inPromotion && (
                      <span style={{ display: 'inline-flex', padding: '4px 10px', fontSize: '13px', fontWeight: 600, background: 'rgba(132,204,22,0.1)', color: '#84cc16', borderRadius: '8px', border: '1px solid rgba(132,204,22,0.2)', flexShrink: 0, marginLeft: '8px' }}>
                        -{service.discountPercent}%
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>${service.price.toLocaleString()}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: service.stock > 10 ? '#10b981' : service.stock > 5 ? '#eab308' : '#ef4444'
                      }} />
                      <span style={{ fontSize: '14px', color: 'rgb(156,163,175)' }}>{service.stock} en stock</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleOpenModal(service)}
                      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', fontSize: '14px', fontWeight: 500, color: 'white', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', cursor: 'pointer' }}
                    >
                      <Edit2 style={{ width: '16px', height: '16px' }} />
                      Editar
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(service.id)}
                      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', fontSize: '14px', fontWeight: 500, color: '#ef4444', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '10px', cursor: 'pointer' }}
                    >
                      <Trash2 style={{ width: '16px', height: '16px' }} />
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}

              {filteredServices.length === 0 && (
                <div style={{ padding: '80px 20px', textAlign: 'center' }}>
                  <Package style={{ width: '64px', height: '64px', color: 'rgb(75,85,99)', margin: '0 auto 16px' }} />
                  <p style={{ fontSize: '16px', color: 'rgb(156,163,175)' }}>No se encontraron servicios</p>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Modal Create/Edit */}
        {isModalOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={handleCloseModal}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)' }} />
            
            <div 
              style={{ position: 'relative', width: '100%', maxWidth: '700px', maxHeight: '90vh', overflowY: 'auto', background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '32px 40px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>
                  {editingService ? 'Editar servicio' : 'Nuevo servicio'}
                </h2>
                <button
                  onClick={handleCloseModal}
                  style={{ padding: '8px', color: 'rgb(156,163,175)', background: 'transparent', border: 'none', borderRadius: '10px', cursor: 'pointer' }}
                >
                  <X style={{ width: '20px', height: '20px' }} />
                </button>
              </div>

              <form onSubmit={handleSubmit} style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '15px', fontWeight: 500, color: 'rgb(209,213,219)', marginBottom: '12px' }}>
                    Nombre del servicio
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ width: '100%', height: '52px', padding: '0 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '16px', color: 'white', outline: 'none' }}
                    placeholder="Ej: Desarrollo Web Premium"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '15px', fontWeight: 500, color: 'rgb(209,213,219)', marginBottom: '12px' }}>
                      Precio (USD)
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      style={{ width: '100%', height: '52px', padding: '0 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '16px', color: 'white', outline: 'none' }}
                      placeholder="2500"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '15px', fontWeight: 500, color: 'rgb(209,213,219)', marginBottom: '12px' }}>
                      Stock disponible
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
                      style={{ width: '100%', height: '52px', padding: '0 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '16px', color: 'white', outline: 'none' }}
                      placeholder="10"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '15px', fontWeight: 500, color: 'rgb(209,213,219)', marginBottom: '12px' }}>
                    Categoría
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    style={{ width: '100%', height: '52px', padding: '0 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '16px', color: 'white', outline: 'none' }}
                  >
                    <option value="" style={{ background: 'black' }}>Selecciona una categoría</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat} style={{ background: 'black' }}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
                  <input
                    type="checkbox"
                    id="inPromotion"
                    checked={formData.inPromotion}
                    onChange={(e) => setFormData({...formData, inPromotion: e.target.checked})}
                    style={{ width: '20px', height: '20px' }}
                  />
                  <label htmlFor="inPromotion" style={{ fontSize: '16px', color: 'rgb(229,231,235)', fontWeight: 500 }}>
                    Servicio en promoción
                  </label>
                </div>

                {formData.inPromotion && (
                  <div>
                    <label style={{ display: 'block', fontSize: '15px', fontWeight: 500, color: 'rgb(209,213,219)', marginBottom: '12px' }}>
                      Porcentaje de descuento
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.discountPercent}
                      onChange={(e) => setFormData({...formData, discountPercent: e.target.value})}
                      style={{ width: '100%', height: '52px', padding: '0 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '16px', color: 'white', outline: 'none' }}
                      placeholder="20"
                    />
                  </div>
                )}

                <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    style={{ flex: 1, height: '52px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '16px', fontWeight: 500, borderRadius: '12px', cursor: 'pointer' }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    style={{ flex: 1, height: '52px', background: '#84cc16', border: 'none', color: 'black', fontSize: '16px', fontWeight: 600, borderRadius: '12px', cursor: 'pointer', boxShadow: '0 0 20px rgba(132,204,22,0.2)' }}
                  >
                    {editingService ? 'Actualizar servicio' : 'Crear servicio'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation */}
        {deleteConfirm && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={() => setDeleteConfirm(null)}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)' }} />
            
            <div 
              style={{ position: 'relative', width: '100%', maxWidth: '500px', background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '40px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '32px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <AlertCircle style={{ width: '26px', height: '26px', color: '#f87171' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'white', marginBottom: '10px', margin: 0 }}>
                    ¿Eliminar servicio?
                  </h3>
                  <p style={{ fontSize: '16px', color: 'rgb(156,163,175)', lineHeight: '1.6', margin: '10px 0 0 0' }}>
                    Esta acción no se puede deshacer. El servicio será eliminado permanentemente del catálogo.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <button
                  onClick={() => setDeleteConfirm(null)}
                  style={{ flex: 1, height: '52px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '16px', fontWeight: 500, borderRadius: '12px', cursor: 'pointer' }}
                >
                  Cancelar
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  style={{ flex: 1, height: '52px', background: '#ef4444', border: 'none', color: 'white', fontSize: '16px', fontWeight: 600, borderRadius: '12px', cursor: 'pointer' }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}