import { useState } from "react";
import { User, Share2, Home, FileText, Clock } from "lucide-react";

export default function HomeUser() {
  const [selectedTab, setSelectedTab] = useState("home");

  // Datos simulados del usuario
  const userData = {
    name: "Erick Carvajal",
    address: "Av. Universidad 123, Ciudad de México",
    phone: "+52 55 1234 5678",
    profilePic: "https://randomuser.me/api/portraits/men/36.jpg",
  };

  const certificates = [
    {
      id: 1,
      name: "Ingeniería en Sistemas Computacionales",
      institution: "Instituto Tecnológico de México",
      categories: ["académico", "profesional"],
    },
    {
      id: 2,
      name: "Certificación en Inglés Avanzado",
      institution: "Cambridge English",
      categories: ["personal"],
    },
    {
      id: 3,
      name: "Curso Blockchain y Contratos Inteligentes",
      institution: "Coursera",
      categories: [],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Topbar (sin cambios) */}
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

        <nav className="flex items-center gap-6">
          <button
            onClick={() => setSelectedTab("home")}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              selectedTab === "home"
                ? "text-green-700"
                : "text-gray-600 hover:text-green-700"
            }`}
          >
            <Home size={18} /> Home
          </button>
          <button
            onClick={() => setSelectedTab("certificados")}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              selectedTab === "certificados"
                ? "text-green-700"
                : "text-gray-600 hover:text-green-700"
            }`}
          >
            <FileText size={18} /> Certificados
          </button>
          <button
            onClick={() => setSelectedTab("historial")}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              selectedTab === "historial"
                ? "text-green-700"
                : "text-gray-600 hover:text-green-700"
            }`}
          >
            <Clock size={18} /> Historial
          </button>
          <button
            onClick={() => setSelectedTab("perfil")}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              selectedTab === "perfil"
                ? "text-green-700"
                : "text-gray-600 hover:text-green-700"
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
      {/* ✅ Contenido principal */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 space-y-8 flex-1">
        {/* Parte superior: perfil */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Imagen */}
          <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Perfil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Datos del perfil */}
          <div className="flex flex-col space-y-2 text-gray-800">
            <h2 className="text-2xl font-semibold">Carlos Ramírez López</h2>
            <p className="text-gray-600">📍 Av. Reforma #145, CDMX</p>
            <p className="text-gray-600">📞 +52 55 1234 5678</p>
          </div>
        </section>

        {/* Parte inferior: lista de certificados */}
        <section className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 max-w-full overflow-hidden">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Mis Certificados
          </h3>

          <div className="max-h-[400px] overflow-y-auto space-y-4 pr-2">
            {/* Ejemplo 1 - Múltiples categorías */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg text-gray-800">
                Ingeniería en Sistemas Computacionales
              </h4>
              <p className="text-gray-600">Instituto Tecnológico de México</p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  Académico
                </span>
                <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                  Profesional
                </span>
              </div>
            </div>

            {/* Ejemplo 2 - Una sola categoría */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg text-gray-800">
                Certificación en Inglés Avanzado
              </h4>
              <p className="text-gray-600">Cambridge English</p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                  Personal
                </span>
              </div>
            </div>

            {/* Ejemplo 3 - Sin categoría */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg text-gray-800">
                Curso de Blockchain y Contratos Inteligentes
              </h4>
              <p className="text-gray-600">Coursera</p>
              <p className="mt-2 text-sm text-gray-500 italic">
                Sin categoría asignada
              </p>
            </div>
          </div>
        </section>
      </main>
   </div>
  );
}