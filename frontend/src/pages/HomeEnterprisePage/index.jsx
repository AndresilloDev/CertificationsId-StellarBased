import React from 'react';
import { UserCircleIcon, AcademicCapIcon, BoltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

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
      
      {/* 1. HEADER: Usamos el top bar de tu último componente, pero con navegación de dashboard/emisión */}
      <header className="border border-gray-200 m-4 mx-auto max-w-7xl rounded-xl sticky top-4 bg-white/70 backdrop-blur-lg z-10">
        <div className="mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
              J
            </div>
            <span className="text-xl font-semibold text-gray-800">MiPlataforma</span>
          </div>
          <div className="flex items-center gap-3">
            {/* Botones de acción del nuevo diseño (Emitir, Historial, API) */}
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 duration-300">
              Emitir certificado
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-black duration-300">
              Historial
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-black duration-300">
              Api
            </a>
            
            <div role="separator" aria-orientation="vertical" className="h-6 w-px bg-gray-200 mx-2" />
            
            {/* Información del usuario */}
            <div className="flex items-center gap-2 cursor-pointer">
               <span className="text-sm font-medium text-gray-800">Jariano</span>
               <UserCircleIcon className="w-8 h-8 text-gray-600" />
            </div>
          </div>
        </div>
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