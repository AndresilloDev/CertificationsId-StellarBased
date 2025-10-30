import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function APIGuidePage() {
  
  // Contenido de la guía (listo para que lo edites)
  const guideSteps = [
    {
      title: "Paso 1:",
      content: "Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau"
    },
    {
      title: "Paso 2:",
      content: "Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau"
    },
    {
      title: "Paso 3:",
      content: "Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau"
    },
    {
      title: "Paso 4:",
      content: "Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau, Nya, miau, guau guau"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HEADER: La alineación está asegurada por 'items-center' en el div principal y el div del logo */}
      <header className="border border-gray-200 m-4 mx-auto max-w-7xl rounded-xl sticky top-4 bg-white/70 backdrop-blur-lg z-10">
        <div className="mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">LOGO</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 duration-300">
              Emitir certificado
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-black duration-300">
              Historial
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg duration-300">
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