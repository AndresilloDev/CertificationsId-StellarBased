// src/pages/HomeUserPage/index.jsx
import React, { useState, useEffect } from 'react';
import HeaderNav from '../../components/HeaderNav';
// import axios from 'axios'; // Importa axios cuando estés listo
import { MapPin, Phone } from 'lucide-react'; // Importamos iconos consistentes con tu LoginPage

// --- Datos simulados (sin cambios) ---
const mockUserData = {
  name: "Carlos Ramírez López",
  address: "Av. Reforma #145, CDMX",
  phone: "+52 55 1234 5678",
  profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
};

const mockCertificates = [
  { id: 1, name: "Ingeniería en Sistemas Computacionales", institution: "Instituto Tecnológico de México", categories: ["Académico", "Profesional"] },
  { id: 2, name: "Certificación en Inglés Avanzado", institution: "Cambridge English", categories: ["Personal"] },
  { id: 3, name: "Curso de Blockchain y Contratos Inteligentes", institution: "Coursera", categories: [] },
];
// --- Fin de datos simulados ---

// Componente para una tarjeta de certificado individual (Refactorizado)
function CertificateCard({ certificate }) {
  
  // -- CAMBIO CLAVE: Estilo de Chip Monocromático --
  // Eliminamos el switch de colores. Ahora todos los chips son
  // 'bg-gray-100' y 'text-gray-700', acorde con el diseño minimalista
  // de tus otras páginas (similar a inputs o botones secundarios).
  const CategoryChip = ({ category }) => (
    <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
      {category}
    </span>
  );

  return (
    // Se mantiene el diseño de tarjeta, pero ajustamos los colores del texto
    // para ser consistentes con LandingPage y LoginPage.
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold text-lg text-gray-900">
        {certificate.name}
      </h4>
      <p className="text-gray-700">{certificate.institution}</p>
      
      {certificate.categories.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-2">
          {certificate.categories.map((cat, index) => (
            <CategoryChip key={index} category={cat} />
          ))}
        </div>
      ) : (
        <p className="mt-2 text-sm text-gray-600 italic">
          Sin categoría asignada
        </p>
      )}
    </div>
  );
}


export default function HomeUserPage() {
  const [userData, setUserData] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // --- Simulación ---
        await new Promise(resolve => setTimeout(resolve, 500));
        setUserData(mockUserData);
        setCertificates(mockCertificates);
      } catch (error) {
        console.error("Error al cargar los datos", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      // -- CAMBIO: Añadido HeaderNav al estado de carga --
      // Esto evita un "salto" de layout y es más consistente.
      <div className="min-h-screen bg-white flex flex-col">
        <HeaderNav />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg text-gray-600">Cargando...</p>
          {/* Aquí podrías poner un componente Loader/Spinner */}
        </main>
      </div>
    );
  }

  if (!userData) {
     return (
      <div className="min-h-screen bg-white flex flex-col">
        <HeaderNav />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg text-red-600">No se pudieron cargar los datos del usuario.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <HeaderNav />
      
      {/* -- CAMBIO: Padding unificado --
          Usamos 'py-12 md:py-16' para coincidir con tu LandingPage.
      */}
      <main className="max-w-7xl mx-auto w-full px-6 py-12 md:py-16 space-y-10 flex-1">
        
        {/* Parte superior: perfil */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border-4 border-white shadow-sm">
            <img
              src={userData.profilePic}
              alt="Perfil"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2 text-center sm:text-left pt-2">
            {/* -- CAMBIO: Tipografía unificada --
                'text-gray-900' para títulos, 'text-gray-700' para datos.
            */}
            <h2 className="text-3xl font-semibold text-gray-900">{userData.name}</h2>
            
            {/* -- CAMBIO: Iconos de Lucide --
                Usamos los mismos iconos que en tu LoginPage para coherencia.
            */}
            <p className="text-gray-700 flex items-center justify-center sm:justify-start gap-2">
              <MapPin size={16} className="text-gray-500" />
              {userData.address}
            </p>
            <p className="text-gray-700 flex items-center justify-center sm:justify-start gap-2">
              <Phone size={16} className="text-gray-500" />
              {userData.phone}
            </p>
          </div>
        </section>

        {/* Parte inferior: lista de certificados */}
        {/* Este contenedor 'bg-gray-50' ya es muy consistente con tu diseño */}
        <section className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8 max-w-full overflow-hidden">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Mis Certificados
          </h3>

          {/* Reducimos el max-h para balancear, ajusta según necesites */}
          <div className="max-h-[350px] overflow-y-auto space-y-4 pr-2">
            {certificates.length > 0 ? (
              certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))
            ) : (
              <p className="text-gray-600">No tienes certificados registrados.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}