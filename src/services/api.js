import axios from 'axios';

// Cambia esto según donde esté corriendo tu API
const API_BASE_URL = 'https://localhost:7203/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});


api.interceptors.request.use(
  (config) => {
    // Obtener el token del localStorage
    const token = localStorage.getItem('techsolutions_auth_token');
    
    // Si hay token, agregarlo al header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    // Manejar errores antes de enviar la petición
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa (2xx), devolverla tal cual
    return response;
  },
  (error) => {
    // Manejar errores de respuesta
    
    if (error.response) {
      // El servidor respondió con un código de error
      
      const status = error.response.status;
      
      // Si es 401 Unauthorized (token inválido o expirado)
      if (status === 401) {
        // Limpiar datos de autenticación
        localStorage.removeItem('techsolutions_auth_token');
        localStorage.removeItem('techsolutions_user_data');
        
        // Redirigir al login
        window.location.href = '/login';
      }
      
      // Si es 403 Forbidden (sin permisos)
      if (status === 403) {
        console.error('No tienes permisos para realizar esta acción');
      }
      
      // Si es 404 Not Found
      if (status === 404) {
        console.error('Recurso no encontrado');
      }
      
      // Si es 500 Internal Server Error
      if (status === 500) {
        console.error('Error interno del servidor');
      }
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      console.error('No se pudo conectar con el servidor');
    } else {
      // Algo pasó al configurar la petición
      console.error('Error al configurar la petición:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// Interceptor de Response:
// - Se ejecuta DESPUÉS de recibir la respuesta
// - Maneja errores globalmente (401, 403, 404, 500)
// - Si el token expiró, redirige al login automáticamente

// ═══════════════════════════════════════════════════════════
// EXPORTAR INSTANCIA CONFIGURADA
// ═══════════════════════════════════════════════════════════

export default api;
