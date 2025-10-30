import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header";

export const JoinUsPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="text-center mb-16 md:mb-20">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-4">
                        Únete a nosotros
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Elige el plan que mejor se adapte a tus necesidades
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-10 space-y-8">
                        <div className="space-y-3">
                            <div className="inline-block px-4 py-2 bg-action-hover text-white rounded-full text-sm font-medium text-gray-800">
                                Gratis
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Plan Estudiante
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Perfecto para estudiantes que buscan verificar sus
                                credenciales académicas
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="font-semibold text-lg text-gray-900">
                                Características incluidas:
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Verificación de certificados académicos",
                                    "Almacenamiento seguro en blockchain",
                                    "Acceso a wallet digital personal",
                                    "Compartir credenciales fácilmente",
                                    "Soporte técnico básico",
                                    "Actualizaciones automáticas",
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">

                                        <svg
                                            className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button
                            className="w-full mt-8 px-6 py-4 bg-action hover:bg-action-hover text-white rounded-2xl transition-colors text-base font-medium cursor-pointer"
                            onClick={() => navigate('/register')}
                        >
                            Comenzar gratis
                        </button>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 md:p-10 space-y-8">
                        <div className="space-y-3">
                            <div className="inline-block px-4 py-2 bg-action-hover text-white rounded-full text-sm font-medium text-gray-800">
                                Empresas
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Plan Corporativo
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Soluciones personalizadas para organizaciones
                                que emiten certificados
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="font-semibold text-lg text-gray-900">
                                Beneficios empresariales:
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Emisión ilimitada de certificados",
                                    "API de integración completa",
                                    "Panel de administración avanzado",
                                    "Personalización de marca",
                                    "Análisis y reportes detallados",
                                    "Gestión de múltiples usuarios",
                                    "Cumplimiento normativo garantizado",
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className="group w-full mt-8 px-6 py-4 bg-action hover:bg-action-hover text-white rounded-2xl transition-colors text-base font-medium flex items-center justify-center gap-3 cursor-pointer"
                            onClick={() => navigate('/contact')}
                        >
                            <span>Contáctanos</span>
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 7l9.586 9.586M17 7v10H7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};