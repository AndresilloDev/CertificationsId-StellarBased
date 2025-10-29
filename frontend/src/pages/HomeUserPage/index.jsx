import { useState } from "react";
import { User, Share2, Home, FileText, Clock } from "lucide-react";

export default function HomeUser() {
  const [selectedTab, setSelectedTab] = useState("home");

  // Datos simulados del usuario
  const userData = {
    name: "Erick Carvajal",
    address: "Av. Universidad 123, Ciudad de México",
    phone: "+52 55 1234 5678",
    profilePic: "https://via.placeholder.com/120",
  };

  const certificates = [
    { id: 1, name: "Certificado Académico - Ingeniería", category: "académico" },
    { id: 2, name: "Certificación Profesional - AWS", category: "profesional" },
    { id: 3, name: "Curso Personal - Comunicación Efectiva", category: "personal" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Topbar */}
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <span className="text-2xl font-semibold text-header">
            Stellar Certification Protocol
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <button
            onClick={() => setSelectedTab("home")}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              selectedTab === "home" ? "text-green-700" : "text-gray-600 hover:text-green-700"
            }`}
          >
            <Home size={18} /> Home
          </button>
          <button
            onClick={() => setSelectedTab("certificados")}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              selectedTab === "certificados" ? "text-green-700" : "text-gray-600 hover:text-green-700"
            }`}
          >
            <FileText size={18} /> Certificados
          </button>
          <button
            onClick={() => setSelectedTab("historial")}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              selectedTab === "historial" ? "text-green-700" : "text-gray-600 hover:text-green-700"
            }`}
          >
            <Clock size={18} /> Historial
          </button>
          <button
            onClick={() => setSelectedTab("perfil")}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              selectedTab === "perfil" ? "text-green-700" : "text-gray-600 hover:text-green-700"
            }`}
          >
            <User size={18} /> Perfil
          </button>
          <button
            onClick={() => setSelectedTab("compartir")}
            className="flex items-center gap-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors"
          >
            <Share2 size={16} /> Compartir
          </button>
        </nav>
      </header>

      {/* Contenido dinámico */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 flex-1">
        {selectedTab === "home" && (
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Perfil */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-sm">
              <img
                src={userData.profilePic}
                alt="Foto de perfil"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-600"
              />
              <h2 className="text-2xl font-semibold">{userData.name}</h2>
              <p className="text-gray-600 mt-1">{userData.address}</p>
              <p className="text-gray-600">{userData.phone}</p>
            </div>

            {/* Lista de Certificados */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Mis Certificados
              </h3>
              <ul className="space-y-3">
                {certificates.map((cert) => (
                  <li
                    key={cert.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-800">
                      {cert.name}
                    </span>
                    <span className="text-sm text-gray-600 capitalize">
                      {cert.category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {selectedTab === "certificados" && (
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Categorías de Certificados
            </h3>
            <ul className="space-y-3">
              <li className="border border-gray-200 rounded-xl p-4 hover:bg-gray-100">
                Académico
              </li>
              <li className="border border-gray-200 rounded-xl p-4 hover:bg-gray-100">
                Profesional
              </li>
              <li className="border border-gray-200 rounded-xl p-4 hover:bg-gray-100">
                Personal
              </li>
            </ul>
          </div>
        )}

        {selectedTab === "historial" && (
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Historial de Certificados
            </h3>
            <ul className="space-y-3">
              {certificates.map((cert) => (
                <li
                  key={cert.id}
                  className="p-4 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  {cert.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedTab === "perfil" && (
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Datos Personales
            </h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Nombre:</strong> {userData.name}</p>
              <p><strong>Dirección:</strong> {userData.address}</p>
              <p><strong>Teléfono:</strong> {userData.phone}</p>
            </div>
          </div>
        )}

        {selectedTab === "compartir" && (
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Compartir Perfil
            </h3>
            <p className="text-gray-600 mb-6">
              Comparte tu perfil con tus datos y certificados verificados.
            </p>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors">
              Generar enlace de perfil
            </button>
          </div>
        )}
      </main>
    </div>
  );
}