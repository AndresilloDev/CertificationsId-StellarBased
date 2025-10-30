import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';
// 1. Asegúrate de que la ruta al AuthContext sea correcta
import { useAuth } from '../context/AuthContext'; 

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // 2. Obtener la función 'logout' del contexto
  const { logout } = useAuth(); 

  const handleLogout = () => {
    // 3. Llamar a la función 'logout' del contexto
    logout();
    // Y luego redirigir
    navigate('/login');
  };

  const navLinks = [
    { name: 'Home', href: '/user/home' },
    { name: 'Perfil', href: '/user/profile' }
  ];

  return (
    <header className="border border-gray-200 m-4 lg:mx-16 rounded-xl sticky top-4 bg-white/80 backdrop-blur-lg z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
            I
          </div>
          <Link
            to="/"
            className="text-xl md:text-2xl font-semibold text-center"
          >
            BlockTrust
          </Link>
        </div>

        {/* Navegación de Escritorio */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="relative py-1"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'font-semibold text-black'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {link.name}
                  </span>
                  
                  <span
                    className={`absolute bottom-[-2px] left-0 w-full h-[2px] bg-green-600
                                transition-transform duration-300 ease-out
                                ${isActive ? 'scale-x-100' : 'scale-x-0'}
                                origin-left`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Botón de Salir (Escritorio) - Ahora funciona */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleLogout} // <--- Esta función ya está actualizada
            className="px-5 py-2.5 text-sm font-medium text-black bg-secondary rounded-lg hover:bg-secondary-hover hover:rounded-3xl duration-300 border border-border text-center flex items-center gap-2"
          >
            <LogOut size={16} />
            Salir
          </button>
        </div>

        {/* Botón de Hamburguesa (Móvil) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable (Móvil) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full px-4 py-3 text-center text-sm font-medium rounded-lg border ${
                  isActive
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : 'text-black bg-secondary hover:bg-secondary-hover border-border'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Botón de Salir (Móvil) - Ahora funciona */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              handleLogout(); // <--- Esta función ya está actualizada
            }}
            className="block w-full px-4 py-3 text-center text-sm font-medium text-black bg-secondary rounded-lg hover:bg-secondary-hover border border-border mt-2"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}