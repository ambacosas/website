'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextProps {
  currentLanguage: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage debe ser utilizado dentro de un LanguageProvider');
  }

  return context;
};
