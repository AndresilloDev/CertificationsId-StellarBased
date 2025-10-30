import { useState } from "react";
import { User, Share2, Home, FileText, Clock, Search } from "lucide-react";

export default function CertificationHistory() {
    const [searchTerm, setSearchTerm] = useState("");

    const certificatesHistory = [
        {
            id: 1,
            name: "Diplomado en Inteligencia Artificial",
            institution: "UNAM",
            date: "15 de mayo de 2024",
            categories: ["académico", "profesional"],
            email: "ana.lopez@unam.mx",
        },
        {
            id: 2,
            name: "Certificación Profesional en AWS",
            institution: "Amazon Web Services",
            date: "2 de marzo de 2023",
            categories: ["profesional"],
            email: "carlos.perez@empresa.com",
        },
        {
            id: 3,
            name: "Curso de Comunicación Efectiva",
            institution: "Coursera",
            date: "20 de septiembre de 2022",
            categories: ["personal"],
            email: "mariana.gomez@gmail.com",
        },
    ];

    const filteredCertificates = certificatesHistory.filter(
        (cert) =>
            cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.categories.some((cat) =>
                cat.toLowerCase().includes(searchTerm.toLowerCase())
            ) ||
            cert.date.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const categoryColors = {
        académico: "bg-green-100 text-green-700",
        profesional: "bg-blue-100 text-blue-700",
        personal: "bg-yellow-100 text-yellow-700",
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Topbar */}
            <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <span className="text-2xl font-semibold text-header">
                        Stellar Certification Protocol
                    </span>
                </div>

                <nav className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
                        <Home size={18} /> Home
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
                        <FileText size={18} /> Certificados
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-green-700">
                        <Clock size={18} /> Historial
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-700">
                        <User size={18} /> Perfil
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">
                        <Share2 size={16} /> Compartir
                    </button>
                </nav>
            </header>

            {/* Contenido principal */}
            <main className="max-w-7xl mx-auto w-full px-6 py-10 space-y-8 flex-1">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Historial de Certificación
                </h2>

                {/* Barra de búsqueda */}
                <div className="relative max-w-md">
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar por nombre o institución..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-700"
                    />
                </div>

                {/* Lista de certificados */}
                <section className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 max-w-full overflow-hidden">
                    <div className="max-h-[450px] overflow-y-auto space-y-6 pr-2">
                        {filteredCertificates.length > 0 ? (
                            filteredCertificates.map((cert) => (
                                <div key={cert.id} className="space-y-2">
                                    {/* Fecha */}
                                    <p className="text-lg text-gray-700 font-semibold">
                                        Fecha de certificación:{" "}
                                        <span className="text-gray-900">{cert.date}</span>
                                    </p>

                                    {/* Card de certificado */}
                                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex justify-between items-center">
                                        <div>
                                            <h4 className="font-semibold text-lg text-gray-800">{cert.name}</h4>
                                            <p className="text-gray-600">{cert.institution}</p>
                                            <div className="flex gap-2 mt-2">
                                                {cert.categories.map((cat) => (
                                                    <span
                                                        key={cat}
                                                        className={`px-3 py-1 text-xs rounded-full ${categoryColors[cat]}`}
                                                    >
                                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Lado derecho: correo */}
                                        <div className="text-sm text-gray-600 font-medium">
                                            {cert.email}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">
                                No se encontraron certificados que coincidan con la búsqueda.
                            </p>
                        )}
                    </div>
                </section>
            </main>
        </div>


    );
}