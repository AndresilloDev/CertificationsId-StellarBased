import { useState } from "react";
import { PlusCircle, X, FileText } from "lucide-react";
import { User, Share2, Home, Clock, Search } from "lucide-react";

export default function CertificationsByCategory() {
  const [certificates, setCertificates] = useState({
    académico: [
      { id: 1, name: "Diplomado en IA", institution: "UNAM" },
      { id: 2, name: "Curso de Machine Learning", institution: "Platzi" },
    ],
    profesional: [
      { id: 3, name: "Certificación en AWS", institution: "Amazon" },
    ],
    personal: [
      { id: 4, name: "Curso de Comunicación Efectiva", institution: "Coursera" },
    ],
  });

  const handleAddCertificate = (category) => {
    const newCert = {
      id: Date.now(),
      name: "Nuevo certificado",
      institution: "Institución Ejemplo",
    };
    setCertificates((prev) => ({
      ...prev,
      [category]: [...prev[category], newCert],
    }));
  };

  const handleRemoveCertificate = (category, id) => {
    setCertificates((prev) => ({
      ...prev,
      [category]: prev[category].filter((cert) => cert.id !== id),
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
            {/* Topbar */}
            <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <span className="text-2xl font-semibold text-header">
                        Stellar Certification Protocol
                    </span>
                </div>

                <nav className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
                        <Home size={18} /> Home
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
                        <FileText size={18} /> Certificados
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-green-700">
                        <Clock size={18} /> Historial
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
                        <User size={18} /> Perfil
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">
                        <Share2 size={16} /> Compartir
                    </button>
                </nav>
            </header>

        
    <main className="max-w-7xl mx-auto w-full px-6 py-10 space-y-8 flex-1">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Certificaciones
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(certificates).map(([category, certs]) => (
          <div
            key={category}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800 capitalize">
                Certificados {category}
              </h3>
              <button
                onClick={() => handleAddCertificate(category)}
                className="text-green-600 hover:text-green-700 transition"
              >
                <PlusCircle size={22} />
              </button>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[450px] pr-1">
              {certs.length > 0 ? (
                certs.map((cert) => (
                  <div
                    key={cert.id}
                    className="relative bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                  >
                    {/* Botón de eliminar */}
                    <button
                      onClick={() => handleRemoveCertificate(category, cert.id)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>

                    {/* Contenido del certificado */}
                    <h4 className="font-semibold text-gray-800">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{cert.institution}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic text-sm">
                  No hay certificados en esta categoría.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
    </div>
  );
}