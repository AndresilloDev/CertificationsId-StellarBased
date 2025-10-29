export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border border-gray-200 m-4 rounded-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <span className="text-2xl font-semibold text-header">
              Stellar Certification Protocol
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-full hover:bg-gray-200 transition-colors">
              For businesses
            </button>
            <button className="px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Log in
            </button>
            <button className="px-6 py-2.5 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Registration Form */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900">Crea tu cuenta</h1>
            <p className="text-lg text-gray-700">
              Regístrate para acceder al sistema Stellar Certification Protocol.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Apellido paterno"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Apellido materno"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Dirección"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Teléfono móvil"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
              >
                Registrarse y confirmar
              </button>

              <p className="text-center text-gray-600">
                ¿Ya tienes cuenta?{" "}
                <button
                  type="button"
                  className="text-green-700 font-medium hover:underline"
                >
                  Regresar al inicio de sesión
                </button>
              </p>
            </form>
          </div>

          {/* Right Column - Visual Section */}
          <div className="relative h-[600px] bg-gray-100 rounded-3xl flex items-center justify-center">
            <div className="bg-green-500 rounded-full px-8 py-4 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <span className="text-3xl font-semibold text-green-900">
                link
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}