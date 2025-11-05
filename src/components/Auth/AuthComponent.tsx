// AuthComponent: troca entre Login e Registro mantendo a URL em sincronia
// - Mostra LoginForm em /login e RegisterForm em /register
// - Botão de toggle navega e atualiza o modo
import { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import {
  ToggleContainer,
  ToggleButton,
  Container,
  AuthContainer,
  AuthTitle,
} from './styled';

import { LoginForm } from '../Login/LoginForm';
import { RegisterForm } from '../Register/RegisterForm';

type AuthMode = 'login' | 'register';

export function AuthComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Define o modo inicial com base na rota atual
  const initialMode = location.pathname === '/register' ? 'register' : 'login';
  const [mode, setMode] = useState<AuthMode>(initialMode);

  // Mantém o modo sincronizado quando a URL muda externamente
  useEffect(() => {
    setMode(location.pathname === '/register' ? 'register' : 'login');
  }, [location.pathname]);

  // Alterna entre login/register e navega para a rota correspondente
  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
    navigate(`/${newMode}`);
  };

  return (
    <Container>
      <AuthContainer>
        <AuthTitle>
          {mode === 'login' ? 'Faça o Login' : 'Crie sua Conta'}
        </AuthTitle>
        {/* Renderiza o formulário apropriado conforme o modo */}
        {mode === 'login' ? <LoginForm /> : <RegisterForm />}
        <ToggleContainer>
          {mode === 'login' ? (
            <>
              <p>Ainda não tem uma conta?</p>
              <ToggleButton
                $active={false}
                onClick={() => handleModeChange('register')}
              >
                Cadastre-se
              </ToggleButton>
            </>
          ) : (
            <ToggleButton
              $active={false}
              onClick={() => handleModeChange('login')}
            >
              Login
            </ToggleButton>
          )}
        </ToggleContainer>
      </AuthContainer>
    </Container>
  );
}
