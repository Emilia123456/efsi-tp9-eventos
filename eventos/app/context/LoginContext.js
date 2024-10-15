"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext();
 
export const useAuth = () => useContext(LoginContext);

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
