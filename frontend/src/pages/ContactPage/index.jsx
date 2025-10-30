import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../../api/auth.api"

export const ContactPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    enterpriseName: "",
    contactName: "",
    email: "",
    phone: "",
    enterpriseSize: "",
    password: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

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
      }
      console.log("Enviando empresa:", enterprise)
      const response = await register(enterprise);

      setSubmitStatus("success")
      console.log("Empresa registrada:", response.data)
    } catch (error) {
      console.error("Error al enviar formulario:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <div className="mb-8">
          <div
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors mb-6"
            onClick={() => navigate(-1)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Volver</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-4">
            Contacto Empresarial
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Cuéntanos sobre tu organización y nos pondremos en contacto contigo
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Name */}
            <div className="space-y-2">
              <label htmlFor="enterpriseName" className="block font-medium text-gray-900">
                Nombre de la empresa *
              </label>
              <input
                type="text"
                id="enterpriseName"
                name="enterpriseName"
                required
                value={formData.enterpriseName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="Tu Empresa S.A."
              />
            </div>

            {/* Contact Name */}
            <div className="space-y-2">
              <label htmlFor="contactName" className="block font-medium text-gray-900">
                Nombre de contacto *
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                required
                value={formData.contactName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="Juan Pérez"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium text-gray-900">
                  Email corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="contacto@empresa.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block font-medium text-gray-900">
                  Contraseña *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="********"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium text-gray-900">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            {/* Employee Count */}
            <div className="space-y-2">
              <label htmlFor="enterpriseSize" className="block font-medium text-gray-900">
                Tamaño de la empresa *
              </label>
              <select
                id="enterpriseSize"
                name="enterpriseSize"
                required
                value={formData.enterpriseSize}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              >
                <option value="">Selecciona una opción</option>
                <option value="extra-small">1-10 empleados</option>
                <option value="small">11-50 empleados</option>
                <option value="medium">51-200 empleados</option>
                <option value="large">201-500 empleados</option>
                <option value="extra-large">Más de 500 empleados</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block font-medium text-gray-900">
                Cuéntanos sobre tus necesidades *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                placeholder="Describe qué tipo de certificados necesitas emitir, cuántos usuarios tendrás, y cualquier requisito específico..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-2xl transition-colors font-medium flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Enviando...</span>
                </>
              ) : submitStatus === "success" ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>¡Mensaje enviado!</span>
                </>
              ) : (
                <>
                  <span>Enviar mensaje</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-2xl">
                <p className="text-green-800 text-center">
                  Gracias por tu interés. Nos pondremos en contacto contigo en las próximas 24 horas.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 space-y-2">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  )
}
