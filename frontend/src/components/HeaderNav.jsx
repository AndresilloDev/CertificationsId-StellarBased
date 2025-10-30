import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Share2, LogOut, Menu, X } from 'lucide-react';

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // const { logout } = useAuth(); // Descomenta cuando tu AuthContext esté listo
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirige al login
  };

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Certificados', href: '/certificados' },
    { name: 'Historial', href: '/historial' },
    { name: 'Perfil', href: '/perfil' },
  ];

  const activeClassName = "text-sm font-semibold text-green-700";
  const inactiveClassName = "text-sm font-medium text-gray-600 hover:text-black transition-colors";

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
            Stellar Certification Protocol
            </Link>
        </div>

        {/* Navegación de Escritorio */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="px-5 py-2.5 text-sm font-medium text-black bg-secondary rounded-lg hover:bg-secondary-hover hover:rounded-3xl duration-300 border border-border text-center flex items-center gap-2"
          >
            <LogOut size={16} />
            Salir
          </button>
          <button
            className="px-5 py-2.5 text-sm font-medium text-white bg-action rounded-lg hover:bg-action-hover hover:rounded-3xl duration-300 border border-none text-center flex items-center gap-2"
          >
            <Share2 size={16} />
            Compartir
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
          <button
            className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-action rounded-lg hover:bg-action-hover mt-2"
          >
            Compartir
          </button>
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-3 text-center text-sm font-medium text-black bg-secondary rounded-lg hover:bg-secondary-hover border border-border"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}