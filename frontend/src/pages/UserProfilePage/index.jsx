import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import HeaderNav from '../../components/HeaderNav';
import { useAuth } from '../../context/AuthContext';

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
  const { user, loading, token, setUser } = useAuth();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: ''
  });

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // --- NUEVOS ESTADOS PARA LA CONTRASEÑA ---
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: ''
  });
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState({ type: '', text: '' });
  // ------------------------------------------

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
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // --- NUEVO MANEJADOR PARA CAMBIOS DE CONTRASEÑA ---
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  // ------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage({ type: '', text: '' });

    const { email, ...updateData } = formData;

    try {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updateData) 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al actualizar el perfil');
      }

      setUser(data); 
      setMessage({ type: 'success', text: '¡Perfil guardado con éxito!' });
      
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setIsSaving(false);
    }
  };

  // --- LÓGICA IMPLEMENTADA PARA ACTUALIZAR CONTRASEÑA ---
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    if (!passwordData.currentPassword || !passwordData.newPassword) {
      setPasswordMessage({ type: 'error', text: 'Por favor, rellena ambos campos.' });
      return;
    }

    setIsSavingPassword(true);
    setPasswordMessage({ type: '', text: '' });

    try {
      // Asumimos un endpoint diferente para la contraseña, es una práctica común
      const response = await fetch('/api/users/password', { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(passwordData) 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al actualizar la contraseña');
      }

      setPasswordMessage({ type: 'success', text: '¡Contraseña actualizada con éxito!' });
      // Limpiar campos tras el éxito
      setPasswordData({ currentPassword: '', newPassword: '' }); 
    } catch (error) {
      setPasswordMessage({ type: 'error', text: error.message });
    } finally {
      setIsSavingPassword(false);
    }
  };
  // ----------------------------------------------------

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
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Información Personal</h2>

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
              disabled={isSaving}
              className={`
                px-6 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg 
                hover:bg-green-700 hover:rounded-3xl duration-300 transition-all border-none
                ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isSaving ? 'Guardando...' : 'Guardar Información'}
            </button>
          </div>
        </form>

        <hr className="my-12 border-gray-200" />

        {/* --- FORMULARIO DE CONTRASEÑA ACTUALIZADO --- */}
        <form onSubmit={handlePasswordSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Cambiar contraseña</h2>

          {/* Mensaje de éxito/error para la contraseña */}
          {passwordMessage.text && (
            <div className={`p-4 rounded-lg ${
              passwordMessage.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {passwordMessage.text}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StyledInputField 
              label="Contraseña anterior" 
              id="currentPassword" 
              name="currentPassword" 
              type="password"
              // Conectado al estado y manejador
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
            />
            <StyledInputField 
              label="Contraseña nueva" 
              id="newPassword" 
              name="newPassword" 
              type="password"
              // Conectado al estado y manejador
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              // Conectado al estado de carga de contraseña
              disabled={isSavingPassword}
              className={`
                px-6 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg 
                hover:bg-green-700 hover:rounded-3xl duration-300 transition-all border-none
                ${isSavingPassword ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isSavingPassword ? 'Actualizando...' : 'Actualizar Contraseña'}
            </button>
          </div>
        </form>
        {/* ------------------------------------------- */}
        
      </main>
    </div>
  );
}