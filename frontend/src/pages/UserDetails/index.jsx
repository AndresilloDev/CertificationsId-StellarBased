import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const InputField = ({ label, id, type = 'text', placeholder, value, colSpan = 'md:col-span-1', readOnly = false }) => (
  <div className={colSpan}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      defaultValue={value}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`
        w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800
        transition-all duration-200
        ${readOnly ? 'bg-gray-200 cursor-not-allowed' : 'hover:border-gray-400'}
      `}
    />
  </div>
);


export default function UserProfilePage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Información guardada');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header - AHORA ALINEADO CON EL CONTENIDO */}
      <header className="border border-gray-200 m-4 mx-auto max-w-4xl rounded-xl sticky top-4 bg-white/70 backdrop-blur-lg z-10">
        <div className="mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
              J
            </div>
            <span className="text-xl font-semibold text-gray-800">MiPlataforma</span>
          </div>

          {/* Navegación del Usuario */}
          <div className="flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm font-medium text-black bg-transparent rounded-lg hover:bg-gray-100 duration-300">
              Historial
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-black bg-transparent rounded-lg hover:bg-gray-100 duration-300">
              Categorías
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-black bg-gray-100 rounded-lg duration-300 border border-gray-200">
              Datos personales
            </a>
            
            <div role="separator" aria-orientation="vertical" className="h-6 w-px bg-gray-200 mx-2" />

            <div className="flex items-center gap-3 cursor-pointer">
               <span className="text-sm font-medium text-gray-800">Jariano Perez Gonzales</span>
               <UserCircleIcon className="w-8 h-8 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Formulario de Información Personal */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
          
          {/* Título del formulario */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">
              Información personal
            </h1>
            <p className="text-base text-gray-600 mt-2">
              Edita tu información personal y actualiza tu contraseña.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Grid para los campos de datos personales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField label="Nombre" id="nombre" value="Andres" />
              <InputField label="Apellido paterno" id="apellidoPaterno" value="Gaspar" />
              <InputField label="Apellido materno" id="apellidoMaterno" value="Garcia" />

              <InputField label="Fecha nacimiento" id="fechaNacimiento" value="13/05/2004" />
              <InputField label="Dirección" id="direccion" value="Miguel Juarez 71 Lazaro Cuernavaca, Morelos" colSpan="md:col-span-2" />
              
              <InputField label="Teléfono móvil" id="telefono" value="7774580252" />
              <InputField label="Correo electrónico" id="email" value="AndresChecoPerez@gmail.com" readOnly={true} colSpan="md:col-span-2" />
            </div>

            {/* Separador */}
            <div className="border-t border-gray-200"></div>

            {/* Sección para cambiar contraseña */}
            <div>
               <h2 className="text-xl font-semibold text-gray-800">Cambiar contraseña</h2>
               <p className="text-sm text-gray-500 mt-1">Déjalo en blanco si no quieres cambiarla.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <InputField label="Contraseña anterior" id="currentPassword" type="password" placeholder="••••••••••••••" />
                    <InputField label="Contraseña nueva" id="newPassword" type="password" placeholder="••••••••••••••" />
                </div>
            </div>

            {/* Botón para guardar */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-black hover:rounded-2xl duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Guardar informacion
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}