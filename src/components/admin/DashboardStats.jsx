import { Package, DollarSign, TrendingUp } from 'lucide-react';

export default function DashboardStats({ stats }) {
  const statCards = [
    {
      icon: Package,
      value: stats.total,
      label: 'Total de servicios',
      color: '#84cc16'
    },
    {
      icon: DollarSign,
      value: `$${stats.revenue.toLocaleString()}`,
      label: 'Valor total del catálogo',
      color: '#84cc16'
    },
    {
      icon: TrendingUp,
      value: stats.inPromotion,
      label: 'En promoción',
      color: '#84cc16'
    }
  ];

  return (
    <div className="stats-grid" style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '32px', 
      marginBottom: '48px' 
    }}>
      {statCards.map((stat, idx) => (
        <div 
          key={idx}
          style={{ 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.08)', 
            borderRadius: '16px', 
            padding: '32px', 
            transition: 'all 0.3s' 
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '20px' 
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'rgba(132,204,22,0.1)', 
              borderRadius: '14px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <stat.icon style={{ width: '28px', height: '28px', color: stat.color }} />
            </div>
          </div>
          <div style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '6px' 
          }}>
            {stat.value}
          </div>
          <div style={{ fontSize: '15px', color: 'rgb(156,163,175)' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}