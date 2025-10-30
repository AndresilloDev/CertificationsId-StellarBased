// src/pages/HomeUserPage/index.jsx
import React, { useState, useEffect } from 'react';
import HeaderNav from '../../components/HeaderNav';
// import axios from 'axios'; // Importa axios cuando estés listo

// --- Datos simulados ---
// Estos datos vendrían de tu API
const mockUserData = {
  name: "Carlos Ramírez López",
  address: "Av. Reforma #145, CDMX",
  phone: "+52 55 1234 5678",
  profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
};

const mockCertificates = [
  {
    id: 1,
    name: "Ingeniería en Sistemas Computacionales",
    institution: "Instituto Tecnológico de México",
    categories: ["Académico", "Profesional"],
  },
  {
    id: 2,
    name: "Certificación en Inglés Avanzado",
    institution: "Cambridge English",
    categories: ["Personal"],
  },
  {
    id: 3,
    name: "Curso de Blockchain y Contratos Inteligentes",
    institution: "Coursera",
    categories: [],
  },
];
// --- Fin de datos simulados ---

// Componente para una tarjeta de certificado individual
function CertificateCard({ certificate }) {
  // Función para asignar colores a las categorías
  const getCategoryChip = (category) => {
    switch (category.toLowerCase()) {
      case 'académico':
        return <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">{category}</span>;
      case 'profesional':
        return <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">{category}</span>;
      case 'personal':
        return <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">{category}</span>;
      default:
        return <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">{category}</span>;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold text-lg text-gray-800">
        {certificate.name}
      </h4>
      <p className="text-gray-600">{certificate.institution}</p>
      
      {certificate.categories.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-2">
          {certificate.categories.map((cat, index) => (
            <React.Fragment key={index}>{getCategoryChip(cat)}</React.Fragment>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-sm text-gray-500 italic">
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
    // Simula la carga de datos del backend
    const fetchData = async () => {
      setLoading(true);
      try {
        // --- Conexión real (comentada) ---
        // const userRes = await axios.get('/api/user/profile');
        // const certRes = await axios.get('/api/certificates');
        // setUserData(userRes.data);
        // setCertificates(certRes.data);
        
        // --- Simulación ---
        await new Promise(resolve => setTimeout(resolve, 500)); // Simula delay de red
        setUserData(mockUserData);
        setCertificates(mockCertificates);

      } catch (error) {
        console.error("Error al cargar los datos", error);
        // Aquí manejarías el estado de error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-lg text-gray-600">Cargando...</p>
        {/* Aquí podrías poner un componente Loader */}
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
      
      {/* Contenido principal (tomado de tu HomeUser, con padding de LandingPage) */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 md:py-16 space-y-8 flex-1">
        
        {/* Parte superior: perfil */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={userData.profilePic}
              alt="Perfil"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2 text-gray-800 text-center sm:text-left">
            <h2 className="text-2xl font-semibold">{userData.name}</h2>
            <p className="text-gray-600">📍 {userData.address}</p>
            <p className="text-gray-600">📞 {userData.phone}</p>
          </div>
        </section>

        {/* Parte inferior: lista de certificados */}
        <section className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 max-w-full overflow-hidden">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Mis Certificados
          </h3>

          <div className="max-h-[400px] overflow-y-auto space-y-4 pr-2">
            {certificates.length > 0 ? (
              certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))
            ) : (
              <p className="text-gray-500">No tienes certificados registrados.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}