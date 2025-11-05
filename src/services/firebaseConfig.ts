// Configuração e inicialização do Firebase para autenticação.

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Lê variáveis de ambiente (Vite expõe apenas chaves prefixadas com VITE_)
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;

// Aviso em desenvolvimento se alguma variável estiver ausente
if (import.meta.env.DEV) {
  const missing = [
    ['VITE_FIREBASE_API_KEY', apiKey],
    ['VITE_FIREBASE_AUTH_DOMAIN', authDomain],
    ['VITE_FIREBASE_PROJECT_ID', projectId],
    ['VITE_FIREBASE_STORAGE_BUCKET', storageBucket],
    ['VITE_FIREBASE_MESSAGING_SENDER_ID', messagingSenderId],
    ['VITE_FIREBASE_APP_ID', appId],
  ].filter(([, v]) => !v);
  if (missing.length) {
    // eslint-disable-next-line no-console
    console.warn(
      `Firebase env faltando: ${missing.map(([k]) => k).join(', ')}. Preencha seu .env (veja .env.example).`
    );
  }
}

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
