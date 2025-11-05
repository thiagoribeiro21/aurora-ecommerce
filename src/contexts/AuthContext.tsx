// Contexto de Autenticação (Firebase)
// Mantém o usuário logado e expõe ações de register/login/logout para o app.
// Observa mudanças de sessão via onAuthStateChanged.
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

import {
  type User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  register: (email: string, pass: string) => Promise<void>;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Observa o estado de autenticação do Firebase e atualiza o usuário do contexto
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          setUser({ email: firebaseUser.email! });
        } else {
          setUser(null);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  // Cria um usuário com e-mail/senha
  const register = async (email: string, pass: string) => {
    await createUserWithEmailAndPassword(auth, email, pass);
  };

  // Faz login com e-mail/senha
  const login = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };

  // Encerra a sessão atual
  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
