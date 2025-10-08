/*
import { useState, useEffect } from 'react';
import { serviceService } from '../services/serviceService';

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar servicios
  const loadServices = async () => {
    try {
      setLoading(true);
      const data = await serviceService.getAll();
      setServices(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error loading services:', err);
    } finally {
      setLoading(false);
    }
  };

  // Crear servicio
  const createService = async (serviceData) => {
    try {
      const newService = await serviceService.create(serviceData);
      setServices(prev => [...prev, newService]);
      return { success: true, data: newService };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Actualizar servicio
  const updateService = async (id, serviceData) => {
    try {
      const updated = await serviceService.update(id, serviceData);
      setServices(prev => prev.map(s => s.id === id ? updated : s));
      return { success: true, data: updated };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Eliminar servicio
  const deleteService = async (id) => {
    try {
      await serviceService.delete(id);
      setServices(prev => prev.filter(s => s.id !== id));
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Estadísticas
  const stats = {
    total: services.length,
    revenue: services.reduce((sum, s) => sum + s.price, 0),
    inPromotion: services.filter(s => s.inPromotion).length
  };

  useEffect(() => {
    loadServices();
  }, []);

  return {
    services,
    loading,
    error,
    stats,
    createService,
    updateService,
    deleteService,
    refreshServices: loadServices
  };
};
*/