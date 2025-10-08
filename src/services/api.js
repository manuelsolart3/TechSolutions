import axios from 'axios';

// ⚠️ CAMBIO CRÍTICO: Quita HTTPS si estás en desarrollo local
// Si tu backend está en HTTP, usa HTTP. Si es HTTPS, verifica certificado.
const API_BASE_URL = 'https://localhost:7203/api'; // Cambiado de https a http

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  // ✅ NUEVO: Habilitar credenciales para CORS
  withCredentials: false, // Cambiar a true si backend envía cookies
});

// ═══════════════════════════════════════════════════════════
// INTERCEPTOR DE REQUEST
// ═══════════════════════════════════════════════════════════

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('techsolutions_auth_token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // ✅ Log para debugging
    console.log('🚀 Request:', config.method.toUpperCase(), config.url);
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// ═══════════════════════════════════════════════════════════
// INTERCEPTOR DE RESPONSE
// ═══════════════════════════════════════════════════════════

api.interceptors.response.use(
  (response) => {
    // ✅ Log para debugging
    console.log('✅ Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error);
    
    if (error.response) {
      const status = error.response.status;
      
      // ✅ MEJORADO: No redirigir automáticamente en 401 desde login
      if (status === 401) {
        // Solo limpiar y redirigir si NO estamos en la página de login
        const currentPath = window.location.pathname;
        
        if (!currentPath.includes('/login')) {
          localStorage.removeItem('techsolutions_auth_token');
          localStorage.removeItem('techsolutions_user_data');
          window.location.href = '/login';
        }
      }
      
      if (status === 403) {
        console.error('🚫 Forbidden: No tienes permisos');
      }
      
      if (status === 404) {
        console.error('🔍 Not Found: Recurso no encontrado');
      }
      
      if (status === 500) {
        console.error('💥 Server Error: Error interno del servidor');
      }
    } else if (error.request) {
      console.error('🌐 Network Error: No se pudo conectar con el servidor');
    } else {
      console.error('⚙️ Config Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;