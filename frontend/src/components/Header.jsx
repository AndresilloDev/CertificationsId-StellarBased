import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border border-gray-200 m-4 lg:mx-16 rounded-xl sticky top-4 bg-white/80 backdrop-blur-lg z-10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        I
                    </div>
                    <Link
                        to="/"
                        className="text-xl md:text-2xl font-semibold text-center"
                    >
                        BlockTrust
                    </Link>
                </div>

                {/* Navegación de Escritorio (Ahora con <Link>) */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        to="/joinus"
                        className="px-6 py-2.5 text-sm font-medium text-white bg-action rounded-lg hover:bg-action-hover hover:rounded-3xl duration-300 border border-none w-full sm:w-auto text-center"
                    >
                        Únete gratis
                    </Link>
                    <Link
                        to="/login"
                        className="px-6 py-2.5 text-sm font-medium text-black bg-secondary rounded-lg hover:bg-secondary-hover hover:rounded-3xl duration-300 border border-border w-full sm:w-auto text-center"
                    >
                        Inicia sesión
                    </Link>
                </div>

                {/* Botón de Hamburguesa (Móvil) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        aria-label="Abrir menú principal"
                    >
                        <div className="w-6 h-6 flex flex-col justify-around">
                            <span
                                className={`block h-0.5 w-full bg-gray-800 rounded-full transform transition duration-300 ease-in-out ${
                                    isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                                }`}
                            />
                            <span
                                className={`block h-0.5 w-full bg-gray-800 rounded-full transition-opacity duration-300 ${
                                    isMenuOpen ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            <span
                                className={`block h-0.5 w-full bg-gray-800 rounded-full transform transition duration-300 ease-in-out ${
                                    isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Menú Desplegable (Móvil) (Ahora con <Link>) */}
            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
                    <Link
                        to="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full px-4 py-3 text-center text-sm font-medium text-black bg-secondary rounded-lg hover:bg-secondary-hover border border-border"
                    >
                        Contáctanos
                    </Link>
                    <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full px-4 py-3 text-center text-sm font-medium text-black bg-secondary rounded-lg hover:bg-secondary-hover border border-border"
                    >
                        Inicia sesión
                    </Link>
                    <Link
                        to="/register"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-action rounded-lg hover:bg-action-hover"
                    >
                        Regístrate
                    </Link>
                </div>
            </div>
        </header>
    );
}