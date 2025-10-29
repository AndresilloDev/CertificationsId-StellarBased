import { createContext, useState, useMemo } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Simulación de estado de autenticación.
  // Cambia esto a 'null' para probar rutas públicas.
  // Cambia esto a un objeto { name: 'Admin' } para probar rutas privadas.
  const [user, setUser] = useState(null); 

  const login = (userData) => {
    // Aquí iría tu lógica de axios.post
    setUser(userData);
  };

  const logout = () => {
    // Lógica de logout
    setUser(null);
  };

  // Usamos useMemo para evitar renders innecesarios
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};