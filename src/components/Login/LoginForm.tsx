// Formulário de Login
// Validação com Zod + react-hook-form, envia credenciais para o AuthContext
// e dá feedback com toast. Redireciona pra Home no sucesso.
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../contexts/AuthContext.tsx';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

// Estilos compartilhados do módulo de auth
import {
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
} from './styled.ts';

// Regras mínimas de login (e-mail válido e senha obrigatória)
const loginSchema = z.object({
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(1, 'A senha é obrigatória.'),
});
type LoginData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { login: loginUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  // Envia para o contexto de auth e trata estados/erros
  const handleLogin = async (data: LoginData) => {
    setIsLoading(true);
    try {
      await loginUser(data.email, data.password);
      toast.success('Login efetuado!');
      navigate('/'); // Redireciona para a Home
    } catch (err: any) {
      toast.error('E-mail ou senha inválidos.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <FormGroup>
        <Label htmlFor="email-login">E-mail:</Label>
        <Input type="email" id="email-login" {...register('email')} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="pass-login">Senha:</Label>
        <Input type="password" id="pass-login" {...register('password')} />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </FormGroup>

      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? <FaSpinner /> : 'Entrar'}
      </SubmitButton>
    </Form>
  );
}
