import React, { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { User, Share2, FileText, Clock } from 'lucide-react';
import { emitCertificate } from '../../api/certificates.api';

const FileUploadBox = ({ onFileSelect, selectedFile }) => {
  const fileInputRef = React.useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-300 rounded-xl h-60 w-full transition-colors hover:border-green-500 cursor-pointer bg-gray-50 hover:bg-white"
      >
        <ArrowDownTrayIcon className="w-12 h-12 text-gray-500" />
        <p className="mt-4 text-sm text-gray-600">
          Arrastra y suelta tu archivo aquí, o haz clic para subir.
        </p>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleChange}
        />
      </div>
      {selectedFile && (
        <p className="mt-2 text-sm text-green-700">
          Archivo seleccionado: {selectedFile.name}
        </p>
      )}
    </div>
  );
};

const FormInputField = ({ label, id, type = 'text', placeholder }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
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
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentEmail = document.getElementById("studentEmail").value;
    const trackingCode = document.getElementById("trackingCode").value;
    const issueDate = document.getElementById("issueDate").value;

    if (!studentEmail || !trackingCode) {
      alert("Correo y código de rastreo son obligatorios");
      return;
    }

    try {
      setLoading(true);
      const result = await emitCertificate({ studentEmail, trackingCode, issueDate });
      console.log("Certificado emitido:", result.data);
      alert("Certificado emitido correctamente, codigo: " + result.data.stdout);
    } catch (error) {
      console.error(error);
      alert("Error al emitir certificado");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <span className="text-2xl font-semibold text-gray-800">Stellar Certification Protocol</span>
        </div>
        <nav className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm font-semibold text-green-700 border-b-2 border-green-700 pb-1">
            <FileText size={18} /> Emitir certificado
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
            <Clock size={18} /> Historial
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
            <Share2 size={18} /> Api
          </button>
          <div role="separator" aria-orientation="vertical" className="h-6 w-px bg-gray-200 mx-2" />
          <button className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-green-700">
            <User size={18} /> Jariano
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">
            <Share2 size={16} /> Compartir
          </button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Emisión de Certificados</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800">Certificar documento:</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-base font-medium text-gray-700">Archivo:</p>
              <FileUploadBox onFileSelect={setSelectedFile} selectedFile={selectedFile} />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors mt-6"
              >
                {loading ? "Emitiendo..." : "Emitir Certificado"}
              </button>
            </div>
            <div className="space-y-6">
              <FormInputField label="Correo de estudiante:" id="studentEmail" placeholder="ejemplo@estudiante.com" />
              <FormInputField label="Código de rastreo:" id="trackingCode" placeholder="RST-000-000" />
              <FormInputField label="Fecha de emisión:" id="issueDate" type="date" />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}