import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

/**
 * Componente para proteger rutas que requieren autenticación
 * Redirige al login si el usuario no está autenticado
 */
export default function PrivateRoute({ children }) {
  if (!isAuthenticated()) {
    // Redirigir al login
    return <Navigate to="/login" replace />;
  }
  
  // Si está autenticado, renderizar el componente hijo
  return children;
}