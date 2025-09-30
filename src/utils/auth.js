// src/utils/auth.js
// Utilidades de autenticación para preparar integración con backend

const AUTH_TOKEN_KEY = 'techsolutions_auth_token';
const USER_DATA_KEY = 'techsolutions_user_data';

/**
 * Guarda el token de autenticación
 * @param {string} token - JWT token del backend
 */
export const setAuthToken = (token) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

/**
 * Obtiene el token de autenticación
 * @returns {string|null} - Token o null si no existe
 */
export const getAuthToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

/**
 * Elimina el token de autenticación
 */
export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(USER_DATA_KEY);
};

/**
 * Guarda los datos del usuario
 * @param {Object} userData - Datos del usuario
 */
export const setUserData = (userData) => {
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
};

/**
 * Obtiene los datos del usuario
 * @returns {Object|null} - Datos del usuario o null
 */
export const getUserData = () => {
  const data = localStorage.getItem(USER_DATA_KEY);
  return data ? JSON.parse(data) : null;
};

/**
 * Verifica si el usuario está autenticado
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  return !!getAuthToken();
};

/**
 * Login - Llamada al backend
 * @param {Object} credentials - { email, password }
 * @returns {Promise<Object>} - Respuesta del backend
 */
export const login = async (credentials) => {
  try {
    // TODO: Reemplazar con tu URL de backend
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al iniciar sesión');
    }

    const data = await response.json();
    
    // Guardar token y datos del usuario
    if (data.token) {
      setAuthToken(data.token);
      setUserData(data.user);
    }

    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Logout - Cerrar sesión
 */
export const logout = () => {
  removeAuthToken();
  window.location.href = '/login';
};

/**
 * Obtiene headers con autenticación para requests
 * @returns {Object} - Headers con token
 */
export const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};

/**
 * Request autenticado genérico
 * @param {string} url - URL del endpoint
 * @param {Object} options - Opciones de fetch
 * @returns {Promise<Object>}
 */
export const authenticatedFetch = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers,
    },
  });

  // Si el token expiró o es inválido
  if (response.status === 401) {
    logout();
    throw new Error('Sesión expirada');
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error en la petición');
  }

  return response.json();
};

// TODO: Estructura esperada del backend
/*
POST /api/auth/login
Body: {
  "email": "admin@techsolutions.com",
  "password": "password123"
}

Response Success (200):
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@techsolutions.com",
    "name": "Admin",
    "role": "admin"
  }
}

Response Error (401):
{
  "success": false,
  "message": "Credenciales incorrectas"
}
*/