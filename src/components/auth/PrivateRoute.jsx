import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  // Revisa si existe el token (puedes cambiarlo según tu lógica)
  const isAuthenticated = () => {
    return localStorage.getItem('techsolutions_auth_token') !== null;
  };
  
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}
