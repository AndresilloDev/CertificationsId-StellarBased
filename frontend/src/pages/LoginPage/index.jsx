import React from 'react';
import { FcGoogle } from 'react-icons/fc'; // Icono de Google, necesitarás instalar react-icons

const LoginPage = () => {
  // Manejadores de estado para el correo y la contraseña (opcional, pero buena práctica)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciar sesión con:', { email, password });
    // Aquí iría tu lógica de autenticación (ej: llamada a API)
  };

  const handleGoogleLogin = () => {
    console.log('Continuar con Google');
    // Aquí iría tu lógica para iniciar sesión con Google
  };

  return (
    // Contenedor principal para centrar la tarjeta de login
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      {/* Tarjeta de login - ANCHO MODIFICADO AQUÍ */}
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl">
        
        <h1 className="text-2xl font-semibold text-gray-900">Iniciar sesión</h1>
        <p className="text-sm text-gray-500 mb-6">Accede a tu espacio personal</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Campo Correo electrónico */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Escribe tu correo electrónico aquí..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition duration-150"
            />
          </div>

          {/* Campo Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Escribe tu contraseña aquí..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition duration-150"
            />
          </div>

          {/* ¿Olvidaste tu contraseña? */}
          <div className="text-right pt-1 pb-4">
            <a href="#" className="text-sm text-gray-600 hover:text-black transition duration-150">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón Iniciar sesión */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition duration-150"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Separador "o" */}
        <div className="relative mt-6 mb-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              o
            </span>
          </div>
        </div>

        {/* Botón Continuar con Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 transition duration-150"
        >
          <FcGoogle className="w-5 h-5 mr-3" />
          Continuar con Google
        </button>

      </div>
    </div>
  );
};

export default LoginPage;