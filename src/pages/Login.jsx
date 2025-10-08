import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, AlertCircle, ArrowLeft } from "lucide-react";
import { login } from "../services/authService";

export default function Login() {
  // ═══════════════════════════════════════════════════════════
  // ESTADO DEL COMPONENTE
  // ═══════════════════════════════════════════════════════════
  
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // ═══════════════════════════════════════════════════════════
  // MANEJADORES DE EVENTOS
  // ═══════════════════════════════════════════════════════════

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Limpiar error al escribir
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // ─────────────────────────────────────────────────────
    // Validación básica del lado del cliente
    // ─────────────────────────────────────────────────────
    if (!formData.email || !formData.password) {
      setError("Por favor completa todos los campos");
      setIsLoading(false);
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor ingresa un email válido");
      setIsLoading(false);
      return;
    }

    try {
      // ─────────────────────────────────────────────────────
      // LLAMAR AL SERVICIO DE AUTENTICACIÓN
      // ─────────────────────────────────────────────────────
      const response = await login(formData.email, formData.password);

      // Si llegamos aquí, el login fue exitoso
      // El servicio ya guardó el token y los datos del usuario
      
      console.log('Login exitoso:', response);

      // ─────────────────────────────────────────────────────
      // Redirigir al dashboard
      // ─────────────────────────────────────────────────────
      navigate('/admin/dashboard');
      
    } catch (err) {
      // ─────────────────────────────────────────────────────
      // MANEJO DE ERRORES
      // ─────────────────────────────────────────────────────
      console.error("Error en login:", err);
      
      // Mostrar el mensaje de error al usuario
      setError(err.message || "Error al iniciar sesión");
      
    } finally {
      // Siempre desactivar el loading
      setIsLoading(false);
    }
  };

  // ═══════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black px-6 py-12">
      {/* Botón Volver Atrás */}
      <button
        onClick={() => window.history.back()}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 pl-4 pr-8 py-2 bg-black/50 backdrop-blur-xl border border-white/10 hover:border-lime-500/30 rounded-xl text-white hover:text-lime-400 transition-all duration-200 group"
      >
        <ArrowLeft className="w-6 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Volver</span>
      </button>

      {/* Container principal */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Lado izquierdo - Branding CON IMAGEN NEÓN */}
        <div
          className="hidden lg:flex flex-col justify-center rounded-3xl min-h-[600px] p-12 relative"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/13/81/fc/1381fc304bb9725658a0706794d5da31.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-lime-950/50 rounded-3xl"></div>

          {/* Puntos de fondo adicionales */}
          <div
            className="absolute inset-0 opacity-20 rounded-3xl"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(132, 204, 22, 0.3) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Contenido */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-3 group w-fit cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-black font-bold text-xl">TS</span>
              </div>
              <span className="text-2xl font-bold text-white">
                TechSolutions
              </span>
            </div>
            <div className="h-5"></div>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Panel de
                <br />
                Administración
              </h1>
              <div className="h-3"></div>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Gestiona tus proyectos, clientes y servicios desde un solo
                lugar.
              </p>
            </div>
            <div className="h-3"></div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 max-w-lg">
              <div>
                <div className="h-3"></div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-gray-500">Proyectos</div>
              </div>
              <div>
                <div className="h-3"></div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-gray-500">Satisfacción</div>
              </div>
              <div>
                <div className="h-3"></div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-500">Soporte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lado derecho - Formulario */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            {/* Logo móvil */}
            <div className="lg:hidden flex justify-center">
              <div className="inline-flex items-center gap-3 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-black font-bold text-xl">TS</span>
                </div>
                <span className="text-2xl font-bold text-white">
                  TechSolutions
                </span>
              </div>
            </div>

            {/* Header */}
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-white">Iniciar sesión</h2>
              <p className="text-gray-400">
                Ingresa tus credenciales para continuar
              </p>
            </div>
            <div className="h-3"></div>

            {/* Error Alert */}
            {error && (
              <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl animate-fade-in">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-red-400">{error}</p>
              </div>
            )}

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="h-3"></div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  style={{ paddingLeft: "20px", paddingRight: "16px" }}
                  className="w-full h-12 bg-white/5 border border-white/10 focus:border-lime-500/50 focus:bg-white/[0.07] rounded-xl text-white placeholder-gray-500 transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Contraseña
                  </label>
                  <button
                    type="button"
                    className="text-sm text-gray-400 hover:text-lime-400 transition-colors cursor-pointer"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                    style={{ paddingLeft: "20px", paddingRight: "48px" }}
                    className="w-full h-12 bg-white/5 border border-white/10 focus:border-lime-500/50 focus:bg-white/[0.07] rounded-xl text-white placeholder-gray-500 transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors disabled:opacity-50"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="h-3"></div>
              <div className="h-3"></div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-lime-500 hover:bg-lime-400 disabled:bg-lime-500/50 
             disabled:cursor-not-allowed cursor-pointer 
             text-black font-semibold rounded-xl 
             transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Iniciando sesión...</span>
                  </>
                ) : (
                  <>
                    <span>Iniciar sesión</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="h-3"></div>

            {/* Back Link */}
            <div className="text-center">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group cursor-pointer"
              >
                <span className="group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
════════════════════════════════════════════════════════════════════════
CAMBIOS PRINCIPALES:
════════════════════════════════════════════════════════════════════════

1. IMPORT DEL SERVICIO:
   - import { login } from "../services/authService"
   - Ya no validamos hardcodeado

2. LÓGICA DE LOGIN:
   - await login(email, password)
   - El servicio maneja todo: petición HTTP, guardar token, etc.
   - Si es exitoso, redirige al dashboard
   - Si falla, muestra el error

3. VALIDACIONES:
   - Validación básica de email (regex)
   - Validación de campos vacíos
   - Mensajes de error claros

4. ESTADOS:
   - isLoading: Muestra spinner mientras carga
   - error: Muestra mensaje de error si falla
   - Botón deshabilitado durante carga

5. NAVEGACIÓN:
   - useNavigate() de react-router-dom
   - navigate('/admin/dashboard') en lugar de window.location

6. EXPERIENCIA DE USUARIO:
   - Loading spinner
   - Mensajes de error claros
   - Campos deshabilitados durante carga
   - Error se limpia al escribir

════════════════════════════════════════════════════════════════════════
*/