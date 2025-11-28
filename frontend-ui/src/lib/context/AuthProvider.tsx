'use client';

import { createContext, useContext, useEffect } from 'react';
import { useAuthStore } from '@/lib/store/auth-store';

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  verifyOtp: (otp: string) => Promise<void>;
  resendOtp: (email: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authStore = useAuthStore();

  useEffect(() => {
    // Check for existing auth on mount
    const token = authStore.token;
    if (token) {
      // TODO: Validate token with backend
      console.log('Token exists, validating...');
    }
  }, [authStore.token]);

  const value = {
    user: authStore.user,
    isAuthenticated: authStore.isAuthenticated,
    isLoading: authStore.isLoading,
    login: authStore.login,
    register: authStore.register,
    verifyOtp: authStore.verifyOtp,
    resendOtp: authStore.resendOtp,
    resetPassword: authStore.resetPassword,
    logout: authStore.logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
