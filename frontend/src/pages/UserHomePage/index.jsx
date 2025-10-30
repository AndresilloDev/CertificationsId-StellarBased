import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  User, 
  Mail, 
  Lock, 
  Camera, 
  Save, 
  ClipboardCopy, 
  Eye, 
  EyeOff,
  Link as LinkIcon,
  ChevronDown
} from 'lucide-react';
import HeaderNav from '../../components/HeaderNav';

const mockCertificates = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack",
    issuer: "Academia de Código",
    date: "2024-10-25",
    isPublic: true,
    imageUrl: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Certificado"
  },
  {
    id: 2,
    title: "React Avanzado",
    issuer: "Plataforma Educativa",
    date: "2024-08-15",
    isPublic: true,
    imageUrl: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Certificado"
  },
  {
    id: 3,
    title: "Fundamentos de Blockchain",
    issuer: "Crypto University",
    date: "2024-05-30",
    isPublic: false,
    imageUrl: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Certificado"
  },
    {
    id: 4,
    title: "Fundamentos de Blockchain",
    issuer: "Crypto University",
    date: "2024-05-30",
    isPublic: false,
    imageUrl: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Certificado"
  },
];

function LoggedInHeader({ isMenuOpen, setIsMenuOpen, currentPage, setCurrentPage }) {
  return (
    <HeaderNav/>
  );
}

function DashboardPage({ certificates, onToggleVisibility }) {
  const [copySuccess, setCopySuccess] = useState('');
  const publicProfileLink = "https://stellarcert.com/u/tu-usuario-publico";

  const handleCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = publicProfileLink;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setCopySuccess('¡Copiado!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Error al copiar');
      setTimeout(() => setCopySuccess(''), 2000);
    }
    document.body.removeChild(textArea);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-4 md:py-6">
      {/* Sección de Perfil Público */}
      <div className="mt-8 p-6 md:p-8 border border-gray-200 rounded-xl bg-white shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">Perfil Público</h2>
        <p className="text-gray-600 mt-2">
          Comparte este enlace y permite que otros vean y comprueben tus certificados públicos.
        </p>
        <div className="relative mt-4">
          <input
            type="text"
            readOnly
            value={publicProfileLink}
            className="w-full pl-4 pr-28 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 text-sm font-medium text-white bg-action rounded-lg hover:bg-action-hover hover:rounded-3xl duration-300 border border-none"
          >
            {copySuccess || "Copiar"}
          </button>
        </div>
      </div>

      {/* Galería de Certificados */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Certificados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
          {certificates.map(cert => (
            <CertificateCard 
              key={cert.id} 
              cert={cert} 
              onToggleVisibility={onToggleVisibility} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}

// --- COMPONENTE DE TARJETA DE CERTIFICADO ---
function CertificateCard({ cert, onToggleVisibility }) {
  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="w-full h-40 bg-gray-100 flex items-center justify-center">
        <img 
          src={cert.imageUrl} 
          alt={`Vista previa de ${cert.title}`} 
          className="w-full h-full object-cover"
          onError={(e) => e.target.src = 'https://placehold.co/600x400/f1f5f9/94a3b8?text=Error'}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{cert.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
        <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
        
        {/* Control de Visibilidad */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <span className={`text-sm font-medium ${cert.isPublic ? 'text-green-600' : 'text-gray-500'}`}>
            {cert.isPublic ? "Público" : "Privado"}
          </span>
          <button
            onClick={() => onToggleVisibility(cert.id)}
            title={cert.isPublic ? "Hacer privado" : "Hacer público"}
            className={`p-2 rounded-lg transition-colors duration-200 ${cert.isPublic ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            {cert.isPublic ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}


// --- PÁGINA 2: CONFIGURACIÓN DE PERFIL ---
function SettingsPage({ profile, onProfileChange, onPasswordChange }) {
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
  });
  
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
  });

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPasswords(prev => ({ ...prev, [id]: value }));
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    onProfileChange(formData);
    // Aquí iría la lógica de guardado
    alert("Información de perfil guardada (simulación).");
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new.length < 6) {
       alert("La nueva contraseña debe tener al menos 6 caracteres.");
       return;
    }
    onPasswordChange(passwords);
    // Aquí iría la lógica de cambio de contraseña
    alert("Contraseña actualizada (simulación).");
    setPasswords({ current: '', new: '' });
  };

  return (
    <main className="flex items-center justify-center py-12 md:py-24 px-4">
      <div className="w-full max-w-2xl space-y-10">
        {/* Formulario de Información de Perfil */}
        <div className="w-full p-8 md:p-10 border border-gray-200 rounded-xl bg-white shadow-sm">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Configuración de Perfil
          </h1>
          <form onSubmit={handleInfoSubmit} className="space-y-6 mt-8">
            {/* Foto de Perfil */}
            <div className="flex items-center gap-4">
              <img 
                src="https://placehold.co/80x80/60a5fa/ffffff?text=U" 
                alt="Foto de perfil actual" 
                className="w-20 h-20 rounded-full border-2 border-gray-300"
              />
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-black bg-gray-100 rounded-lg hover:bg-gray-200 duration-300 border border-gray-200"
              >
                <Camera size={18} />
                Cambiar foto
              </button>
            </div>
            
            {/* Nombre */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 pt-5">
                <User size={20} />
              </span>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Tu nombre completo"
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 pt-5">
                <Mail size={20} />
              </span>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="tu.correo@ejemplo.com"
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 hover:rounded-3xl duration-300 border border-none focus:outline-none"
            >
              <Save size={18} />
              Guardar Cambios
            </button>
          </form>
        </div>
        
        {/* Formulario de Contraseña */}
        <div className="w-full p-8 md:p-10 border border-gray-200 rounded-xl bg-white shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">
            Cambiar Contraseña
          </h2>
          <form onSubmit={handlePasswordSubmit} className="space-y-6 mt-8">
            {/* Contraseña Actual */}
            <div className="relative">
              <label htmlFor="current" className="block text-sm font-medium text-gray-700 mb-1">Contraseña Actual</label>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 pt-5">
                <Lock size={20} />
              </span>
              <input
                type="password"
                id="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
              />
            </div>

            {/* Nueva Contraseña */}
            <div className="relative">
              <label htmlFor="new" className="block text-sm font-medium text-gray-700 mb-1">Nueva Contraseña</label>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 pt-5">
                <Lock size={20} />
              </span>
              <input
                type="password"
                id="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                placeholder="Mínimo 6 caracteres"
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 hover:rounded-3xl duration-300 border border-none focus:outline-none"
            >
              Actualizar Contraseña
            </button>
          </form>
        </div>
        
      </div>
    </main>
  );
}


// --- COMPONENTE PRINCIPAL DE LA APLICACIÓN ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 'dashboard' o 'settings'
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  // Estado para los certificados (simulando una BD)
  const [certificates, setCertificates] = useState(mockCertificates);
  
  // Estado para el perfil del usuario (simulando una BD)
  const [profile, setProfile] = useState({
    name: "Tu Nombre de Usuario",
    email: "tu.correo@ejemplo.com",
  });

  // --- Lógica de Negocio (Simulada) ---

  // Cambiar visibilidad de un certificado
  const toggleCertificateVisibility = (id) => {
    setCertificates(prevCerts =>
      prevCerts.map(cert =>
        cert.id === id ? { ...cert, isPublic: !cert.isPublic } : cert
      )
    );
  };
  
  // Actualizar perfil
  const handleProfileChange = (newProfile) => {
    setProfile(newProfile);
    // En una app real:
    // await api.updateProfile(newProfile);
  };
  
  // Actualizar contraseña
  const handlePasswordChange = (passwords) => {
    console.log("Cambiando contraseña:", passwords);
    // En una app real:
    // await api.changePassword(passwords.current, passwords.new);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* El header se muestra siempre, ya que el usuario está "logueado".
        Le pasamos el estado actual y la función para cambiarlo.
      */}
      <LoggedInHeader 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {currentPage === 'dashboard' && (
        <DashboardPage 
          certificates={certificates} 
          onToggleVisibility={toggleCertificateVisibility} 
        />
      )}
      
      {currentPage === 'settings' && (
        <SettingsPage 
          profile={profile}
          onProfileChange={handleProfileChange}
          onPasswordChange={handlePasswordChange}
        />
      )}
    </div>
  );
}