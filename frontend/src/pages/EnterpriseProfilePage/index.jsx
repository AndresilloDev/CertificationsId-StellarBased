import React, { useState, useEffect } from 'react';
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

export default function EnterpriseProfile() {
  const { user, loading, token, setUser } = useAuth();

  const [formData, setFormData] = useState({
    enterpriseName: 'Mongo',
    contactName: 'MongoInc',
    email: 'empresa3@gmail.com',
    phone: '555 09 13067',
    enterpriseSize: 'large',
    alias: 'MongoInc',
    privateKey: 'GDFGN3ABVXVCCOWAD5HIHJ4QCKWFDUBGRKRMOWB6OICB57W72YHWEK44'
  });

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if (user && user.role === 'enterprise') {
      setFormData(prev => ({
        ...prev,
        enterpriseName: user.enterpriseName || prev.enterpriseName,
        contactName: user.contactName || prev.contactName,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
        enterpriseSize: user.enterpriseSize || prev.enterpriseSize,
        alias: user.alias || prev.alias,
        privateKey: user.privateKey || prev.privateKey
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage({ type: '', text: '' });

    const { email, ...updateData } = formData;

    try {
      const response = await fetch('/api/enterprise/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updateData)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Error al actualizar el perfil');

      setUser(data);
      setMessage({ type: 'success', text: '¡Perfil de empresa actualizado con éxito!' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <HeaderNav />
        <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
          <p className="text-center text-gray-600">Cargando perfil de empresa...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderNav />

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Perfil de Empresa</h2>

          {message.text && (
            <div
              className={`p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StyledInputField
              label="Nombre de la Empresa"
              id="enterpriseName"
              name="enterpriseName"
              value={formData.enterpriseName}
              onChange={handleChange}
            />
            <StyledInputField
              label="Nombre del Contacto"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
            />
            <StyledInputField
              label="Teléfono"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <div>
              <label htmlFor="enterpriseSize" className="block text-sm font-medium text-gray-700 mb-1.5">
                Tamaño de la Empresa
              </label>
              <select
                id="enterpriseSize"
                name="enterpriseSize"
                value={formData.enterpriseSize}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 focus:outline-none transition-colors"
              >
                <option value="">Selecciona un tamaño</option>
                <option value="extra-small">Extra pequeña</option>
                <option value="small">Pequeña</option>
                <option value="medium">Mediana</option>
                <option value="large">Grande</option>
                <option value="extra-large">Extra grande</option>
              </select>
            </div>

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

            {/* Nuevos campos */}
            <StyledInputField
              label="Alias"
              id="alias"
              name="alias"
              value={formData.alias}
              onChange={handleChange}
            />
            <StyledInputField
              label="Llave Pública"
              id="privateKey"
              name="privateKey"
              value={formData.privateKey}
              onChange={handleChange}
              readOnly={true}
            />
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
              {isSaving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}