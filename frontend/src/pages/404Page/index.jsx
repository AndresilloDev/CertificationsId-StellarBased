import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white">
      <h1 className="text-9xl font-bold text-emerald-500">404</h1>
      <p className="text-2xl font-semibold mt-4 mb-6">Página no encontrada</p>
      <p className="text-gray-600 mb-8">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}