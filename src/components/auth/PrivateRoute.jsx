import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/authService';

export default function PrivateRoute({ children }) {
  // ═══════════════════════════════════════════════════════════
  // VERIFICAR AUTENTICACIÓN
  // ═══════════════════════════════════════════════════════════
  
  // Usar el servicio de autenticación para verificar
  const authenticated = isAuthenticated();
  
  // Si NO está autenticado, redirigir al login
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Si está autenticado, mostrar el componente hijo
  return children;
}

/* 
════════════════════════════════════════════════════════════════════════
CAMBIOS PRINCIPALES:
════════════════════════════════════════════════════════════════════════

ANTES:
- Verificaba localStorage directamente
- const isAuthenticated = () => {
    return localStorage.getItem('techsolutions_auth_token') !== null;
  };

DESPUÉS:
- Usa el servicio centralizado isAuthenticated()
- Más limpio y mantenible
- Si cambias la lógica de autenticación, solo modificas el servicio

FUNCIONAMIENTO:
1. Componente intenta renderizar ruta protegida
2. PrivateRoute verifica si hay token
3. Si hay token: Renderiza el componente (Dashboard)
4. Si NO hay token: Redirige a /login

EJEMPLO DE USO (en App.jsx):
<Route 
  path="/admin/dashboard" 
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  } 
/>

════════════════════════════════════════════════════════════════════════
*/