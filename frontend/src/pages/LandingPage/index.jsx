import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main (sin cambios) */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Certificados digitales seguros y verificables
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              La forma más fácil de verificar tus credenciales académicas y
              profesionales en la era digital.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="group px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors flex items-center gap-3">
                <span className="text-base font-medium">virtual wallet</span>
                <svg
                  className="w-5 h-5 text-gray-700 group-hover:translate-x-1 transition-transform"
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
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
  <video
    className="w-full h-full object-cover rounded-3xl"
    src="https://cdn.pixabay.com/video/2023/08/01/174086-850404739_large.mp4"
    controls
    muted
    loop
    autoPlay
  >
    Tu navegador no soporta el elemento de video.
  </video>
</div>

        </div>
      </main>
    </div>
  );
}