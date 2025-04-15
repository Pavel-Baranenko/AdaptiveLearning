"use client"
import { createContext, useContext } from 'react';
import { useAuthStore } from './useAuthStore';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const authState = useAuthStore();

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);