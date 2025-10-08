import api from './api';

export const getAllServices = async () => {
  try {
    const response = await api.get('/services');
    
    return response.data.data || [];
    
  } catch (error) {
    console.error('Error al obtener servicios:', error);
    
    if (error.response) {
      throw new Error(error.response.data?.message || 'Error al cargar servicios');
    } else if (error.request) {
      throw new Error('No se pudo conectar con el servidor');
    } else {
      throw new Error('Error inesperado al cargar servicios');
    }
  }
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: OBTENER UN SERVICIO POR ID
// ═══════════════════════════════════════════════════════════

/**
 * Obtiene un servicio específico por su ID.
 * Endpoint público (no requiere autenticación).
 * 
 * @param {number} id - ID del servicio
 * @returns {Promise<Object>} - Datos del servicio
 * @throws {Error} - Si el servicio no existe o hay error
 */
export const getServiceById = async (id) => {
  try {
    const response = await api.get(`/services/${id}`);
    return response.data.data;
    
  } catch (error) {
    console.error(`Error al obtener servicio ${id}:`, error);
    
    if (error.response?.status === 404) {
      throw new Error('Servicio no encontrado');
    }
    
    throw new Error('Error al cargar el servicio');
  }
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: CREAR UN NUEVO SERVICIO
// ═══════════════════════════════════════════════════════════

/**
 * Crea un nuevo servicio en el catálogo.
 * REQUIERE AUTENTICACIÓN (token JWT).
 * 
 * @param {Object} serviceData - Datos del servicio a crear
 * @returns {Promise<Object>} - Servicio creado con su ID
 * @throws {Error} - Si hay error en la creación
 */
export const createService = async (serviceData) => {
  try {
    const dataToSend = {
      name: serviceData.name,
      description: serviceData.description || '',
      price: parseFloat(serviceData.price),
      category: serviceData.category,
      stock: parseInt(serviceData.stock) || 0,
      inPromotion: serviceData.inPromotion || false,
      discountPercent: parseInt(serviceData.discountPercent) || 0,
      imageUrl: serviceData.imageUrl || '',
      features: Array.isArray(serviceData.features) ? serviceData.features : [],
    };
    
    const response = await api.post('/services', dataToSend);
    
    return response.data.data;
    
  } catch (error) {
    console.error('Error al crear servicio:', error);
    
    if (error.response?.status === 401) {
      throw new Error('No tienes autorización para crear servicios');
    }
    
    if (error.response?.status === 400) {
      const errors = error.response.data?.errors || [];
      throw new Error(errors.join(', ') || 'Datos inválidos');
    }
    
    throw new Error('Error al crear el servicio');
  }
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: ACTUALIZAR UN SERVICIO
// ═══════════════════════════════════════════════════════════

/**
 * Actualiza un servicio existente.
 * REQUIERE AUTENTICACIÓN (token JWT).
 * 
 * @param {number} id - ID del servicio a actualizar
 * @param {Object} serviceData - Nuevos datos del servicio
 * @returns {Promise<Object>} - Servicio actualizado
 * @throws {Error} - Si el servicio no existe o hay error
 */
export const updateService = async (id, serviceData) => {
  try {
    // Asegurarse de que los datos tengan el formato correcto
    const dataToSend = {
      name: serviceData.name,
      description: serviceData.description || '',
      price: parseFloat(serviceData.price),
      category: serviceData.category,
      stock: parseInt(serviceData.stock) || 0,
      inPromotion: serviceData.inPromotion || false,
      discountPercent: parseInt(serviceData.discountPercent) || 0,
      imageUrl: serviceData.imageUrl || '',
      features: Array.isArray(serviceData.features) ? serviceData.features : [],
    };
    
    const response = await api.put(`/services/${id}`, dataToSend);
    
    return response.data.data;
    
  } catch (error) {
    console.error(`Error al actualizar servicio ${id}:`, error);
    
    if (error.response?.status === 401) {
      throw new Error('No tienes autorización para actualizar servicios');
    }
    
    if (error.response?.status === 404) {
      throw new Error('Servicio no encontrado');
    }
    
    if (error.response?.status === 400) {
      const errors = error.response.data?.errors || [];
      throw new Error(errors.join(', ') || 'Datos inválidos');
    }
    
    throw new Error('Error al actualizar el servicio');
  }
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: ELIMINAR UN SERVICIO (SOFT DELETE)
// ═══════════════════════════════════════════════════════════

/**
 * Elimina lógicamente un servicio (soft delete).
 * REQUIERE AUTENTICACIÓN (token JWT).
 * 
 * @param {number} id - ID del servicio a eliminar
 * @returns {Promise<boolean>} - True si se eliminó correctamente
 * @throws {Error} - Si el servicio no existe o hay error
 */
export const deleteService = async (id) => {
  try {
    const response = await api.delete(`/services/${id}`);
    
    return response.data.success;
    
  } catch (error) {
    console.error(`Error al eliminar servicio ${id}:`, error);
    
    if (error.response?.status === 401) {
      throw new Error('No tienes autorización para eliminar servicios');
    }
    
    if (error.response?.status === 404) {
      throw new Error('Servicio no encontrado');
    }
    
    throw new Error('Error al eliminar el servicio');
  }
};

// ═══════════════════════════════════════════════════════════
// FUNCIÓN: BUSCAR SERVICIOS (OPCIONAL)
// ═══════════════════════════════════════════════════════════

/**
 * Busca servicios por nombre o categoría.
 * Endpoint público (no requiere autenticación).
 * 
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Promise<Array>} - Lista de servicios que coinciden
 * @throws {Error} - Si hay error en la búsqueda
 */
export const searchServices = async (searchTerm) => {
  try {
    const response = await api.get(`/services/search?term=${encodeURIComponent(searchTerm)}`);
    
    return response.data.data || [];
    
  } catch (error) {
    console.error('Error al buscar servicios:', error);
    throw new Error('Error al buscar servicios');
  }
};

// ═══════════════════════════════════════════════════════════
// EXPORTAR COMO OBJETO (alternativa)
// ═══════════════════════════════════════════════════════════

const servicesService = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  searchServices,
};

export default servicesService;

/* 
════════════════════════════════════════════════════════════════════════
CÓMO USAR ESTE SERVICIO:
════════════════════════════════════════════════════════════════════════

IMPORTAR:

import { 
  getAllServices, 
  createService, 
  updateService, 
  deleteService 
} from './services/servicesService';


EJEMPLO EN UN COMPONENTE:

// Cargar servicios al montar el componente
useEffect(() => {
  const loadServices = async () => {
    try {
      setLoading(true);
      const services = await getAllServices();
      setServices(services);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  loadServices();
}, []);


// Crear servicio
const handleCreate = async (data) => {
  try {
    const newService = await createService(data);
    setServices([...services, newService]);
  } catch (error) {
    alert(error.message);
  }
};


// Actualizar servicio
const handleUpdate = async (id, data) => {
  try {
    const updated = await updateService(id, data);
    setServices(services.map(s => s.serviceId === id ? updated : s));
  } catch (error) {
    alert(error.message);
  }
};


// Eliminar servicio
const handleDelete = async (id) => {
  try {
    await deleteService(id);
    setServices(services.filter(s => s.serviceId !== id));
  } catch (error) {
    alert(error.message);
  }
};

════════════════════════════════════════════════════════════════════════
*/