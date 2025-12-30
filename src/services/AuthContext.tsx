import React, {createContext, useContext, useState, ReactNode} from 'react';
import {login as loginService, signup as signupService} from './authService';

type User = {id?: number; name?: string; email?: string} | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: ReactNode}) {
  const [user, setUser] = useState<User>(null);

  const login = async (email: string, password: string) => {
    const res = await loginService(email, password);
    setUser({email, name: res.user.name});
  };

  const signup = async (name: string, email: string, password: string) => {
    const res = await signupService(name, email, password);
    setUser({name: res.user.name, email: res.user.email});
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, signup, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
