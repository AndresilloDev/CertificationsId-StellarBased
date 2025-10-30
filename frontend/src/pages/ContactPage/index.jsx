import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth.api";
import Header from "../../components/Header";
import {
  Mail,
  Lock,
  User,
  Phone,
  Building2,
  BarChart,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

export const ContactPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    enterpriseName: "",
    contactName: "",
    email: "",
    phone: "",
    enterpriseSize: "",
    password: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const enterprise = {
        email: formData.email,
        password: formData.password,
        enterpriseName: formData.enterpriseName,
        contactName: formData.contactName,
        phone: formData.phone,
        enterpriseSize: formData.enterpriseSize,
        message: formData.message,
        role: "enterprise",
        userType: "enterprise",
      };
      console.log("Enviando empresa:", enterprise);
      const response = await register(enterprise);

      setSubmitStatus("success");
      console.log("Empresa registrada:", response.data);
      // Opcional: Redirigir después de un éxito
      // setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Form Box - Estilo de RegisterPage */}
        <div className="w-full max-w-2xl mx-auto p-8 md:p-10 border border-gray-200 rounded-xl bg-white">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Contacto para Empresas
            </h1>
            <p className="text-base text-gray-600 mt-2">
              Regístra tu empresa para empezar a certificar.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            {/* Input: Nombre de la empresa */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Building2 size={20} />
              </span>
              <input
                type="text"
                id="enterpriseName"
                name="enterpriseName"
                required
                value={formData.enterpriseName}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                placeholder="Nombre de la empresa"
              />
            </div>

            {/* Input: Nombre de contacto */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={20} />
              </span>
              <input
                type="text"
                id="contactName"
                name="contactName"
                required
                value={formData.contactName}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                placeholder="Nombre de contacto"
              />
            </div>

            {/* Grid: Email y Contraseña */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Input: Email */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={20} />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                  placeholder="Email corporativo"
                />
              </div>

              {/* Input: Contraseña */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            {/* Input: Teléfono (Full width) */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Phone size={20} />
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
                placeholder="Teléfono (Opcional)"
              />
            </div>

            {/* Input: Tamaño de la empresa (Select) */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <BarChart size={20} />
              </span>
              <select
                id="enterpriseSize"
                name="enterpriseSize"
                required
                value={formData.enterpriseSize}
                onChange={handleChange}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200 appearance-none bg-white"
              >
                <option value="">Selecciona tamaño de empresa</option>
                <option value="extra-small">1-10 empleados</option>
                <option value="small">11-50 empleados</option>
                <option value="medium">51-200 empleados</option>
                <option value="large">201-500 empleados</option>
                <option value="extra-large">Más de 500 empleados</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown size={20} />
              </span>
            </div>

            {/* Input: Mensaje (Textarea) */}
            <div className="relative">
              <span className="absolute left-4 top-4 text-gray-400">
                <MessageSquare size={20} />
              </span>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200 resize-none"
                placeholder="Cuéntanos sobre tus necesidades..."
              />
            </div>

            {/* Submit Button (Estilo RegisterPage) */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="w-full px-6 py-3 text-base font-medium text-white bg-action rounded-lg hover:bg-action-hover hover:rounded-3xl duration-300 border border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:bg-gray-400"
            >
              {isSubmitting
                ? "Enviando..."
                : submitStatus === "success"
                ? "¡Enviado con éxito!"
                : "Enviar mensaje"}
            </button>

            {/* Success Message (Estilo adaptado) */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center text-sm">
                  Gracias por tu interés. Nos pondremos en contacto contigo en las
                  próximas 24 horas.
                </p>
              </div>
            )}
            
            {/* Error Message */}
             {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-center text-sm">
                  Hubo un error al enviar tu mensaje. Inténtalo de nuevo.
                </p>
              </div>
            )}
          </form>

          {/* Link a Login */}
          <p className="text-center text-sm text-gray-600 mt-8">
            ¿Ya tienes una cuenta de empresa?{" "}
            <Link
              to="/login"
              className="font-medium text-black hover:underline"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>

        {/* Additional Info (Se mantiene igual) */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 space-y-2">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-700 text-sm">empresas@ejemplo.com</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 space-y-2">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="font-semibold">Teléfono</h3>
            <p className="text-gray-700 text-sm">+34 900 000 000</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 space-y-2">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold">Horario</h3>
            <p className="text-gray-700 text-sm">Lun - Vie: 9:00 - 18:00</p>
          </div>
        </div>
      </main>
    </div>
  );
};