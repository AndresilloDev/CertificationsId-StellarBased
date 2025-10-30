import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import Header from "../../components/Header";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", { email, password });
    try {
      await login({ email, password });
    } catch (error) {
      console.error("Error en inicio de sesión:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="flex items-center justify-center py-12 md:py-24 px-4">
        <div className="w-full max-w-md p-8 md:p-10 border border-gray-200 rounded-xl bg-white">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Bienvenido de nuevo
            </h1>
            <p className="text-base text-gray-600 mt-2">
              Accede a tu cuenta para continuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={20} />
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={20} />
              </span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 transition duration-200"
              />
            </div>

            <div className="text-right">
              <Link
                to="/recover-password"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-base font-medium text-white bg-action rounded-lg hover:bg-action-hover hover:rounded-3xl duration-300 border border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Iniciar sesión
            </button>
          </form>

          {/* Link a Registrarse */}
          <p className="text-center text-sm text-gray-600 mt-8">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/register"
              className="font-medium text-black hover:underline"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}