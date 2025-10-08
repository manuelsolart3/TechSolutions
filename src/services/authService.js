// src/services/authService.js
import api from './api';

// ═══════════════════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════════════════

const TOKEN_KEY = 'techsolutions_auth_token';
const USER_KEY = 'techsolutions_user_data';

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: LOGIN
// ═══════════════════════════════════════════════════════════

/**
 * Inicia sesión con email y password.
 * Guarda el token y datos del usuario en localStorage.
 * 
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Promise<Object>} - Respuesta con token y datos del usuario
 * @throws {Error} - Si las credenciales son incorrectas o hay error de red
 */
export const login = async (email, password) => {
  try {
    // Hacer petición POST al endpoint de login
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    // Extraer datos de la respuesta
    const { success, token, user, message } = response.data;

    // Verificar que el login fue exitoso
    if (!success) {
      throw new Error(message || 'Error al iniciar sesión');
    }

    // Guardar token en localStorage
    localStorage.setItem(TOKEN_KEY, token);

    // Guardar datos del usuario en localStorage
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    // Devolver toda la respuesta
    return response.data;
    
  } catch (error) {
    // Manejar diferentes tipos de errores
    
    if (error.response) {
      // El servidor respondió con un error
      const errorMessage = error.response.data?.message || 'Credenciales incorrectas';
      throw new Error(errorMessage);
    } else if (error.request) {
      // No hubo respuesta del servidor
      throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
    } else {
      // Error al configurar la petición
      throw new Error(error.message || 'Error inesperado al iniciar sesión');
    }
  }
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: LOGOUT
// ═══════════════════════════════════════════════════════════

/**
 * Cierra la sesión del usuario.
 * Elimina token y datos del localStorage.
 */
export const logout = () => {
  // Limpiar localStorage
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  
  // Redirigir al login
  window.location.href = '/login';
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: OBTENER TOKEN
// ═══════════════════════════════════════════════════════════

/**
 * Obtiene el token JWT del localStorage.
 * 
 * @returns {string|null} - Token o null si no existe
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: VERIFICAR SI ESTÁ AUTENTICADO
// ═══════════════════════════════════════════════════════════

/**
 * Verifica si el usuario está autenticado.
 * 
 * @returns {boolean} - True si hay token, false si no
 */
export const isAuthenticated = () => {
  const token = getToken();
  return token !== null && token !== undefined && token !== '';
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: OBTENER DATOS DEL USUARIO
// ═══════════════════════════════════════════════════════════

/**
 * Obtiene los datos del usuario autenticado del localStorage.
 * 
 * @returns {Object|null} - Datos del usuario o null si no existe
 */
export const getUserData = () => {
  const userData = localStorage.getItem(USER_KEY);
  
  if (!userData) return null;
  
  try {
    return JSON.parse(userData);
  } catch (error) {
    console.error('Error al parsear datos del usuario:', error);
    return null;
  }
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: VALIDAR TOKEN (OPCIONAL)
// ═══════════════════════════════════════════════════════════

/**
 * Valida si el token JWT sigue siendo válido.
 * Hace una petición al backend para verificarlo.
 * 
 * @returns {Promise<boolean>} - True si es válido, false si no
 */
export const validateToken = async () => {
  try {
    const response = await api.get('/auth/validate');
    return response.data.success === true;
  } catch (error) {
    return false;
  }
};

// ═══════════════════════════════════════════════════════════
// EXPORTAR COMO OBJETO (alternativa)
// ═══════════════════════════════════════════════════════════

const authService = {
  login,
  logout,
  getToken,
  isAuthenticated,
  getUserData,
  validateToken,
};

export default authService;

/* 
════════════════════════════════════════════════════════════════════════
CÓMO USAR ESTE SERVICIO:
════════════════════════════════════════════════════════════════════════

OPCIÓN 1: Importar funciones individuales

import { login, logout, isAuthenticated } from './services/authService';

// Usar
await login('admin@techsolutions.com', 'Admin123!');
logout();
const isAuth = isAuthenticated();


OPCIÓN 2: Importar objeto completo

import authService from './services/authService';

// Usar
await authService.login('admin@techsolutions.com', 'Admin123!');
authService.logout();
const isAuth = authService.isAuthenticated();


EJEMPLO EN UN COMPONENTE:

const handleLogin = async (email, password) => {
  try {
    setLoading(true);
    const response = await login(email, password);
    console.log('Login exitoso:', response);
    // Redirigir al dashboard
    navigate('/admin/dashboard');
  } catch (error) {
    console.error('Error:', error.message);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

════════════════════════════════════════════════════════════════════════
*/