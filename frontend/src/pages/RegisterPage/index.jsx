import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Home, Phone } from "lucide-react";
import Header from "../../components/Header";
import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { register } = useAuth();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Las contraseñas no coinciden");
      return;
    }
    
    const registerData = formData;

    console.log("Registrando usuario con:", registerData);

    try {
      await register(registerData); 
      navigate("/home"); 
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main Content */}
      <main className="flex items-center justify-center py-12 md:py-20 px-4">
        {/* Form Box - max-w-2xl */}
        <div className="w-full max-w-2xl p-8 md:p-10 border border-gray-200 rounded-xl bg-white">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Crea tu cuenta
            </h1>
            <p className="text-base text-gray-600 mt-2">
              Únete para empezar a certificar.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            {/* Input: Email (Full width) */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={20} />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Correo electrónico"
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
              />
            </div>

            {/* Grid: Nombre y Apellidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Input: Nombre */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User size={20} />
                </span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={onChange}
                  placeholder="Nombre"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                />
              </div>

              {/* Input: Apellidos */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User size={20} />
                </span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={onChange}
                  placeholder="Apellidos"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                />
              </div>
            </div>

            {/* Grid: Teléfono (El bloque de fecha de nacimiento se ha ido) */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
              {/* Input: Teléfono */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Phone size={20} />
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  placeholder="Teléfono"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                />
              </div>
            </div>

            {/* Input: Dirección (Full width) */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Home size={20} />
              </span>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={onChange}
                placeholder="Dirección"
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
              />
            </div>

            {/* Grid: Contraseñas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Input: Contraseña */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={onChange}
                  placeholder="Contraseña"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                />
              </div>

              {/* Input: Confirmar Contraseña */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={onChange}
                  placeholder="Confirmar contraseña"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                />
              </div>
            </div>

            {/* Submit Button (Full width) */}
            <button
              type="submit"
              className="w-full px-6 py-3 text-base font-medium text-white bg-action rounded-lg hover:bg-action-hover hover:rounded-3xl duration-300 border border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Registrarme
            </button>
          </form>

          {/* Link a Login */}
          <p className="text-center text-sm text-gray-600 mt-8">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="font-medium text-black hover:underline"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}