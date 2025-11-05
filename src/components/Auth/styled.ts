// Estilos da área de autenticação: card centralizado, título e toggle
import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const AuthContainer = styled.div`
  /* Card de autenticação */
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
  @media (min-width: 1024px) {
    max-width: 450px;
  }
`;
export const ToggleContainer = styled.div`
  /* CTA para alternar entre login e registro */
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const ToggleButton = styled.button<{ $active: boolean }>`
  /* Link de alternância com ênfase sutil */
  text-align: end;
  font-size: 1rem;
  text-decoration: underline;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const AuthTitle = styled.h1`
  /* Título do card */
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 400;
  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
`;
