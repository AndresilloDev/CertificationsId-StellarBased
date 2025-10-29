import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

// Este componente para los campos de texto no necesita cambios.
const StyledInputField = ({ label, id, type = 'text', value, readOnly = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      defaultValue={value}
      readOnly={readOnly}
      className={`
        w-full px-4 py-3 border border-gray-300 rounded-xl 
        focus:ring-2 focus:ring-green-500 focus:outline-none transition-shadow
        ${readOnly ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
      `}
    />
  </div>
);


export default function UserProfileFocusedForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Información guardada');
  };

  return (
    // Se cambia el fondo a blanco para que combine mejor con la tarjeta
    <div className="min-h-screen bg-white">
      
      {/* Header: Alineado con el nuevo ancho del formulario (max-w-4xl) */}
      <header className="border border-gray-200 m-4 mx-auto max-w-4xl rounded-xl sticky top-4 bg-white/70 backdrop-blur-lg z-10">
        <div className="mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
              J
            </div>
            <span className="text-xl font-semibold text-gray-800">MiPlataforma</span>
          </div>
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

      {/* Main Content: Layout simplificado a una sola columna centrada */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Tarjeta contenedora para el formulario */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="space-y-2 mb-10">
                <h1 className="text-4xl font-bold text-gray-900">Tu Perfil</h1>
                <p className="text-lg text-gray-600">
                  Actualiza tus datos personales y gestiona tu contraseña.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campos de datos personales */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StyledInputField label="Nombre" id="nombre" value="Andres" />
                <StyledInputField label="Apellido paterno" id="apellidoPaterno" value="Gaspar" />
                <StyledInputField label="Apellido materno" id="apellidoMaterno" value="Garcia" />
                <StyledInputField label="Fecha nacimiento" id="fechaNacimiento" value="13/05/2004" type="text" />
              </div>

              <StyledInputField label="Dirección" id="direccion" value="Miguel Juarez 71 Lazaro Cuernavaca, Morelos" />
              <StyledInputField label="Teléfono móvil" id="telefono" value="7774580252" />
              <StyledInputField label="Correo electrónico" id="email" value="AndresChecoPerez@gmail.com" readOnly={true} />

              {/* Campos para cambiar la contraseña */}
              <div className="border-t pt-6 space-y-4">
                 <h2 className="text-lg font-semibold text-gray-800">Cambiar contraseña</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StyledInputField label="Contraseña anterior" id="currentPassword" type="password" />
                    <StyledInputField label="Contraseña nueva" id="newPassword" type="password" />
                 </div>
              </div>

              {/* Botón de acción */}
              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
              >
                Guardar informacion
              </button>
            </form>
        </div>
      </main>
    </div>
  );
}