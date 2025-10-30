import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
// Importamos los íconos de Lucide para la topbar (UserCircleIcon ya no se usa del otro set)
import { User, Share2, Home, FileText, Clock } from 'lucide-react';

// Componente para la caja de carga de archivos (Drag and Drop)
const FileUploadBox = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-300 rounded-xl h-60 w-full transition-colors hover:border-green-500 cursor-pointer bg-gray-50 hover:bg-white">
      <ArrowDownTrayIcon className="w-12 h-12 text-gray-500" />
      <p className="mt-4 text-sm text-gray-600">
        Arrastra y suelta tu archivo aquí, o haz clic para subir.
      </p>
      <input type="file" className="hidden" /> {/* Input de archivo oculto */}
    </div>
  );
};

// Componente reutilizable para los campos de entrada
const FormInputField = ({ label, id, type = 'text', placeholder }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-shadow"
    />
  </div>
);


export default function EmitCertificatePage() {

  // Puedes usar React.useState aquí para manejar el estado del formulario
  // const [formData, setFormData] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario de emisión de certificado enviado. Listo para el backend.');
    // Aquí iría tu lógica de envío de datos al backend
  };

  return (
    <div className="min-h-screen bg-white">

      {/* 1. HEADER: TOPBAR COMPLETA CON ESTILO DE DASHBOARD */}
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-2">
          {/* LOGO DE STELLAR */}
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <span className="text-2xl font-semibold text-gray-800">
            Stellar Certification Protocol
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {/* Botón Certificados (Dashboard) */}
          <button className="flex items-center gap-2 text-sm font-semibold text-green-700 border-b-2 border-green-700 pb-1">
            <FileText size={18} /> Emitir certificado
          </button>
          {/* Botón ACTIVO para esta página (Emitir) */}
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
            <Clock size={18} /> Historial
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
            <Share2 size={18} /> Api
          </button>

          {/* Separador */}
          <div role="separator" aria-orientation="vertical" className="h-6 w-px bg-gray-200 mx-2" />

          {/* Perfil del Usuario */}
          <button className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-green-700">
            <User size={18} /> Jariano
          </button>
          {/* Botón de Acción (Compartir o API) */}
          <button className="flex items-center gap-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">
            <Share2 size={16} /> Compartir
          </button>
        </nav>
      </header>

      {/* 2. MAIN CONTENT: Formulario de Emisión */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Emisión de Certificados
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          <h2 className="text-2xl font-semibold text-gray-800">
            Certificar documento:
          </h2>

          {/* Layout de dos columnas para File Upload y Campos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Columna Izquierda: Carga de Archivo */}
            <div className="space-y-4">
              <p className="text-base font-medium text-gray-700">Archivo:</p>
              <FileUploadBox />

              {/* Botón de emisión principal */}
              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors mt-6"
              >
                Emitir Certificado
              </button>
            </div>

            {/* Columna Derecha: Campos de Formulario */}
            <div className="space-y-6">
              <FormInputField
                label="Correo de estudiante:"
                id="studentEmail"
                placeholder="ejemplo@estudiante.com"
              />
              <FormInputField
                label="Código de rastreo:"
                id="trackingCode"
                placeholder="RST-000-000"
              />
              <FormInputField
                label="Fecha:"
                id="issueDate"
                type="date"
              />
              <FormInputField
                label="Wallet:"
                id="walletAddress"
                placeholder="0x..."
              />

            </div>
          </div>

        </form>

      </main>
    </div>
  );
}