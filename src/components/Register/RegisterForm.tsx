// Formulário de Registro
// Validação com Zod + react-hook-form (confere e-mail, força senha mínima e igualdade de confirmação).
// Envia para o AuthContext e dá feedback com toast.
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';

import {
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
} from '../Login/styled';

// Regras básicas: e-mail válido, senha com 6+ caracteres e confirmação igual
const registerSchema = z
  .object({
    email: z.string().email({ message: 'Formato de e-mail inválido.' }),
    password: z
      .string()
      .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não conferem.',
    path: ['confirmPassword'],
  });
type RegisterData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  // Cria usuário e orienta a fazer login após sucesso
  const handleRegister = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      await registerUser(data.email, data.password);
      toast.success('Usuário registrado! Por favor, faça o login.');
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        toast.error('Este e-mail já está cadastrado.');
      } else {
        toast.error('Ocorreu um erro ao registrar.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleRegister)}>
      <FormGroup>
        <Label htmlFor="email-reg">E-mail</Label>
        <Input type="email" id="email-reg" {...register('email')} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="pass-reg">Senha (mín. 6 caracteres)</Label>
        <Input type="password" id="pass-reg" {...register('password')} />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="confirm-pass">Confirmar Senha</Label>
        <Input
          type="password"
          id="confirm-pass"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
        )}
      </FormGroup>

      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? <FaSpinner /> : 'Registrar'}
      </SubmitButton>
    </Form>
  );
}
