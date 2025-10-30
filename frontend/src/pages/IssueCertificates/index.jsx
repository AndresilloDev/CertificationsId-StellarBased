import React from 'react';
import { UserCircleIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

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
      
      {/* 1. HEADER: Copiado del dashboard con la clase 'Emitir certificado' marcada como activa */}
      <header className="border border-gray-200 m-4 mx-auto max-w-7xl rounded-xl sticky top-4 bg-white/70 backdrop-blur-lg z-10">
        <div className="mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">LOGO</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 duration-300">
              Emitir certificado 
            </a> {/* Clase bg-green-700 activa */}
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-black duration-300">
              Historial
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-black duration-300">
              Api
            </a>
            
            <div role="separator" aria-orientation="vertical" className="h-6 w-px bg-gray-200 mx-2" />
            
            <div className="flex items-center gap-2 cursor-pointer">
               <span className="text-sm font-medium text-gray-800">Stellar</span>
               <UserCircleIcon className="w-8 h-8 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT: Formulario de Emisión */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Stellar
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
            
            <h2 className="text-2xl font-semibold text-gray-800">
                Certificar estudiante:
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