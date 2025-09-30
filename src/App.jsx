import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
// import Dashboard from './pages/admin/Dashboard'; // Para futuro
// import PrivateRoute from './components/auth/PrivateRoute'; // Para futuro

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública: Home */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta pública: Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rutas protegidas (futuro) */}
        {/* <Route 
          path="/admin/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        /> */}
      </Routes>
    </BrowserRouter>
  );
}