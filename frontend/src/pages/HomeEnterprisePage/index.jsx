import React from 'react';
// Íconos del dashboard anterior
import { AcademicCapIcon, BoltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
// Íconos de la nueva barra de navegación (Lucide)
import { User, Share2, Home, FileText, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Componente para las tarjetas de métricas (Número de certificados, categorías, etc.)
const MetricCard = ({ title, value, icon: IconComponent, colorClass = 'text-gray-900' }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      {/* Usamos el componente de ícono si se proporciona */}
      {IconComponent && <IconComponent className={`w-6 h-6 ${colorClass}`} />}
    </div>
    <p className={`text-4xl font-bold ${colorClass}`}>{value}</p>
  </div>
);

export default function CertificationsDashboard() {
  const navigate = useNavigate();

  // Aquí puedes simular datos reales de tu API
  const metrics = [
    { title: "Número de certificados emitidos", value: "11K+", colorClass: "text-green-700", icon: AcademicCapIcon },
  ];

  const categories = [
    { title: "Software", value: "4K", colorClass: "text-blue-600", icon: CodeBracketIcon },
    { title: "TI", value: "2K", colorClass: "text-purple-600", icon: BoltIcon },
    { title: "Text ej", value: "5K", colorClass: "text-red-600", icon: AcademicCapIcon }, // Icono genérico para ejemplo
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 1. HEADER: TOPBAR MEZCLADA Y MEJORADA */}
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-2">
          {/* LOGO DE STELLAR BASADO EN TU HISTORIAL */}
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
          <button className="flex items-center gap-2 text-sm font-semibold text-green-700 border-b-2 border-green-700 pb-1">
            <Home size={18} /> Home
          </button>

          {/* Botón ACTIVO para esta página (Dashboard/Certificados) */}
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700"
            onClick={() => navigate("/certificates")}
          >
            <FileText size={18} /> Certificados
          </button>
          {/* Botón para la vista de Emisión (Tu index.jsx) */}
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
            <Clock size={18} /> Historial
          </button>
          {/* Botón para la vista de Historial */}
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


      {/* 2. MAIN CONTENT: Contenido del Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Estadísticas Stellar
        </h1>

        {/* Métrica principal: Número de certificados emitidos */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Métricas Globales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Se renderiza el primer elemento de la métrica principal */}
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                colorClass={metric.colorClass}
              />
            ))}
          </div>
        </div>

        {/* Certificados por categoría */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Certificados por categoría</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <MetricCard
                key={index}
                title={category.title}
                value={category.value}
                icon={category.icon}
                colorClass={category.colorClass}
              />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
