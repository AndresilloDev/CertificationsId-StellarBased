import { href } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border border-gray-200 m-4 mx-16 rounded-xl sticky top-4 bg-transparent backdrop-blur-lg z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              I
            </div>
            <span className="text-2xl font-semibold">Stellar Certification Protocol</span>
          </div>

                <div className="flex items-center gap-3">
                <a
                  href="/contact"
                  className="px-6 py-2.5 text-sm font-medium text-black bg-secondary rounded-lg hover:bg-secondary-hover hover:rounded-3xl duration-300 border border-border"
                >
                  Contactanos
                </a>

                <div role="separator" aria-orientation="vertical" className="h-6 w-px bg-gray-200 mx-2" />

                <a
                  href="/login"
                  className="px-6 py-2.5 text-sm font-medium text-black bg-secondary rounded-lg hover:bg-secondary-hover hover:rounded-3xl duration-300 border border-border"
                >
                  Inicia sesión
                </a>
                <a
                  href="/register"
                  className="px-6 py-2.5 text-sm font-medium text-white bg-action rounded-lg hover:bg-action-hover hover:rounded-3xl duration-300 border border-none"
                >
                  Registrate
                </a>
                </div>
              </div>
              </header>

              {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">

            {/* Heading */}
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Certificados digitales seguros y verificables
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-700 leading-relaxed">
              La forma más fácil de verificar tus credenciales académicas y profesionales en la era digital.
            </p>

            {/* CTA Card */}
            <div className="inline-block">
              <button className="group px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors flex items-center gap-3">
                <span className="text-base font-medium">
                  virtaul wallet
                </span>
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

          {/* Right Column - Visual */}
          <div className="relative h-[600px] bg-gray-100 rounded-3xl flex items-center justify-center">
              
          </div>
        </div>
      </main>
    </div>
  );
}