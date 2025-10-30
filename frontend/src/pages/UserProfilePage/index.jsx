// 1. Importar hooks de React y el contexto
import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import HeaderNav from '../../components/HeaderNav';
import { useAuth } from '../../context/AuthContext'; // <--- LA CLAVE

// 2. StyledInputField (Sin cambios)
const StyledInputField = ({ label, id, name, type = 'text', value, onChange, readOnly = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name} 
      value={value} 
      onChange={onChange} 
      readOnly={readOnly}
      className={`
        w-full px-4 py-3 border border-gray-200 rounded-lg
        focus:ring-2 focus:ring-green-600 focus:border-green-600 focus:outline-none
        transition-colors
        ${readOnly ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white'}
      `}
    />
  </div>
);

export default function UserProfile() {
  // 3. Obtener el usuario del contexto
  // === MODIFICACIÓN AQUÍ ===
  // Asumimos que tu AuthContext provee el 'token' y una función 'setUser' 
  // para actualizar el estado global del usuario.
  const { user, loading, token, setUser } = useAuth();

  // 4. Estado local del formulario (Sin cambios)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: ''
  });

  // === NUEVO ESTADO PARA FEEDBACK ===
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // 5. Rellenar el formulario cuando el 'user' del contexto cargue (Sin cambios)
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        address: user.address || '',
        phone: user.phone || '',
        email: user.email || ''
      });
    }
  }, [user]); // Este efecto se dispara cada vez que 'user' cambia

  // 6. Handler genérico para actualizar el estado del formulario (Sin cambios)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // === MODIFICACIÓN EN HANDLESUBMIT ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage({ type: '', text: '' }); // Limpiar mensajes previos

    // Excluimos el email porque es readOnly y no lo actualizamos
    const { email, ...updateData } = formData;

    try {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // ¡Aquí usamos el token!
        },
        body: JSON.stringify(updateData) // Enviamos solo los datos a actualizar
      });

      const data = await response.json();

      if (!response.ok) {
        // Si el servidor envía un error (ej: 401, 404, 500)
        throw new Error(data.message || 'Error al actualizar el perfil');
      }

      // ¡ÉXITO!
      // 1. Actualizar el estado global de AuthContext
      setUser(data); 
      // 2. Mostrar mensaje de éxito
      setMessage({ type: 'success', text: '¡Perfil guardado con éxito!' });
      
    } catch (error) {
      // Si hay un error de red o del servidor
      setMessage({ type: 'error', text: error.message });
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log('Contraseña actualizada');
    // Aquí iría la lógica para el formulario de contraseña
  };

  // 7. Mostrar "Cargando..." (Sin cambios)
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <HeaderNav />
        <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
          <p className="text-center text-gray-600">Cargando perfil...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderNav />

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        
        <div className="flex items-center gap-4 mb-10">
          <User className="w-16 h-16 text-gray-300" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tu Perfil</h1>
            <p className="text-lg text-gray-600">
              Actualiza tus datos y gestiona tu contraseña.
            </p>
          </div>
        </div>

        {/* 9. Formulario conectado al estado 'formData' */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Información Personal</h2>

          {/* === NUEVO: Contenedor para mensajes de éxito o error === */}
          {message.text && (
            <div className={`p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {message.text}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StyledInputField 
              label="Nombre(s)" 
              id="firstName" 
              name="firstName"
              value={formData.firstName} 
              onChange={handleChange} 
            />
            <StyledInputField 
              label="Apellidos" 
              id="lastName" 
              name="lastName"
              value={formData.lastName} 
              onChange={handleChange} 
            />
            <StyledInputField 
              label="Dirección" 
              id="address" 
              name="address"
              value={formData.address} 
              onChange={handleChange} 
            />
            <StyledInputField 
              label="Teléfono móvil" 
              id="phone" 
              name="phone"
              value={formData.phone} 
              onChange={handleChange} 
            />
            <div className="md:col-span-2">
              <StyledInputField 
                label="Correo electrónico" 
                id="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange} 
                readOnly={true} 
              />
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              // === MODIFICACIÓN AQUÍ ===
              // Deshabilitar el botón mientras se guarda
              disabled={isSaving}
              className={`
                px-6 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg 
                hover:bg-green-700 hover:rounded-3xl duration-300 transition-all border-none
                ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {/* === MODIFICACIÓN AQUÍ === */}
              {isSaving ? 'Guardando...' : 'Guardar Información'}
            </button>
          </div>
        </form>

        <hr className="my-12 border-gray-200" />

        {/* Formulario de Contraseña (Sin cambios) */}
        <form onSubmit={handlePasswordSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Cambiar contraseña</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StyledInputField 
              label="Contraseña anterior" 
              id="currentPassword" 
              name="currentPassword" 
              type="password" 
            />
            <StyledInputField 
              label="Contraseña nueva" 
              id="newPassword" 
              name="newPassword" 
              type="password" 
            />
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 hover:rounded-3xl duration-300 transition-all border-none"
            >
              Actualizar Contraseña
            </button>
          </div>
        </form>
        
      </main>
    </div>
  );
}