import React, { createContext, useContext, useState, useEffect } from 'react';

// Definição do tipo para o contexto
type SessionContextType = {
  session: boolean | null; // null indica carregamento
  isLoading: boolean;
  signIn: () => void;
  signOut: () => void;
};

// Criação do contexto com um valor inicial
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Provedor do contexto
export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simula o carregamento inicial do estado da autenticação
  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);
      // Simular carregamento inicial
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSession(false); // Defina como `true` se quiser simular usuário autenticado
      setIsLoading(false);
    };

    checkSession();
  }, []);

  const signIn = () => {
    setSession(true);
  };

  const signOut = () => {
    setSession(false);
  };

  return (
    <SessionContext.Provider value={{ session, isLoading, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
};

// Hook para usar o contexto em qualquer componente
export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession deve ser usado dentro de um SessionProvider');
  }
  return context;
};
