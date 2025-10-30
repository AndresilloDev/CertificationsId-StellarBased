import { createContext, useState, useMemo } from 'react';
import { login as api_login, register as api_register } from '../api/auth.api'
import { useEffect } from 'react';
import { useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) setUser(storedUser);
    }, []);

    const login = async (credentials) => {
        try {
            const response = await api_login(credentials);
            console.log("Login response:", response);
            setUser(response.data.user);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.error("Error en login:", error.response?.data?.message || error.message);
            throw error;
        }
    }
  const logout = () => {
        try {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setUser(null);
        } catch (error) {
            console.error("Error en logout:", error);
        }
  };

  const register = async (userData) => {
        try {
            const response = await api_register(userData);
            console.log("Register response:", response);
            setUser(response.data.user);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.error("Error en registro:", error.response?.data?.message || error.message);
            throw error;
        }
    }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      register
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};