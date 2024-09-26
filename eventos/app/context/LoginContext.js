"use client";
import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const LoginContext = createContext();

// Custom hook para acceder al contexto
export const useAuth = () => useContext(LoginContext);

// Proveedor del contexto
export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = (userData, token) => {
    setUser({ ...userData, token });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
