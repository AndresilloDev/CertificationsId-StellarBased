import React from 'react';
// Íconos anteriores
import { UserCircleIcon } from '@heroicons/react/24/outline';
// Íconos de la nueva barra de navegación (Lucide)
import { User, Share2, Home, FileText, Clock } from 'lucide-react';

export default function APIGuidePage() {

  // Contenido de la guía (listo para que lo edites)
  const guideSteps = [
    {
      title: "Paso 1: Obtención de Credenciales",
      content: "Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau"
    },
    {
      title: "Paso 2: Endpoint de Firma",
      content: "Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau"
    },
    {
      title: "Paso 3: Verificación de Estado",
      content: "Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau"
    },
    {
      title: "Paso 4: Manejo de Errores",
      content: "Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau"
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* 1. HEADER: TOPBAR COMPLETA CON ESTILO DE DASHBOARD */}
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-2">
          {/* LOGO DE STELLAR */}
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <span className="text-2xl font-semibold text-gray-800">
            Stellar Protocol
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {/* Botón Certificados (Dashboard) */}
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
            <FileText size={18} /> Emitir certificados
          </button>
          {/* Botón Historial */}
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
            <Clock size={18} /> Historial
          </button>
          {/* Botón ACTIVO para esta página (API) */}
          <button className="flex items-center gap-2 text-sm font-semibold text-green-700 border-b-2 border-green-700 pb-1">
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

      {/* 2. MAIN CONTENT: Contenido de la Guía de API */}
      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12">
          Guia de API
        </h1>

        {/* Pasos de la Guía */}
        <div className="space-y-10">
          {guideSteps.map((step, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {step.content}
              </p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
